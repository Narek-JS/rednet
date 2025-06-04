import { removeClientCookie, getClientCookie, setClientCookie } from "./client";
import { removeServerCookie, getServerCookie, setServerCookie } from "./server";

export const getCookie = async (key: string) => {
  if (typeof window === "undefined") {
    return await getServerCookie(key);
  }

  return new Promise((resolve) => {
    resolve(getClientCookie(key));
  });
};

export const setCookie = async (key: string, value: string) => {
  if (typeof window === "undefined") {
    await setServerCookie(key, value);
  } else {
    setClientCookie(key, value);
  }
};

export const removeCookie = async (key: string) => {
  if (typeof window === "undefined") {
    await removeServerCookie(key);
  } else {
    removeClientCookie(key);
  }
};
