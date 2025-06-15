export type ModalType =
  | "registerSuccess"
  | "tenderDetails"
  | "serviceModal"
  | "productModal"
  | "profileEdit";

export interface ModalState {
  props?: Record<string, unknown>;
  type: ModalType | null;
  open: boolean;
}
