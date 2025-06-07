export type ModalType = "registerSuccess" | "tenderDetails";

export interface ModalState {
  props?: Record<string, unknown>;
  type: ModalType | null;
  open: boolean;
}
