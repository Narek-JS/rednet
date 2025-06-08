"use client";

import { closeModal as closeModalState } from "@/store/modal/slice";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { ProfileEdit, RegisterSuccess } from "../Modals";
import { useCallback } from "react";

import * as Dialog from "@radix-ui/react-dialog";

const ModalController: React.FC = () => {
  const { open, type } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const closeModal = useCallback(() => {
    dispatch(closeModalState());
  }, [dispatch]);

  const renderContent = () => {
    switch (type) {
      case "registerSuccess":
        return <RegisterSuccess closeModal={closeModal} />;
      case "profileEdit":
        return <ProfileEdit closeModal={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={closeModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="max-w-[644px] w-full fixed z-50 p-4 bg-white rounded-xl shadow-lg top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-h-[90vh] overflow-y-auto">
          {renderContent()}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { ModalController };
