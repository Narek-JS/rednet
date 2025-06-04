import { StorageEnum } from "@/types/storage";
import { getCookie } from "../cookies";

const baseUrl = process.env.NEXT_PUBLIC_URL;

export interface IError {
  message: string;
  errors: Record<string, string[]>;
}

export interface ISuccessResponse<D> {
  status: "SUCCESS";
  result: D;
  error: null;
}

export interface IErrorResponse {
  status: "ERROR";
  result: null;
  error: IError;
}

export type ResponseDataType<D> = ISuccessResponse<D> | IErrorResponse;

type RequestType = <D>(
  url: string,
  opt?: RequestInit
) => Promise<ResponseDataType<D>>;

const instance =
  <D>(method: "get" | "post" | "patch" | "put" | "delete") =>
  async (url: string, opt: RequestInit = {}): Promise<ResponseDataType<D>> => {
    const accessToken = (await getAccessToken()) ?? null;

    try {
      const headers = new Headers();

      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      headers.set("Authorization", `Bearer ${accessToken}`);

      const res = await fetch(`${baseUrl}${url}`, { ...opt, method, headers });
      const json = (await res.json()) as { data: D } | IError;

      if ("errors" in json) {
        return { result: null, status: "ERROR", error: json };
      }

      return { result: json.data as D, status: "SUCCESS", error: null };
    } catch (e: unknown) {
      return { result: null, status: "ERROR", error: e as IError };
    }
  };

const api: Record<"get" | "post" | "patch" | "put" | "delete", RequestType> = {
  get: instance("get"),
  post: instance("post"),
  patch: instance("patch"),
  put: instance("put"),
  delete: instance("delete"),
};

const getAccessToken = async () => {
  const cookieName = StorageEnum.ACCESS_TOKEN;
  return getCookie(cookieName);
};

export { api };
