"use client";

import { useGetIndustriesQuery } from "@/store/profile/api";
import { Button, Input, Select } from "@/components/UI";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Plus } from "@/components/Icons";
import { useRef, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import * as yup from "yup";

interface FormValues {
  description: string;
  industry: string;
}

const schema = yup.object({
  description: yup.string().required("Նկարագրությունը պարտադիր է"),
  industry: yup.string().required("Ընդհանուր ոլորտ ընտրելը պարտադիր է"),
});

const Step1: React.FC = () => {
  const router = useRouter();

  const coverRef = useRef<HTMLInputElement>(null);
  const profileRef = useRef<HTMLInputElement>(null);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const { data: industries } = useGetIndustriesQuery();

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (event.target.name === "profile") {
        setProfileImage(reader.result as string);
      }
      if (event.target.name === "cover") {
        setCoverImage(reader.result as string);
      }
    };
    reader.readAsDataURL(file);

    // TODO --> Upload image to server
  };

  const onSubmit = (data: FormValues) => {
    console.log("data --> ", data);
    // TODO --> Upload image and attach their URLs to data
    router.push("/profile/create?step=2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <input
        onChange={handleImageUpload}
        className="hidden"
        ref={coverRef}
        name="cover"
        type="file"
      />
      <input
        onChange={handleImageUpload}
        className="hidden"
        ref={profileRef}
        name="profile"
        type="file"
      />

      <div
        className="relative w-full h-[104px] border border-dotted border-[#D9D9D9] bg-[#FAFAFA] flex items-center justify-center cursor-pointer mb-20"
        onClick={() => coverRef.current?.click()}
      >
        {coverImage ? (
          <Image src={coverImage} alt="Cover" fill className="object-cover" />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2">
            <Plus />
            <p className="text-sm">Upload cover picture</p>
          </div>
        )}
        <div
          className="absolute w-[104px] h-[104px] border border-dotted border-[#D9D9D9] bg-[#FAFAFA] rounded-full top-[75px] left-1/2 transform -translate-x-1/2"
          onClick={(e) => {
            e.stopPropagation();
            profileRef.current?.click();
          }}
        >
          {profileImage ? (
            <Image
              src={profileImage}
              alt="Profile"
              fill
              className="rounded-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 h-full">
              <Plus />
              <p className="text-sm text-center">Profile picture</p>
            </div>
          )}
        </div>
      </div>

      <Input
        label="Կարճ նկարագրություն"
        placeholder="Կարճ նկարագրություն"
        error={errors.description?.message}
        {...register("description")}
      />

      <Select
        error={errors.industry?.message}
        placeholder="Select industry"
        {...register("industry")}
        onChange={(e) =>
          setValue("industry", e.target.value, { shouldValidate: true })
        }
      >
        {industries?.data?.map((industry) => (
          <option key={industry.id} value={industry.id.toString()}>
            {industry.name}
          </option>
        ))}
      </Select>

      <Button
        className={classNames("w-full h-[72px] font-semibold text-[18px]", {
          "opacity-50 cursor-default": !isValid || !coverImage || !profileImage,
        })}
        disabled={!isValid || !coverImage || !profileImage}
        type="submit"
      >
        Շարունակել
      </Button>
      <Button
        onClick={() => router.push("/")}
        className="w-full text-primary"
        variant="text"
        type="button"
      >
        Բաց թողնել
      </Button>
    </form>
  );
};

export { Step1 };
