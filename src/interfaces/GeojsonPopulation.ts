import { FeatureCollection, Geometry, Feature as GeoJSONFeature } from 'geojson';

export interface Bbox {
  minLng: number;
  minLat: number;
  maxLng: number;
  maxLat: number;
}

export interface FeatureProperties {
  id: number;
  name: string;
  setor: string;
  zona: string;
}

export type Feature = GeoJSONFeature<Geometry> & {
  properties: FeatureProperties;
  bbox?: [number, number, number, number];
};

export type GeoJsonResponse = FeatureCollection<Geometry> & {
  name: string;
  crs: {
    type: string;
    properties: {
      name: string;
    };
  };
};

export interface PopulationData {
  id_geometria: number;
  ano: string;
  populacao: number;
}

export type PopulationResponse = PopulationData[];

export type MergedFeatureProperties = FeatureProperties & {
  populacao: PopulationData[];
};

export type MergedFeature = GeoJSONFeature<Geometry> & {
  properties: MergedFeatureProperties;
  bbox?: [number, number, number, number];
};

export type MergedGeoJsonResponse = FeatureCollection<Geometry> & {
  features: MergedFeature[];
  name: string;
  crs: {
    type: string;
    properties: {
      name: string;
    };
  };
};
