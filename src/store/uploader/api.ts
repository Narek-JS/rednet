import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UploadRequest, UploadResponse } from "./types";

export const uploadApi = createApi({
  reducerPath: "uploadApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (build) => ({
    uploadFile: build.mutation<UploadResponse, UploadRequest>({
      query: (props) => ({
        url: props.url,
        method: "PUT",
        body: props.file,
        headers: {
          "Content-Type": props.file?.type,
        },
      }),
    }),
  }),
});

export const { useUploadFileMutation } = uploadApi;
