import { getCookie, deleteCookie, setCookie } from "cookies-next";

export const getClientCookie = (key: string): string | undefined => {
  return getCookie(key)?.toString();
};

export const setClientCookie = (key: string, value: string): void => {
  setCookie(key, value, { sameSite: "strict" });
};

export const removeClientCookie = (key: string): void => {
  deleteCookie(key);
};
