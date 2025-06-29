// Industries
export interface Industry {
  id: number;
  name: string;
}

export interface IndustriesResponse {
  data: Array<Industry>;
}

export type IndustriesRequest = void;

// Measurements
export interface Measurement {
  id: number;
  name: string;
}

export interface MeasurementsResponse {
  data: Array<Measurement>;
}

export type MeasurementsRequest = void;

// Regions
export interface Region {
  id: number;
  name: string;
}

export interface RegionsResponse {
  data: Array<Region>;
}

export type RegionsRequest = void;

// CPV Codes
export interface CPVCode {
  code: string;
  name: string;
  is_final: boolean;
}

export interface CPVCodeTree {
  id: number;
  name: string;
  child_cpv_code: CPVCode;
}

// Re-export for backward compatibility
export type Industries = Industry;
