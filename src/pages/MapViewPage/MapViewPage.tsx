import { GeoJSON } from 'react-leaflet';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { fetchGeoJson, fetchPopulationData } from '../../services';
import { useToast } from '../../context';
import { mergeGeoJsonWithPopulation } from '../../utils';
import { GeoJsonResponse, MergedGeoJsonResponse } from '../../interfaces';
import { EvolutionChart, MapMenu, Logo, BackButton } from '../../component';

export const MapViewPage: React.FC = () => {
  const [geojson, setGeoJson] = useState<MergedGeoJsonResponse | null>(null)

  const { setClickedAreaPopulation, clickedAreaPopulation } = useToast()

  const [tileLayerUrl, setTileLayerUrl] = useState<string>('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const geoJsonData = await fetchGeoJson();
        const populationData = await fetchPopulationData();
        const mergedData = mergeGeoJsonWithPopulation(geoJsonData, populationData);
        setGeoJson(mergedData);
      } catch (error) {
        console.error('Error processing data:', error);
      }
    };
    fetchData();
  }, []);


  return (<MapContainer
    style={{
      height: '100vh',
      borderRadius: '20px', // Arredondamento nas bordas
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)', // Sombra elegante,
      transition: 'opacity 1s ease-in-out',
    }}
    bounds={[[-23.234708, -45.928813], [-23.198917, -45.900761]]}
    zoom={15}
    zoomControl={false} // Remove o zoom padrão para estilizar manualmente
  >
    <TileLayer
      url={tileLayerUrl}
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
    />

    {geojson && (
      <GeoJSON
        data={geojson as GeoJsonResponse}
        style={() => ({
          color: 'rgb(109, 204, 101)',
          weight: 1.5,
          fillColor: 'rgb(109, 204, 101)',
          fillOpacity: 0.4,
          transition: 'fillColor 0.5s',

        })}
        onEachFeature={(feature, layer) => {
          layer.on({
            mouseover: (event) => {
              event.target.setStyle({
                fillColor: 'rgb(7, 45, 46)',
                fillOpacity: 0.7,
              });
              event.target.bringToFront();
            },
            mouseout: (event) => {
              event.target.setStyle({
                fillColor: 'rgb(109, 204, 101)',
                fillOpacity: 0.4,
              });
            },
            click: (event) => {
              if (feature.properties.populacao) {
                setClickedAreaPopulation(feature.properties.populacao);
              } else {
                console.warn('Nenhuma população encontrada para esta área');
              }
            },
          });
        }
        }
      />
    )}
    {clickedAreaPopulation && clickedAreaPopulation.length > 0 && <EvolutionChart />}

    {clickedAreaPopulation || (
      <MapMenu setTileLayer={setTileLayerUrl} />
    )}

    <Logo />
    <BackButton />
  </MapContainer>);
}
