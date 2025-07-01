"use client";

import {
  useLazySignProductPhotoUploadQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
} from "@/store/profile/api";
import { getNonEmptyFields } from "@/utils/form/updateFields";
import { useUploadFileMutation } from "@/store/uploader/api";
import { setErrorsFields } from "@/utils/form/errorFields";
import { ProfileProduct } from "@/store/profile/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@/components/UI";
import { useForm } from "react-hook-form";
import { TEXTS } from "@/constants/texts";
import { Plus } from "@/components/Icons";
import { IError } from "@/types/general";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import * as yup from "yup";

interface Props {
  product?: ProfileProduct;
  closeModal: () => void;
  profileId?: number;
}

const schema = yup.object({
  description: yup
    .string()
    .required(TEXTS.validation.required.productDescription),
  name: yup.string().required(TEXTS.validation.required.productName),
});

const ProductModal: React.FC<Props> = ({ closeModal, profileId, product }) => {
  const isEdit = !!product;
  const iamgeRef = useRef<HTMLInputElement>(null);

  const [productImage, setProductImage] = useState<string>(
    product?.photo_url || ""
  );
  const [photoName, setPhotoName] = useState("");

  const [signProductPhotoUpload] = useLazySignProductPhotoUploadQuery();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const [createProduct, { isLoading: isCreating }] = useCreateProductMutation();
  const [uploadFile] = useUploadFileMutation();

  const form = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema),
    defaultValues: {
      description: product?.description || "",
      name: product?.name || "",
    },
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = form;

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setProductImage(reader.result as string);
    };
    reader.readAsDataURL(file);

    const resUpload = await signProductPhotoUpload({ file_name: file.name });
    if (resUpload.isSuccess) {
      await uploadFile({ url: resUpload.data.data.upload_url, file });
      setPhotoName(resUpload.data.data.file_name);
    }
  };

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    let res = null;

    if (isEdit) {
      const diff = getNonEmptyFields(data, product);

      res = await updateProduct({
        productId: Number(product!.id),
        ...(photoName && { photo_name: photoName }),
        ...diff,
      });
    } else {
      res = await createProduct({
        photo_name: photoName,
        profileId: profileId!,
        ...data,
      });
    }

    if (!res.error) {
      closeModal();
    } else {
      const errors = (res.error as any)?.data;

      if (errors) {
        setErrorsFields(form, errors as IError);
      } else {
        console.log("Unexpected error --> ", res);
      }
    }
  };

  const isLoading = isCreating || isUpdating;

  return (
    <div className="flex flex-col items-center gap-6 text-center pt-8">
      <X
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer"
        onClick={closeModal}
      />
      <h2 className="w-full text-left text-[22px] sm:text-[38px] font-bold">
        {isEdit
          ? TEXTS.productModal.title.edit
          : TEXTS.productModal.title.create}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-2 flex-wrap gap-y-8"
      >
        <div
          className="relative w-[104px] h-[104px] border border-dotted border-[#D9D9D9] bg-[#FAFAFA] rounded-full cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            iamgeRef.current?.click();
          }}
        >
          <input
            onChange={handleImageUpload}
            className="hidden"
            ref={iamgeRef}
            name="product"
            type="file"
          />
          {productImage ? (
            <Image
              src={productImage}
              alt="Product"
              fill
              className="rounded-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 h-full">
              <Plus />
              <p className="text-sm text-center">
                {TEXTS.productModal.fields.upload}
              </p>
            </div>
          )}
        </div>

        <Input
          placeholder={TEXTS.productModal.placeholders.name}
          label={TEXTS.productModal.fields.name}
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          placeholder={TEXTS.productModal.placeholders.description}
          label={TEXTS.productModal.fields.description}
          error={errors.description?.message}
          {...register("description")}
        />

        <div className="h-[1px] bg-[#dee6f094]" />

        <div className="w-full flex flex-col sm:flex-row justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={closeModal}
            className="max-w-full sm:max-w-fit text-[14px] sm:text-[16px]"
          >
            {TEXTS.productModal.buttons.cancel}
          </Button>
          <Button
            className="min-w-[236px] max-w-full sm:max-w-fit text-[14px] sm:text-[16px]"
            loading={isLoading}
            type="submit"
          >
            {isEdit
              ? TEXTS.productModal.buttons.update
              : TEXTS.productModal.buttons.add}
          </Button>
        </div>
      </form>
    </div>
  );
};

export { ProductModal };
