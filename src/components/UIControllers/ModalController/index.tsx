"use client";

import {
  CreateTenderSuccess,
  RegisterSuccess,
  ProductModal,
  ServiceModal,
  ProfileEdit,
  ParticipateTenderLotModal,
} from "@/components/Modals";
import { closeModal as closeModalState } from "@/store/modal/slice";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useCallback } from "react";

import * as Dialog from "@radix-ui/react-dialog";

const ModalController: React.FC = () => {
  const { open, type, props } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const closeModal = useCallback(() => {
    dispatch(closeModalState());
  }, [dispatch]);

  const renderContent = () => {
    switch (type) {
      case "registerSuccess":
        return <RegisterSuccess closeModal={closeModal} />;
      case "createTenderSuccess":
        return <CreateTenderSuccess closeModal={closeModal} />;
      case "profileEdit":
        return <ProfileEdit {...props} closeModal={closeModal} />;
      case "serviceModal":
        return <ServiceModal {...props} closeModal={closeModal} />;
      case "productModal":
        return <ProductModal {...props} closeModal={closeModal} />;
      case "participateTenderLotModal":
        return <ParticipateTenderLotModal closeModal={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={closeModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
          <Dialog.Content className="relative p-5 w-full max-w-[644px] bg-white rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">
            <Dialog.Title />
            {renderContent()}
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { ModalController };
