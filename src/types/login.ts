import { IState } from "./general";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IAuthData {
  access_token: string;
  state: IState;
}
