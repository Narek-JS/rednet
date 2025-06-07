interface Industries {
  id: number;
  name: string;
}

export interface IndustriesResponse {
  data: Array<Industries>;
}
export type IndustriesRequest = void;
