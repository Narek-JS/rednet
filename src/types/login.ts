/* eslint-disable @typescript-eslint/no-explicit-any */

import { MissingFieldsEnum } from "./missingFields";

interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_activated: boolean;
}

interface IProfile {
  id: number;
  brand_name: string;
  slug: any;
  profile_photo_url: any;
  cover_photo_url: any;
}

export interface IState {
  user: IUser | null;
  profile: IProfile | null;
  missing_fields: Array<MissingFieldsEnum>;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IAuthData {
  access_token: string;
  state: IState;
}
