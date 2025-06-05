import {
  OrganizationIndividualResponse,
  OrganizationIndividualRequest,
  OrganizationLegalResponse,
  OrganizationLegalRequest,
  RegisterResponse,
  RegisterRequest,
  VerifyResponse,
  VerifyRequest,
} from "./types";
import { ENDPOINTS_ENUM } from "@/constants";
import { RTKApi } from "../RTKApi";

const extendedApi = RTKApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<RegisterResponse, RegisterRequest>({
      query: (props) => ({
        url: ENDPOINTS_ENUM.AUTH_REGISTER,
        method: "POST",
        body: props,
      }),
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
} = extendedApi;

export default extendedApi;
