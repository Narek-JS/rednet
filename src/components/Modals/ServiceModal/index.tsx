"use client";

import {
  useLazySignServicePhotoUploadQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
} from "@/store/profile/api";
import { useUploadFileMutation } from "@/store/uploader/api";
import { ProfileService } from "@/store/profile/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectState } from "@/store/auth/selectors";
import { Upload } from "@/components/Icons/Upload";
import { Button, Input } from "@/components/UI";
import { useAppSelector } from "@/store/hooks";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import * as yup from "yup";

interface Props {
  service?: ProfileService;
  closeModal: () => void;
  profileId?: number;
}

const schema = yup.object({
  description: yup.string().required("Description is required"),
  name: yup.string().required("Service name is required"),
});

const ServiceModal: React.FC<Props> = ({ closeModal, profileId, service }) => {
  const state = useAppSelector(selectState);
  const isEdit = state?.profile?.id === profileId;

  const [photoName, setPhotoName] = useState(service?.photo_url || "");

  const [signServicePhotoUpload] = useLazySignServicePhotoUploadQuery();
  const [updateService] = useUpdateServiceMutation();
  const [createService] = useCreateServiceMutation();
  const [uploadFile] = useUploadFileMutation();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema),
    defaultValues: {
      description: service?.description || "",
      name: service?.name || "",
    },
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = form;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const resUpload = await signServicePhotoUpload({ file_name: file.name });

    if (resUpload.isSuccess) {
      await uploadFile({ url: resUpload?.data.data.upload_url, file });
      setPhotoName(resUpload.data.data.file_name);
    }
  };

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    if (!isEdit) {
      await updateService({
        serviceId: Number(service!.id),
        photo_name: photoName,
        ...data,
      });
    } else {
      await createService({
        photo_name: photoName,
        profileId: profileId!,
        ...data,
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 text-center pt-8">
      <X
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer"
        onClick={closeModal}
      />
      <h2 className="text-[48px] font-bold">
        {isEdit ? "Edit" : "Create"} Service
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-2 flex-wrap gap-y-8"
      >
        <div className="flex items-center gap-1">
          <div
            className="cursor-pointer relative w-[148px] h-[32px] border border-[#D9D9D9] flex gap-2 items-center justify-center"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload />
            <Input
              onChange={handleFileUpload}
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              type="file"
            />
            <p className="text-body font-normal">Upload photo</p>
          </div>
        </div>

        <Input
          label="Service name"
          placeholder="Enter Service name"
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          label="Description"
          placeholder="Enter Service description"
          error={errors.description?.message}
          {...register("description")}
        />

        <div className="h-[1px] bg-[#D6D8E7] mb-4" />

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit">
            {isEdit ? "Update" : "Add" + " service"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export { ServiceModal };
