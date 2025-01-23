import { GeoJSON } from 'react-leaflet';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { fetchGeoJson, fetchPopulationData } from '../../services';
import { useApp, useToast } from '../../context';
import { mergeGeoJsonWithPopulation } from '../../utils';
import { GeoJsonResponse, MergedGeoJsonResponse } from '../../interfaces';
import { EvolutionChart, MapMenu, Logo, BackButton } from '../../component';
import InstructionsModal from '../../component/InstructionsModal/InstructionsModal.component';

export const MapViewPage: React.FC = () => {
  const [geojson, setGeoJson] = useState<MergedGeoJsonResponse | null>(null);

  const { setClickedArea, clickedArea } = useToast();
  const { showInstructionsModal } = useApp()
  const [tileLayerUrl, setTileLayerUrl] = useState<string>(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
  );

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

  return (
    <MapContainer
      style={{
        height: '100vh',
        borderRadius: '20px', // Arredondamento nas bordas
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)', // Sombra elegante
        transition: 'opacity 1s ease-in-out',
      }}
      bounds={[
        [-23.234708, -45.928813],
        [-23.198917, -45.900761],
      ]}
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
                  setClickedArea(feature);
                } else {
                  console.warn('Nenhuma população encontrada para esta área');
                }
              },
            });


            const last_feature_population = feature.properties.populacao[feature.properties.populacao.length - 1].populacao



            layer.bindTooltip(
              `
              <div style="text-align: center;">
                <strong>${feature.properties.name || 'Região Desconhecida'}</strong><br/>
                Zona: ${feature.properties.zona || 'N/A'}<br/>
                Setor: ${feature.properties.setor || 'N/A'}<br/>
                População: ${last_feature_population || 'N/A'}
              </div>
              `,
              {
                permanent: false,  // Define se o tooltip deve ser exibido permanentemente
                direction: 'top',  // Posição do tooltip
                opacity: 0.9,      // Transparência do balão
                className: 'custom-tooltip', // Classe personalizada para CSS
              }
            );
          }}
        />
      )}

      {clickedArea && clickedArea.properties.populacao.length > 0 && <EvolutionChart />}

      {clickedArea === null && showInstructionsModal === false && <MapMenu setTileLayer={setTileLayerUrl} />}

      {
        showInstructionsModal && (
          <InstructionsModal />
        )
      }

      <Logo />
      <BackButton />
    </MapContainer>
  );
};
