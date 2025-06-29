import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StorageEnum } from "@/types/storage";
import { getCookie } from "@/utils/cookies";

const BASE_URL = process.env.NEXT_PUBLIC_URL;
const tagTypes = [
  "State",
  "ProfileServices",
  "ProfileProducts",
  "Tenders",
] as const;

const RTKApi = createApi({
  reducerPath: "api",
  tagTypes: tagTypes,
  endpoints: () => ({}),
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers) => {
      const token = await getCookie(StorageEnum.ACCESS_TOKEN);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      headers.set("Accept", "application/json");
      headers.set("locale", "hy");

      return headers;
    },
  }),
});

export { RTKApi };
