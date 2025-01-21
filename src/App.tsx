import { GeoJSON } from 'react-leaflet';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { Toast } from './component/Toast/Toast.component';
import { fetchGeoJson, fetchPopulationData } from './services/apiService';
import { ToastProvider } from './context/ToastContext';
import { mergeGeoJsonWithPopulation } from './utils/dataProcessor';
import { GeoJsonResponse, MergedGeoJsonResponse } from './interfaces/GeojsonPopulation';

function App(): React.ReactNode {
  const [geojson, setGeoJson] = useState<MergedGeoJsonResponse | null>(null)
  const [clickedAreaPopulation, setClickedAreaPopulation] = useState<any[] | null>(null)

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
    <ToastProvider>
      <MapContainer
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
                setClickedAreaPopulation(feature.properties.populacao || []);
              },
            }}
          />
        )}

        {clickedAreaPopulation && (
          <Toast
            evolucao_bairro={clickedAreaPopulation}
          />
        )}
      </MapContainer>
    </ToastProvider>
  );
}

export default App;
