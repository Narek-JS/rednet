export type ModalType = "registerSuccess" | "profileEdit" | "tenderDetails";

export interface ModalState {
  props?: Record<string, unknown>;
  type: ModalType | null;
  open: boolean;
}
