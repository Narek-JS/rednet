import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UploadRequest, UploadResponse } from "./types";
// import { StorageEnum } from "@/types/storage";
// import { getCookie } from "@/utils/cookies";

export const uploadApi = createApi({
  reducerPath: "uploadApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    // prepareHeaders: async (headers) => {
    //   const token = await getCookie(StorageEnum.ACCESS_TOKEN);
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }

    //   return headers;
    // },
  }),
  endpoints: (build) => ({
    uploadFile: build.mutation<UploadResponse, UploadRequest>({
      query: (props) => {
        return {
          url: props.url,
          method: "PUT",
          body: props.file,
          headers: {
            "Content-Type": props.file?.type,
          },
        };
      },
    }),
  }),
});

export const { useUploadFileMutation } = uploadApi;
