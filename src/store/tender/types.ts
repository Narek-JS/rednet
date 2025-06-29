/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Paginated } from "@/types/pageinatedResponse";
import {
  UploadSignResponse,
  UploadSignRequest,
  ApiResponse,
} from "@/types/general";
import { TENDER_STATUSES } from "@/constants/tenders";
import { Measurement, CPVCodeTree } from "../lookup/types";
import { Profile } from "../profile/types";

export type TenderStatus =
  (typeof TENDER_STATUSES)[keyof typeof TENDER_STATUSES];

export interface TenderLot {
  id: number;
  name: string;
  description: string;
  quantity: string;
  cpv_code: string;
  starting_price: string;
  supply_days_count: string;
  status: string;
  file_names: string[];
  measurement_unit: Measurement;
}

export interface Tender {
  id: number;
  type: string;
  name: string;
  region: string;
  finishes_at: string;
  status: TenderStatus;
  lots: Array<TenderLot>;
}

export type ProfileTendersResponse = Paginated<Array<Tender>>;
export interface ProfileTendersRequest {
  profileId: number;
}

export interface TenderByIdLot extends TenderLot {
  status: string;
  category_tree: CPVCodeTree;
}
export interface TenderByIdResponse extends Omit<Tender, "lots"> {
  lots: Array<TenderByIdLot>;
  profile: Profile;
}

export interface CreateTenderResponse {
  id: number;
  status: TenderStatus;
}
export interface CreateTenderRequest {
  name: string;
  type: string;
  region: string;
  finishes_at: string;
  profileId: number;
}

export type SignCoverPhotoUploadResponse = UploadSignResponse;
export type SignCoverPhotoUploadRequest = UploadSignRequest;

export type SignTenderLotUploadResponse = UploadSignResponse;
export type SignTenderLotUploadRequest = UploadSignRequest;

export interface CreateTenderLotResponse {
  id: number;
  cpv_code: string;
  name: string;
  description: string;
  quantity: number;
  measurement_unit: Measurement;
  starting_price: number;
  supply_days_count: number;
  status: string;
  file_names: Array<string>;
  category_tree: CPVCodeTree;
}
export interface CreateTenderLotRequest
  extends Omit<TenderLot, "id" | "measurement_unit"> {
  tenderId: number;
  measurement_unit_id: number;
  order?: number;
}

interface GetTenderLots extends TenderByIdLot {}
export interface GetTenderLotsResponse extends GetTenderLots {}
export interface GetTenderLotsRequest {
  tenderId: number;
}

export type PublishTenderResponse = ApiResponse<void>;
export interface PublishTenderRequest {
  tenderId: number;
}

export type CategoryTree = CPVCodeTree;
