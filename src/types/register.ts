import { IState } from "./general";

export interface IRegisterForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface IAuthData {
  access_token: string;
  state: IState;
}

export interface IVerifyForm {
  code: string;
}
