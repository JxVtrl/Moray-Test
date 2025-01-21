export const fetchGeoJson = async () => {
  try {
    const response = await fetch('/bairros-geojson');
    if (!response.ok) {
      throw new Error('Erro ao buscar dados GeoJSON');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro na requisição de GeoJSON:', error);
    throw error;
  }
};

export const fetchPopulationData = async () => {
  try {
    const response = await fetch('/populacao');
    if (!response.ok) {
      throw new Error('Erro ao buscar dados populacionais');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro na requisição de população:', error);
    throw error;
  }
};