import {
  SignProfilePhotoUploadResponse,
  UpdateProfilePhotoNameResponse,
  SignProfilePhotoUploadRequest,
  UpdateProfilePhotoNameRequest,
  UpdateCoverPhotoNameResponse,
  SignCoverPhotoUploadResponse,
  DeleteProfileServiceResponse,
  DeleteProfileServiceRequest,
  UpdateCoverPhotoNameRequest,
  SignCoverPhotoUploadRequest,
  ProfileServicesResponse,
  ProfileServicesRequest,
  UpdateProfileResponse,
  UpdateProfileRequest,
  IndustriesResponse,
  IndustriesRequest,
  DeleteProductResponse,
  SignServicePhotoResponse,
  SignServicePhotoRequest,
  UpdateProfileServiceResponse,
  UpdateProfileServiceRequest,
  CreateProfileServiceResponse,
  CreateProfileServiceRequest,
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
    updateProfile: build.mutation<UpdateProfileResponse, UpdateProfileRequest>({
      query: ({ profileId, ...dto }) => {
        const url = ENDPOINTS_ENUM.UPDATE_PROFILE.replace(
          ":profileId",
          String(profileId)
        );
        return {
          url,
          method: "PATCH",
          body: dto,
        };
      },
    }),
    profileServices: build.query<
      ProfileServicesResponse,
      ProfileServicesRequest
    >({
      query: ({ profileId }) => {
        const url = ENDPOINTS_ENUM.PROFILE_SERVICES.replace(
          ":profileId",
          String(profileId)
        );

        return {
          url,
          method: "GET",
        };
      },
    }),
    deleteService: build.mutation<
      DeleteProfileServiceResponse,
      DeleteProfileServiceRequest
    >({
      query: (id) => {
        const url = ENDPOINTS_ENUM.UPDATE_SERVICE.replace(
          ":serviceId",
          String(id)
        );
        return { url, method: "DELETE" };
      },
    }),
    deleteProduct: build.mutation<DeleteProductResponse, DeleteProductResponse>(
      {
        query: (productId) => {
          const url = ENDPOINTS_ENUM.UPDATE_PRODUCT.replace(
            ":productId",
            String(productId)
          );
          return { url, method: "DELETE" };
        },
      }
    ),

    signServicePhotoUpload: build.query<
      SignServicePhotoResponse,
      SignServicePhotoRequest
    >({
      query: (params) => ({
        url: ENDPOINTS_ENUM.SERVICE_PHOTO,
        method: "GET",
        params,
      }),
    }),

    updateService: build.mutation<
      UpdateProfileServiceResponse,
      UpdateProfileServiceRequest
    >({
      query: ({ serviceId, ...rest }) => {
        const url = ENDPOINTS_ENUM.UPDATE_SERVICE.replace(
          ":serviceId",
          String(serviceId)
        );
        return { url, method: "PUT", body: rest };
      },
    }),

    createService: build.mutation<
      CreateProfileServiceResponse,
      CreateProfileServiceRequest
    >({
      query: ({ profileId, ...rest }) => {
        const url = ENDPOINTS_ENUM.PROFILE_SERVICES.replace(
          ":profileId",
          String(profileId)
        );
        return { url, method: "POST", body: rest };
      },
    }),
  }),
});

export const {
  useGetIndustriesQuery,
  useProfileServicesQuery,
  useDeleteProductMutation,
  useDeleteServiceMutation,
  useUpdateProfileMutation,
  useUpdateServiceMutation,
  useCreateServiceMutation,
  useUpdateCoverPhotoNameMutation,
  useLazySignCoverPhotoUploadQuery,
  useUpdateProfilePhotoNameMutation,
  useLazySignProfilePhotoUploadQuery,
  useLazySignServicePhotoUploadQuery,
} = extendedApi;

export default extendedApi;
