/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ApiResponse } from "@/types/general";

// Upload response interface
export interface UploadResponse extends ApiResponse<void> {}

// Upload request interface
export interface UploadRequest {
  url: string;
  file?: File;
}

// File upload progress interface
export interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

// Upload state interface
export interface UploadState {
  isUploading: boolean;
  progress: UploadProgress | null;
  error: string | null;
}
