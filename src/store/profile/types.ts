/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface Industries {
  id: number;
  name: string;
}

export interface IndustriesResponse {
  data: Array<Industries>;
}
export type IndustriesRequest = void;

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
  industries: Array<Industries>;
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

export interface SignCoverPhotoUploadResponse {
  data: {
    file_name: string;
    upload_url: string;
    retrieve_url: string;
    expires_at: string;
  };
}

export interface SignCoverPhotoUploadRequest {
  file_name?: string;
}

export interface SignProfilePhotoUploadResponse {
  data: {
    file_name: string;
    upload_url: string;
    retrieve_url: string;
    expires_at: string;
  };
}
export interface SignProfilePhotoUploadRequest {
  file_name?: string;
}

export interface UpdateProfileResponse {}
export interface UpdateProfileRequest
  extends Partial<Omit<Profile, "industries">> {
  cover_photo_name?: string;
  profile_photo_name?: string;
  industries?: Array<number>;
  profileId: number;
}

export interface ProfileServicesResponse {
  data: Array<ProfileService>;
}
export interface ProfileServicesRequest {
  profileId: number;
  limit?: number;
}

export interface ProfileProductsResponse {
  data: Array<ProfileProduct>;
}
export interface ProfileProductsRequest {
  profileId: number;
  limit?: number;
}

export interface DeleteProfileServiceResponse {}
export type DeleteProfileServiceRequest = number;

export interface DeleteProductResponse {}
export type DeleteProductRequest = number;

export interface SignServicePhotoResponse {
  data: {
    file_name: string;
    upload_url: string;
    retrieve_url: string;
    expires_at: string;
  };
}
export interface SignServicePhotoRequest {
  file_name?: string;
}

export interface SignProductPhotoResponse {
  data: {
    file_name: string;
    upload_url: string;
    retrieve_url: string;
    expires_at: string;
  };
}
export interface SignProductPhotoRequest {
  file_name?: string;
}

export interface UpdateProfileServiceResponse {}
export interface UpdateProfileServiceRequest {
  serviceId: number;
  name: string;
  description: string;
  photo_name: string;
}

export interface UpdateProfileProductResponse {}
export interface UpdateProfileProductRequest {
  productId: number;
  name: string;
  description: string;
  photo_name: string;
}

export interface CreateProfileServiceResponse {}
export interface CreateProfileServiceRequest {
  profileId: number;
  name: string;
  description: string;
  photo_name: string;
}

export interface CreateProfileProductResponse {}
export interface CreateProfileProductRequest {
  profileId: number;
  name: string;
  description: string;
  photo_name: string;
}
