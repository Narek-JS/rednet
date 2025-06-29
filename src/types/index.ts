// General types
export * from "./general";
export * from "./pageinatedResponse";
export * from "./missingFields";
export * from "./storage";

// Store types - export specific types to avoid conflicts
export type {
  User,
  Profile,
  Organization,
  AuthState,
  AuthResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  VerifyRequest,
  VerifyResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  SetNewPasswordRequest,
  SetNewPasswordResponse,
} from "../store/auth/types";

export type {
  ProfileService,
  ProfileProduct,
  ProfileTender,
  ProfileServicesRequest,
  ProfileServicesResponse,
  ProfileProductsRequest,
  ProfileProductsResponse,
  CreateProfileServiceRequest,
  CreateProfileServiceResponse,
  UpdateProfileServiceRequest,
  UpdateProfileServiceResponse,
  CreateProfileProductRequest,
  CreateProfileProductResponse,
  UpdateProfileProductRequest,
  UpdateProfileProductResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from "../store/profile/types";

export type {
  Tender,
  TenderLot,
  TenderByIdLot,
  TenderStatus,
  ProfileTendersRequest,
  ProfileTendersResponse,
  TenderByIdResponse,
  CreateTenderRequest,
  CreateTenderResponse,
  CreateTenderLotRequest,
  CreateTenderLotResponse,
  GetTenderLotsRequest,
  GetTenderLotsResponse,
  PublishTenderRequest,
  PublishTenderResponse,
} from "../store/tender/types";

export type {
  Industry,
  Measurement,
  Region,
  CPVCode,
  CPVCodeTree,
  IndustriesResponse,
  MeasurementsResponse,
  RegionsResponse,
} from "../store/lookup/types";

export type {
  UploadRequest,
  UploadResponse,
  UploadProgress,
  UploadState,
} from "../store/uploader/types";

export type { ModalType, ModalState } from "../store/modal/types";
