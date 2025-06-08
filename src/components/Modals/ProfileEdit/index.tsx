"use client";

import {
  useGetIndustriesQuery,
  useUpdateProfileMutation,
} from "@/store/profile/api";
import { Button, Input, Select } from "@/components/UI";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectState } from "@/store/auth/selectors";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import * as yup from "yup";

interface Props {
  closeModal: () => void;
}

const schema = yup.object({
  brand_name: yup.string().required("Անունը պարտադիր է"),
  headline: yup.string().required("Վերնագիրը պարտադիր է"),
  description: yup.string().required("Նկարագրությունը պարտադիր է"),
  industries: yup.string().required("Ոլորտը պարտադիր է"),
  region: yup.string().required("Մարզը պարտադիր է"),
  phone_number: yup.string().required("Հեռախոսահամարը պարտադիր է"),
  public_email: yup
    .string()
    .email("Էլ. փոստը սխալ է")
    .required("Էլ. փոստը պարտադիր է"),
  website_url: yup
    .string()
    .url("Կայքի հղումը սխալ է")
    .required("Կայքը պարտադիր է"),
});

const ProfileEdit: React.FC<Props> = ({ closeModal }) => {
  const state = useAppSelector(selectState);
  const router = useRouter();

  const { data: industries } = useGetIndustriesQuery();

  const [updateProfile] = useUpdateProfileMutation();

  const form = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    if (!state?.profile?.id) return;

    try {
      const res = await updateProfile({
        ...data,
        profileId: state?.profile?.id,
        industries: [Number(data.industries)],
      });

      if (!res.error) {
        router.refresh();
        closeModal();
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 text-center pt-8">
      <X
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer"
        onClick={closeModal}
      />
      <h2 className="text-[48px] font-bold">Profile information</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-2 flex-wrap gap-y-8"
      >
        <Input
          label="Company name"
          placeholder="John"
          error={errors.brand_name?.message}
          {...register("brand_name")}
        />

        <Input
          label="Headline"
          placeholder="John"
          error={errors.headline?.message}
          {...register("headline")}
        />

        <Input
          label="Description"
          placeholder="John"
          error={errors.description?.message}
          {...register("description")}
        />

        <Select
          error={errors.industries?.message}
          placeholder="Select industry"
          label="Industry"
          {...register("industries")}
        >
          {industries?.data?.map((industry) => (
            <option key={industry.id} value={industry.id.toString()}>
              {industry.name}
            </option>
          ))}
        </Select>

        <Input
          label="State"
          placeholder="John"
          error={errors.region?.message}
          {...register("region")}
        />

        <Input
          label="Phone number"
          placeholder="John"
          error={errors.phone_number?.message}
          {...register("phone_number")}
        />

        <Input
          label="Email address"
          placeholder="John"
          error={errors.public_email?.message}
          {...register("public_email")}
        />

        <Input
          label="Linkedin"
          placeholder="John"
          error={errors.website_url?.message}
          {...register("website_url")}
        />

        <div className="bg-[#DEE6F0] h-[1px] w-full mt-2.5" />

        <div className="w-full flex items-center justify-end gap-3.5">
          <Button
            className="max-w-[100px]"
            onClick={closeModal}
            variant="border"
            type="button"
          >
            Cancel
          </Button>
          <Button type="submit" variant="primery" className="max-w-[100px]">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export { ProfileEdit };
