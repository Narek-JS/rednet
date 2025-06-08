import {
  SignProfilePhotoUploadResponse,
  UpdateProfilePhotoNameResponse,
  SignProfilePhotoUploadRequest,
  UpdateProfilePhotoNameRequest,
  UpdateCoverPhotoNameResponse,
  SignCoverPhotoUploadResponse,
  UpdateCoverPhotoNameRequest,
  SignCoverPhotoUploadRequest,
  IndustriesResponse,
  IndustriesRequest,
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
    signCoverPhotoUpload: build.query<
      SignCoverPhotoUploadResponse,
      SignCoverPhotoUploadRequest
    >({
      query: (params) => ({
        url: ENDPOINTS_ENUM.COVER_PHOTO,
        method: "GET",
        params,
      }),
    }),
    updateCoverPhotoName: build.mutation<
      UpdateCoverPhotoNameResponse,
      UpdateCoverPhotoNameRequest
    >({
      query: ({ profileId, coverName }) => {
        const url = ENDPOINTS_ENUM.UPDATE_PROFILE.replace(
          ":profileId",
          String(profileId)
        );

        return {
          url,
          method: "PATCH",
          body: { cover_photo_name: coverName },
        };
      },
    }),
    signProfilePhotoUpload: build.query<
      SignProfilePhotoUploadResponse,
      SignProfilePhotoUploadRequest
    >({
      query: (params) => ({
        url: ENDPOINTS_ENUM.PROFILE_PHOTO,
        method: "GET",
        params,
      }),
    }),
    updateProfilePhotoName: build.mutation<
      UpdateProfilePhotoNameResponse,
      UpdateProfilePhotoNameRequest
    >({
      query: ({ profileId, imageName }) => {
        const url = ENDPOINTS_ENUM.UPDATE_PROFILE.replace(
          ":profileId",
          String(profileId)
        );
        return {
          url,
          method: "PATCH",
          body: { profile_photo_name: imageName },
        };
      },
    }),
  }),
});

export const {
  useGetIndustriesQuery,
  useLazySignCoverPhotoUploadQuery,
  useUpdateCoverPhotoNameMutation,
  useLazySignProfilePhotoUploadQuery,
  useUpdateProfilePhotoNameMutation,
} = extendedApi;

export default extendedApi;
