import {
  OrganizationIndividualResponse,
  OrganizationIndividualRequest,
  OrganizationLegalResponse,
  OrganizationLegalRequest,
  RegisterResponse,
  RegisterRequest,
  VerifyResponse,
  VerifyRequest,
  LoginResponse,
  LoginRequest,
  State,
} from "./types";
import { setAcessToken, setState } from "./slice";
import { StorageEnum } from "@/types/storage";
import { ENDPOINTS_ENUM } from "@/constants";
import { setCookie } from "@/utils/cookies";
import { RTKApi } from "../RTKApi";

const extendedApi = RTKApi.injectEndpoints({
  endpoints: (build) => ({
    getState: build.query<State, void>({
      query: () => ({
        url: ENDPOINTS_ENUM.STATE,
        method: "GET",
      }),
      providesTags: ["State"],
      async onQueryStarted(_queryArgument, mutationLifeCycleApi) {
        const response = await mutationLifeCycleApi.queryFulfilled;
        mutationLifeCycleApi.dispatch(setState(response.data));
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
      async onQueryStarted(queryArgument, mutationLifeCycleApi) {
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
    }),

    organizationIndividual: build.mutation<
      OrganizationIndividualResponse,
      OrganizationIndividualRequest
    >({
      query: () => ({
        url: ENDPOINTS_ENUM.ORGANIZATION_INDIVIDUAL,
        method: "POST",
      }),
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
    }),
  }),
});

export const {
  useOrganizationIndividualMutation,
  useOrganizationLegalMutation,
  useRegisterMutation,
  useVerifyMutation,
  useLoginMutation,
} = extendedApi;

export default extendedApi;
