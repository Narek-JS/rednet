import { MissingFields } from "@/types/missingFields";
import { IError, ApiResponse } from "@/types/general";

// User interface
export interface User {
  is_activated: boolean;
  first_name: string;
  last_name: string;
  email: string;
}

// Profile interface
export interface Profile {
  id: number;
  brand_name: string;
  slug: string;
  profile_photo_url: string;
  cover_photo_url: string;
}

// Organization interface
export interface Organization {
  head_full_name?: string;
  address?: string;
  type?: string;
  name?: string;
  tin?: string;
}

// Auth state interface
export interface AuthState {
  user: User;
  profile: Profile | null;
  missing_fields: MissingFields;
}

// Auth response wrapper
export interface AuthResponse {
  data: {
    access_token: string;
    state: AuthState;
  };
}

// State API types
export type StateResponse = ApiResponse<AuthState>;
export type StateRequest = void;

// Login API types
export interface LoginRequest {
  email: string;
  password: string;
}
export type LoginResponse = AuthResponse | IError;

// Register API types
export interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
export type RegisterResponse = AuthResponse | IError;

// Verify API types
export interface VerifyRequest {
  code: string;
}
export type VerifyResponse = AuthResponse | IError;

// Activation resend API types
export interface ActivationResendResponse {
  activation_code_resent: boolean;
}
export type ActivationResendRequest = void;

// Organization type selection API types
export type OrganizationIndividualResponse = ApiResponse<{
  organization_chosen: boolean;
}>;
export type OrganizationIndividualRequest = void;

export type OrganizationLegalResponse = ApiResponse<{
  organization_chosen: boolean;
}>;
export type OrganizationLegalRequest = Organization;

// Password reset API types
export type ResetPasswordResponse = ApiResponse<{ code_sent: boolean }>;
export interface ResetPasswordRequest {
  email: string;
}

export type ResetPasswordCheckResponse = ApiResponse<{ is_valid: boolean }>;
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
export type SetNewPasswordResponse = AuthResponse;

// Re-export for backward compatibility
export type State = AuthState;
