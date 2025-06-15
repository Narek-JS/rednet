import { MissingFieldsEnum } from "@/types/missingFields";
import { IError } from "@/types/general";

// General Usefull types for Auth flow.
interface User {
  is_activated: boolean;
  first_name: string;
  last_name: string;
  email: string;
}

interface Profile {
  id: number;
  brand_name: string;
  slug: string;
  profile_photo_url: string;
  cover_photo_url: string;
}

interface Response {
  data: {
    access_token: string;
    state: State;
  };
}

interface Organization {
  head_full_name?: string | undefined;
  address?: string | undefined;
  type?: string | undefined;
  name?: string | undefined;
  tin?: string | undefined;
}

// This State type usefull from components too.
export interface State {
  user: User;
  profile: null | Profile;
  missing_fields: Array<MissingFieldsEnum>;
}

// Get State info req-res
export interface StateResponse {
  data: State;
}
export type StateRequest = void;

// Post Login req-res
export interface LoginRequest {
  email: string;
  password: string;
}
export type LoginResponse = Response | IError;

// Post Register req-res
export interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
export type RegisterResponse = Response | IError;

// Post Verify req-res
export interface VerifyRequest {
  code: string;
}
export type VerifyResponse = Response | IError;

export interface ActivationResendResponse {
  activation_code_resent: boolean;
}
export type ActivationResendRequest = void;

// Post Individual Organization type req-res
export interface OrganizationIndividualResponse {
  data: {
    organization_chosen: boolean;
  };
}
export type OrganizationIndividualRequest = void;

// Post Legal Organization type req-res
export interface OrganizationLegalResponse {
  data: {
    organization_chosen: boolean;
  };
}
export type OrganizationLegalRequest = Organization;

// Post Reset Password req-res.
export interface ResetPasswordResponse {
  data: {
    code_sent: boolean;
  };
}
export interface ResetPasswordRequest {
  email: string;
}

// Post Reset Password Check req-res.
export interface ResetPasswordCheckResponse {
  data: {
    is_valid: boolean;
  };
}
export interface ResetPasswordCheckRequest {
  code: string;
  email: string;
}

// Post Set new password req-res.
export interface SetNewPasswordRequest {
  email: string;
  code: string;
  password: string;
  password_confirmation: string;
}
export type SetNewPasswordResponse = Response;
