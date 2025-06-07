export type ModalType = "registerSuccess" | "profileEdit";

export interface ModalState {
  props?: Record<string, unknown>;
  type: ModalType | null;
  open: boolean;
}
