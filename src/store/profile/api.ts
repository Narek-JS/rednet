import {
  SignProfilePhotoUploadResponse,
  SignProfilePhotoUploadRequest,
  SignCoverPhotoUploadResponse,
  DeleteProfileServiceResponse,
  UpdateProfileServiceResponse,
  CreateProfileServiceResponse,
  CreateProfileProductResponse,
  UpdateProfileProductResponse,
  DeleteProfileServiceRequest,
  SignCoverPhotoUploadRequest,
  UpdateProfileServiceRequest,
  CreateProfileServiceRequest,
  CreateProfileProductRequest,
  UpdateProfileProductRequest,
  SignServicePhotoResponse,
  SignProductPhotoResponse,
  SignServicePhotoRequest,
  ProfileServicesResponse,
  ProfileProductsResponse,
  SignProductPhotoRequest,
  ProfileServicesRequest,
  ProfileProductsRequest,
  DeleteProductResponse,
  UpdateProfileResponse,
  UpdateProfileRequest,
} from "./types";
import { ENDPOINTS_ENUM } from "@/constants";
import { RTKApi } from "../RTKApi";

const extendedApi = RTKApi.injectEndpoints({
  endpoints: (build) => ({
    // Profile information Update.
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

    // Profile Service CRUD.
    profileServices: build.query<
      ProfileServicesResponse,
      ProfileServicesRequest
    >({
      query: ({ profileId, page }) => {
        const url = ENDPOINTS_ENUM.PROFILE_SERVICES.replace(
          ":profileId",
          String(profileId)
        );

        return {
          url,
          method: "GET",
          params: { ...(page !== undefined && { page }) },
        };
      },
      providesTags: ["ProfileServices"],
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
      invalidatesTags: ["ProfileServices"],
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
        return { url, method: "PATCH", body: rest };
      },
      invalidatesTags: ["ProfileServices"],
    }),
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
      invalidatesTags: ["ProfileServices"],
    }),

    // Profile Product CRUD.
    profileProducts: build.query<
      ProfileProductsResponse,
      ProfileProductsRequest
    >({
      query: ({ profileId, page }) => {
        const url = ENDPOINTS_ENUM.PROFILE_PRODUCTS.replace(
          ":profileId",
          String(profileId)
        );

        return {
          url,
          method: "GET",
          params: { ...(page !== undefined && { page }) },
        };
      },
      providesTags: ["ProfileProducts"],
    }),
    createProduct: build.mutation<
      CreateProfileProductResponse,
      CreateProfileProductRequest
    >({
      query: ({ profileId, ...rest }) => {
        const url = ENDPOINTS_ENUM.PROFILE_PRODUCTS.replace(
          ":profileId",
          String(profileId)
        );
        return { url, method: "POST", body: rest };
      },
      invalidatesTags: ["ProfileProducts"],
    }),
    updateProduct: build.mutation<
      UpdateProfileProductResponse,
      UpdateProfileProductRequest
    >({
      query: ({ productId, ...rest }) => {
        const url = ENDPOINTS_ENUM.UPDATE_PRODUCT.replace(
          ":productId",
          String(productId)
        );
        return { url, method: "PATCH", body: rest };
      },
      invalidatesTags: ["ProfileProducts"],
    }),
    deleteProduct: build.mutation<DeleteProductResponse, number>({
      query: (productId) => {
        const url = ENDPOINTS_ENUM.UPDATE_PRODUCT.replace(
          ":productId",
          String(productId)
        );
        return { url, method: "DELETE" };
      },
      invalidatesTags: ["ProfileProducts"],
    }),
    signProductPhotoUpload: build.query<
      SignProductPhotoResponse,
      SignProductPhotoRequest
    >({
      query: (params) => ({
        url: ENDPOINTS_ENUM.PRODUCT_PHOTO,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
  useProfileServicesQuery,
  useProfileProductsQuery,
  useDeleteProductMutation,
  useDeleteServiceMutation,
  useUpdateProfileMutation,
  useUpdateServiceMutation,
  useUpdateProductMutation,
  useCreateServiceMutation,
  useCreateProductMutation,
  useLazySignCoverPhotoUploadQuery,
  useLazySignProfilePhotoUploadQuery,
  useLazySignServicePhotoUploadQuery,
  useLazySignProductPhotoUploadQuery,
} = extendedApi;

export default extendedApi;
