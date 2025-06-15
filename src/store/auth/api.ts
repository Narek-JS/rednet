/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  OrganizationIndividualResponse,
  OrganizationIndividualRequest,
  ResetPasswordCheckResponse,
  ResetPasswordCheckRequest,
  OrganizationLegalResponse,
  OrganizationLegalRequest,
  ActivationResendResponse,
  ActivationResendRequest,
  SetNewPasswordResponse,
  SetNewPasswordRequest,
  ResetPasswordResponse,
  ResetPasswordRequest,
  RegisterResponse,
  RegisterRequest,
  VerifyResponse,
  VerifyRequest,
  LoginResponse,
  StateResponse,
  StateRequest,
  LoginRequest,
} from "./types";
import { setAcessToken, setState } from "./slice";
import { StorageEnum } from "@/types/storage";
import { ENDPOINTS_ENUM } from "@/constants";
import { setCookie } from "@/utils/cookies";
import { RTKApi } from "../RTKApi";

const extendedApi = RTKApi.injectEndpoints({
  endpoints: (build) => ({
    getState: build.query<StateResponse, StateRequest>({
      query: () => ({
        url: ENDPOINTS_ENUM.STATE,
        method: "GET",
      }),
      providesTags: ["State"],
      async onQueryStarted(_queryArgument, mutationLifeCycleApi) {
        const response = await mutationLifeCycleApi.queryFulfilled;
        mutationLifeCycleApi.dispatch(setState(response.data.data));
      },
    }),

    login: build.mutation<LoginResponse, LoginRequest>({
      query: (props) => ({
        url: ENDPOINTS_ENUM.AUTH_LOGIN,
        method: "POST",
        body: props,
      }),
      async onQueryStarted(_queryArgument, mutationLifeCycleApi) {
        const response = await mutationLifeCycleApi.queryFulfilled;
        if ("data" in response.data) {
          const token = response.data.data.access_token;
          await setCookie(StorageEnum.ACCESS_TOKEN, token);

          mutationLifeCycleApi.dispatch(setAcessToken({ token }));
          mutationLifeCycleApi.dispatch(setState(response.data.data.state));
        }
      },
    }),

    register: build.mutation<RegisterResponse, RegisterRequest>({
      query: (props) => ({
        url: ENDPOINTS_ENUM.AUTH_REGISTER,
        method: "POST",
        body: props,
      }),
      async onQueryStarted(_queryArgument, mutationLifeCycleApi) {
        const response = await mutationLifeCycleApi.queryFulfilled;

        if ("data" in response.data) {
          const token = response.data.data.access_token;
          await setCookie(StorageEnum.ACCESS_TOKEN, token);

          mutationLifeCycleApi.dispatch(setAcessToken({ token }));
          mutationLifeCycleApi.dispatch(setState(response.data.data.state));
        }
      },
    }),

    verify: build.mutation<VerifyResponse, VerifyRequest>({
      query: (props) => ({
        url: ENDPOINTS_ENUM.AUTH_VERIFY,
        method: "POST",
        body: props,
      }),
      async onQueryStarted(_queryArgument, mutationLifeCycleApi) {
        const response = await mutationLifeCycleApi.queryFulfilled;
        if ("data" in response.data) {
          const token = response.data.data.access_token;
          await setCookie(StorageEnum.ACCESS_TOKEN, token);

          mutationLifeCycleApi.dispatch(setAcessToken({ token }));
          mutationLifeCycleApi.dispatch(setState(response.data.data.state));
        }
      },
    }),

    activationResend: build.mutation<
      ActivationResendResponse,
      ActivationResendRequest
    >({
      query: () => ({
        url: ENDPOINTS_ENUM.AUTH_ACTIVATION_RESEND,
        method: "POST",
      }),
    }),

    organizationIndividual: build.mutation<
      OrganizationIndividualResponse,
      OrganizationIndividualRequest
    >({
      query: () => ({
        url: ENDPOINTS_ENUM.ORGANIZATION_INDIVIDUAL,
        method: "POST",
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(
          (RTKApi.endpoints as any)?.getState.initiate(undefined, {
            subscribe: false,
            forceRefetch: true,
          })
        );
      },
    }),

    organizationLegal: build.mutation<
      OrganizationLegalResponse,
      OrganizationLegalRequest
    >({
      query: (props) => ({
        url: ENDPOINTS_ENUM.ORGANIZATION_LEGAL,
        method: "POST",
        body: props,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(
          (RTKApi.endpoints as any)?.getState.initiate(undefined, {
            subscribe: false,
            forceRefetch: true,
          })
        );
      },
    }),

    resetPassword: build.mutation<ResetPasswordResponse, ResetPasswordRequest>({
      query: (props) => ({
        url: ENDPOINTS_ENUM.AUTH_SEND_RESET,
        method: "POST",
        body: props,
      }),
    }),

    resetPasswordCheck: build.mutation<
      ResetPasswordCheckResponse,
      ResetPasswordCheckRequest
    >({
      query: (props) => ({
        url: ENDPOINTS_ENUM.AUTH_CHECK_RESET,
        method: "POST",
        body: props,
      }),
    }),

    setNewPassword: build.mutation<
      SetNewPasswordResponse,
      SetNewPasswordRequest
    >({
      query: (props) => ({
        url: ENDPOINTS_ENUM.AUTH_SET_NEW_PASSWORD,
        method: "POST",
        body: props,
      }),
      async onQueryStarted(_queryArgument, mutationLifeCycleApi) {
        const response = await mutationLifeCycleApi.queryFulfilled;
        if ("data" in response.data) {
          const token = response.data.data.access_token;
          await setCookie(StorageEnum.ACCESS_TOKEN, token);

          mutationLifeCycleApi.dispatch(setAcessToken({ token }));
          mutationLifeCycleApi.dispatch(setState(response.data.data.state));
        }
      },
    }),
  }),
});

export const {
  useOrganizationIndividualMutation,
  useResetPasswordCheckMutation,
  useOrganizationLegalMutation,
  useActivationResendMutation,
  useSetNewPasswordMutation,
  useResetPasswordMutation,
  useRegisterMutation,
  useVerifyMutation,
  useLoginMutation,
  useGetStateQuery,
} = extendedApi;

export default extendedApi;
