export interface IError {
  errors: Record<string, Array<string>>;
  message: string;
}

export interface Response<T> {
  data: T;
}

// Common upload response interface
export interface UploadSignResponse {
  data: {
    file_name: string;
    upload_url: string;
    retrieve_url: string;
    expires_at: string;
  };
}

export interface UploadSignRequest {
  file_name?: string;
}

// Common API response wrapper
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

// Common pagination request
export interface PaginationRequest {
  page?: number;
  per_page?: number;
}

// Common ID-based request
export interface IdRequest {
  id: number;
}

// Common form field types
export interface FormField {
  value: string;
  error?: string;
  touched?: boolean;
}

// Common loading states
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

// Common select option
export interface SelectOption<T = string | number> {
  label: string;
  value: T;
  disabled?: boolean;
}

// Common file upload
export interface FileUpload {
  file: File;
  preview?: string;
  progress?: number;
  error?: string;
}

// Common date range
export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

// Common coordinates
export interface Coordinates {
  latitude: number;
  longitude: number;
}

// Common address
export interface Address {
  street: string;
  city: string;
  state?: string;
  country: string;
  postalCode?: string;
  coordinates?: Coordinates;
}
