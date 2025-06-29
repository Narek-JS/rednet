export type ModalType =
  | "participateTenderLotModal"
  | "createTenderSuccess"
  | "registerSuccess"
  | "serviceModal"
  | "productModal"
  | "profileEdit";

export interface ModalState {
  props?: Record<string, unknown>;
  type: ModalType | null;
  open: boolean;
}
