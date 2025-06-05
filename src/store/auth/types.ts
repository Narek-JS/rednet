/* eslint-disable @typescript-eslint/no-explicit-any */

import { IError } from "@/types/general";

export interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface User {
  is_activated: boolean;
  first_name: string;
  last_name: string;
  email: string;
}

type Profile = any;

interface State {
  user: User;
  profile: null | Profile;
  missing_fields: ["organization_type"];
}

interface Response {
  data: {
    access_token: string;
    state: State;
  };
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
