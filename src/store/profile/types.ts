/* eslint-disable @typescript-eslint/no-empty-object-type */
interface Industries {
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

export interface UpdateCoverPhotoNameResponse {}
export interface UpdateCoverPhotoNameRequest {
  profileId: number;
  coverName: string;
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

export interface UpdateProfilePhotoNameResponse {}
export interface UpdateProfilePhotoNameRequest {
  profileId: number;
  imageName: string;
}

export interface UpdateProfileResponse {}
export interface UpdateProfileRequest
  extends Partial<Omit<Profile, "industries">> {
  industries?: Array<number>;
  profileId: number;
}
