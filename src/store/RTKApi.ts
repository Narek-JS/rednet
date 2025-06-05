import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StorageEnum } from "@/types/storage";
import { getCookie } from "@/utils/cookies";

const BASE_URL = process.env.NEXT_PUBLIC_URL;

const RTKApi = createApi({
  reducerPath: "api",
  endpoints: () => ({}),
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers) => {
      const token = await getCookie(StorageEnum.ACCESS_TOKEN);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      headers.set("locale", "hy");

      return headers;
    },
  }),
});

export { RTKApi };
