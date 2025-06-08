export type ModalType =
  | "registerSuccess"
  | "tenderDetails"
  | "serviceModal"
  | "profileEdit";

export interface ModalState {
  props?: Record<string, unknown>;
  type: ModalType | null;
  open: boolean;
}
