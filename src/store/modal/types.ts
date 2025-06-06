export type ModalType = "registerSuccess";

export interface ModalState {
  props?: Record<string, unknown>;
  type: ModalType | null;
  open: boolean;
}
