import { GeoJSON } from 'react-leaflet';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { Toast } from './component/Toast/Toast.component';

function App(): React.ReactNode {
  const [geojson, setGeoJson] = useState(null)
  const [populationJson, setPopulationJson] = useState<any[]>([])
  const [clickedAreaPopulation, setClickedAreaPopulation]= useState<any[] | null>(null)

  useEffect(() => {
    fetch('/bairros-geojson')
      .then((res) => {
        return res.json();
      })
      .then((geoJson) => {
        console.log('Response', geoJson)
        setGeoJson(geoJson);
      }).catch(err => console.log('err', err))


    callPopulationAreaHistory()
  }, [])


  const callPopulationAreaHistory = () => {
    fetch('/populacao').then((res) => {
      return res.json();
    })
      .then((population) => {
        console.log('Response', population)
        setPopulationJson(population)
      }).catch(err => console.log('err', err))
  }


  const closeToast = () => {
    setClickedAreaPopulation(null)
  }


  return (
    <>
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
            data={geojson}
            style={{ color: '#6c58ff' }}
            eventHandlers={{
              click: (event) => {
                console.log('feature (bairro):', event.sourceTarget.feature);

                const feature = event.sourceTarget.feature

                console.log('populationJson', populationJson)

                if (populationJson && 
                  Array.isArray(populationJson)
                ) {
                  console.log(
                    populationJson.filter(item => item.id_geometria === feature.properties.id
                    ))

                  setClickedAreaPopulation(
                    populationJson.filter(item => item.id_geometria === feature.properties.id
                    ))
                }
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
    </>
  );
}

export default App;
