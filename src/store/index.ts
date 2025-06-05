import { configureStore } from "@reduxjs/toolkit";
import { RTKApi } from "./RTKApi";
import authReducer from "./auth/slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [RTKApi.reducerPath]: RTKApi.reducer,
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(RTKApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
