/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Paginated } from "@/types/pageinatedResponse";
import {
  UploadSignResponse,
  UploadSignRequest,
  ApiResponse,
  PaginationRequest,
} from "@/types/general";
import { Industry } from "../lookup/types";

export interface Profile {
  id: number;
  brand_name: string;
  slug: string | null;
  profile_photo_url: string | null;
  cover_photo_url: string | null;
  region: string | null;
  headline: string | null;
  description: string | null;
  phone_number: string | null;
  public_email: string | null;
  website_url: string | null;
  industries: Array<Industry>;
}

export interface ProfileService {
  id: string;
  photo_url: string;
  name: string;
  description: string;
}

export interface ProfileProduct {
  id: string;
  photo_url: string;
  name: string;
  description: string;
}
export interface ProfileTender {}

// Profile information Update.
export type SignCoverPhotoUploadResponse = UploadSignResponse;
export type SignCoverPhotoUploadRequest = UploadSignRequest;

export type SignProfilePhotoUploadResponse = UploadSignResponse;
export type SignProfilePhotoUploadRequest = UploadSignRequest;

export type UpdateProfileResponse = ApiResponse<void>;
export interface UpdateProfileRequest
  extends Partial<Omit<Profile, "industries">> {
  cover_photo_name?: string;
  profile_photo_name?: string;
  industries?: Array<number>;
  profileId: number;
}

// Profile Service CRUD.
export type ProfileServicesResponse = Paginated<Array<ProfileService>>;
export interface ProfileServicesRequest extends PaginationRequest {
  profileId: number;
}

export type CreateProfileServiceResponse = ApiResponse<void>;
export interface CreateProfileServiceRequest {
  profileId: number;
  name: string;
  description: string;
  photo_name: string;
}

export type UpdateProfileServiceResponse = ApiResponse<void>;
export interface UpdateProfileServiceRequest {
  serviceId: number;
  name?: string;
  description?: string;
  photo_name?: string;
}

export type SignServicePhotoResponse = UploadSignResponse;
export type SignServicePhotoRequest = UploadSignRequest;

export type DeleteProfileServiceResponse = ApiResponse<void>;
export type DeleteProfileServiceRequest = number;

// Profile Product CRUD.
export type ProfileProductsResponse = Paginated<Array<ProfileProduct>>;
export interface ProfileProductsRequest extends PaginationRequest {
  profileId: number;
}

export type CreateProfileProductResponse = ApiResponse<void>;
export interface CreateProfileProductRequest {
  profileId: number;
  name: string;
  description: string;
  photo_name: string;
}

export type UpdateProfileProductResponse = ApiResponse<void>;
export interface UpdateProfileProductRequest {
  productId: number;
  name?: string;
  description?: string;
  photo_name?: string;
}

export type DeleteProductResponse = ApiResponse<void>;
export type DeleteProductRequest = number;

export type SignProductPhotoResponse = UploadSignResponse;
export type SignProductPhotoRequest = UploadSignRequest;
