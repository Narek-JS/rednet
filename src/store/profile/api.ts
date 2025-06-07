import { IndustriesRequest, IndustriesResponse } from "./types";
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
  }),
});

export const { useGetIndustriesQuery } = extendedApi;

export default extendedApi;
