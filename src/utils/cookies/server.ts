export const getServerCookie = async (key: string) => {
  const { cookies } = await import("next/headers");

  return (await cookies()).get(key)?.value;
};

export const setServerCookie = async (key: string, value: string) => {
  const { cookies } = await import("next/headers");

  (await cookies()).set(key, value);
};

export const removeServerCookie = async (key: string) => {
  const { cookies } = await import("next/headers");

  (await cookies()).delete(key);
};
