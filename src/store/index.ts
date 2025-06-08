import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { uploadApi } from "./uploader/api";
import { RTKApi } from "./RTKApi";
import modalReducer from "./modal/slice";
import authReducer from "./auth/slice";

const rootReducer = combineReducers({
  [RTKApi.reducerPath]: RTKApi.reducer,
  [uploadApi.reducerPath]: uploadApi.reducer,
  auth: authReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(RTKApi.middleware, uploadApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
