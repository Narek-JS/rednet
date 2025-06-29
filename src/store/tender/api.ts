import {
  SignTenderLotUploadResponse,
  SignTenderLotUploadRequest,
  CreateTenderLotResponse,
  CreateTenderLotRequest,
  ProfileTendersResponse,
  ProfileTendersRequest,
  PublishTenderResponse,
  GetTenderLotsResponse,
  GetTenderLotsRequest,
  PublishTenderRequest,
  CreateTenderResponse,
  CreateTenderRequest,
} from "./types";
import { ENDPOINTS_ENUM } from "@/constants";
import { Response } from "@/types/general";
import { RTKApi } from "../RTKApi";

const extendedApi = RTKApi.injectEndpoints({
  endpoints: (build) => ({
    profileTenders: build.query<ProfileTendersResponse, ProfileTendersRequest>({
      query: ({ profileId }) => ({
        url: ENDPOINTS_ENUM.PROFILE_TENDERS.replace(
          ":profileId",
          String(profileId)
        ),
        method: "GET",
      }),
      providesTags: ["Tenders"],
      async onQueryStarted({ profileId }, { dispatch, queryFulfilled }) {
        try {
          const { data: tendersResponse } = await queryFulfilled;
          const tenders = tendersResponse.data;

          // For each tender, load its lots and update cached data
          for (const tender of tenders) {
            const lotsResult = await dispatch(
              extendedApi.endpoints.getTenderLots.initiate({
                tenderId: tender.id,
              })
            );

            // Update cached tender lots inside profileTenders cache
            dispatch(
              extendedApi.util.updateQueryData(
                "profileTenders",
                { profileId },
                (draft) => {
                  const tenderToUpdate = draft.data.find(
                    (t) => t.id === tender.id
                  );
                  if (tenderToUpdate) {
                    tenderToUpdate.lots = lotsResult.data?.data || [];
                  }
                }
              )
            );
          }
        } catch (err) {
          console.error("Error fetching lots for tenders:", err);
        }
      },
    }),

    createTender: build.mutation<
      Response<CreateTenderResponse>,
      CreateTenderRequest
    >({
      query: ({ profileId, ...rest }) => {
        const url = ENDPOINTS_ENUM.CREATE_TENDER.replace(
          ":profileId",
          String(profileId)
        );
        return { url, method: "POST", body: rest };
      },
    }),

    signTenderLotUpload: build.query<
      SignTenderLotUploadResponse,
      SignTenderLotUploadRequest
    >({
      query: (params) => ({
        url: ENDPOINTS_ENUM.TENDER_LOT_PHOTO,
        method: "GET",
        params,
      }),
    }),

    createTenderLot: build.mutation<
      Response<CreateTenderLotResponse>,
      CreateTenderLotRequest
    >({
      query: ({ tenderId, ...rest }) => {
        const url = ENDPOINTS_ENUM.CREATE_TENDER_LOT.replace(
          ":tenderId",
          String(tenderId)
        );
        return { url, method: "POST", body: rest };
      },
    }),

    getTenderLots: build.query<
      Response<Array<GetTenderLotsResponse>>,
      GetTenderLotsRequest
    >({
      query: ({ tenderId }) => ({
        url: ENDPOINTS_ENUM.TENDER_LOTS_BY_TENDER_ID.replace(
          ":tenderId",
          String(tenderId)
        ),
        method: "GET",
      }),
    }),

    publishTender: build.mutation<
      Response<PublishTenderResponse>,
      PublishTenderRequest
    >({
      query: ({ tenderId }) => {
        const url = ENDPOINTS_ENUM.PUBLISH_TENDER.replace(
          ":tenderId",
          String(tenderId)
        );
        return { url, method: "POST" };
      },
    }),
  }),
});

export const {
  useGetTenderLotsQuery,
  useProfileTendersQuery,
  useCreateTenderMutation,
  usePublishTenderMutation,
  useCreateTenderLotMutation,
  useLazySignTenderLotUploadQuery,
} = extendedApi;

export default extendedApi;
