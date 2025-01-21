import { GeoJSON } from 'react-leaflet';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { fetchGeoJson, fetchPopulationData } from '../services/apiService';
import { useToast } from '../context/ToastContext';
import { mergeGeoJsonWithPopulation } from '../utils/dataProcessor';
import { GeoJsonResponse, MergedGeoJsonResponse } from '../interfaces/GeojsonPopulation';
import ThreeLayer from '../component/ThreeLayer/ThreeLayer.component';

const MapViewPage: React.FC = () => {
 const [geojson, setGeoJson] = useState<MergedGeoJsonResponse | null>(null)

  const { setClickedAreaPopulation, clickedAreaPopulation } = useToast()

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


  return  <MapContainer
      style={{ height: '100vh' }}
      bounds={[[-23.234708, -45.928813], [-23.198917, -45.900761]]}
      zoom={15}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=BcCw9iWXRyBExU9XfTBr"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {geojson && (
        <GeoJSON
          data={geojson as GeoJsonResponse}
          style={{ color: '#6c58ff' }}
          eventHandlers={{
            click: (event) => {
              const feature = event.sourceTarget.feature;
              console.log('Feature clicada:', feature.properties);
              
              if (feature.properties.populacao) {
                setClickedAreaPopulation(feature.properties.populacao);
              } else {
                console.warn('Nenhuma população encontrada para esta área');
              }
            },
          }}
        />
      )}
       {clickedAreaPopulation && clickedAreaPopulation.length > 0 && <ThreeLayer />}
    </MapContainer>;
}

export default MapViewPage;