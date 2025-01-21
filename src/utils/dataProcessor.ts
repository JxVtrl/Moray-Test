import { GeoJsonResponse, PopulationResponse, MergedGeoJsonResponse, MergedFeatureProperties, MergedFeature } from '../interfaces/GeojsonPopulation';
import { Feature as GeoJSONFeature, Geometry, GeoJsonProperties } from 'geojson';

export const mergeGeoJsonWithPopulation = (
  geoJson: GeoJsonResponse,
  populationData: PopulationResponse
): MergedGeoJsonResponse => {
  if (!geoJson || !geoJson.features || !Array.isArray(populationData)) {
    throw new Error('Dados inválidos para mesclar.');
  }

  // Criando um mapa de população para acesso rápido
  const populationMap = populationData.reduce<Record<number, PopulationResponse>>((acc, item) => {
    if (!acc[item.id_geometria]) {
      acc[item.id_geometria] = [];
    }
    acc[item.id_geometria].push(item);
    return acc;
  }, {});

  // Iterando sobre as features e adicionando a população correspondente
  const mergedGeoJson: MergedGeoJsonResponse = {
    ...geoJson,
    features: geoJson.features.map((feature: GeoJSONFeature<Geometry, GeoJsonProperties>) => {
      const mergedProperties: MergedFeatureProperties = {
        id: feature.properties?.id ?? 0,
        name: feature.properties?.name ?? '',
        setor: feature.properties?.setor ?? '',
        zona: feature.properties?.zona ?? '',
        populacao: populationMap[feature.properties?.id ?? 0] || [],
      };
      return {
        ...feature,
        properties: mergedProperties,
      } as MergedFeature;
    }),
  };

  return mergedGeoJson;
};