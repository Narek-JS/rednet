import {
  IndustriesResponse,
  IndustriesRequest,
  MeasurementsResponse,
  MeasurementsRequest,
} from "./types";
import { ENDPOINTS_ENUM } from "@/constants";
import { RTKApi } from "../RTKApi";

const extendedApi = RTKApi.injectEndpoints({
  endpoints: (build) => ({
    getIndustries: build.query<IndustriesResponse, IndustriesRequest>({
      query: () => ({
        url: ENDPOINTS_ENUM.INDUSTRIES,
        method: "GET",
      }),
    }),
    getMeasurements: build.query<MeasurementsResponse, MeasurementsRequest>({
      query: () => ({
        url: ENDPOINTS_ENUM.MEASUREMENT_UNITS,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetIndustriesQuery, useGetMeasurementsQuery } = extendedApi;

export default extendedApi;
