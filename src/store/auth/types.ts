/* eslint-disable @typescript-eslint/no-explicit-any */

import { IError } from "@/types/general";
import { MissingFieldsEnum } from "@/types/missingFields";

interface User {
  is_activated: boolean;
  first_name: string;
  last_name: string;
  email: string;
}

interface Profile {
  id: number;
  brand_name: string;
  slug: any;
  profile_photo_url: any;
  cover_photo_url: any;
}

export interface State {
  user: User;
  profile: null | Profile;
  missing_fields: Array<MissingFieldsEnum>;
}

interface Response {
  data: {
    access_token: string;
    state: State;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}
export type LoginResponse = Response | IError;

export interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface VerifyRequest {
  code: string;
}

export type VerifyResponse = any | IError;

export type RegisterResponse = Response | IError;

export interface OrganizationIndividualResponse {
  data: {
    organization_chosen: boolean;
  };
}

export type OrganizationIndividualRequest = void;

interface Organization {
  head_full_name?: string | undefined;
  address?: string | undefined;
  type?: string | undefined;
  name?: string | undefined;
  tin?: string | undefined;
}

export interface OrganizationLegalResponse {
  data: Organization & {
    id: number;
  };
}
export type OrganizationLegalRequest = Organization;

export interface ResetPasswordResponse {
  data: {
    code_sent: boolean;
  };
}
export interface ResetPasswordRequest {
  email: string;
}

export interface ResetPasswordCheckResponse {
  data: {
    is_valid: boolean;
  };
}
export interface ResetPasswordCheckRequest {
  code: string;
  email: string;
}

export interface SetNewPasswordRequest {
  email: string;
  code: string;
  password: string;
  password_confirmation: string;
}

export type SetNewPasswordResponse = Response;
