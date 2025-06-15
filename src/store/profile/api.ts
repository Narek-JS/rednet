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

    profileServices: build.query<
      ProfileServicesResponse,
      ProfileServicesRequest
    >({
      query: ({ profileId, limit }) => {
        const url = ENDPOINTS_ENUM.PROFILE_SERVICES.replace(
          ":profileId",
          String(profileId)
        );

        return {
          url,
          method: "GET",
          params: { ...(limit && { limit }) },
        };
      },
      providesTags: ["ProfileServices"],
    }),

    profileProducts: build.query<
      ProfileProductsResponse,
      ProfileProductsRequest
    >({
      query: ({ profileId, limit }) => {
        const url = ENDPOINTS_ENUM.PROFILE_PRODUCTS.replace(
          ":profileId",
          String(profileId)
        );

        return {
          url,
          method: "GET",
          params: { ...(limit && { limit }) },
        };
      },
      providesTags: ["ProfileProducts"],
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

    deleteProduct: build.mutation<DeleteProductResponse, DeleteProductResponse>(
      {
        query: (productId) => {
          const url = ENDPOINTS_ENUM.UPDATE_PRODUCT.replace(
            ":productId",
            String(productId)
          );
          return { url, method: "DELETE" };
        },
        invalidatesTags: ["ProfileProducts"],
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
      invalidatesTags: ["ProfileServices"],
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
        return { url, method: "PUT", body: rest };
      },
      invalidatesTags: ["ProfileProducts"],
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
  }),
});

export const {
  useGetIndustriesQuery,
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
