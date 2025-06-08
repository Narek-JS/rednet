"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input, Button } from "@/components/UI";
import * as yup from "yup";

const schema = yup.object().shape({
  type: yup.string().required("Տեսակը պարտադիր է"),
  name: yup.string().required("Անվանումը պարտադիր է"),
  region: yup.string().required("Տարածաշրջանը պարտադիր է"),
  description: yup.string().required("Նկարագրությունը պարտադիր է"),
  quantity: yup
    .number()
    .typeError("Քանակը պետք է լինի թիվ")
    .min(1, "Քանակը պետք է լինի ոչ պակաս քան 1")
    .required("Քանակը պարտադիր է"),
  unit: yup.string().required("Չափման միավորը պարտադիր է"),
});

type FormValues = {
  type: string;
  name: string;
  region: string;
  description: string;
  quantity: number;
  unit: string;
};

const Step1: React.FC = () => {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      type: "",
      unit: "կգ",
    },
  });

  const { register, handleSubmit, formState, setValue, watch } = form;

  const onSubmit = (data: FormValues) => {
    console.log(data, 'step1 ');
    router.push("/tender?step=2");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-10 rounded-[24px] shadow-md flex flex-col gap-y-8"
    >
      <div className="w-full flex flex-col gap-2.5 relative">
        <label className="text-[#14142B] font-semibold text-[14px]">
          Ընտրեք տեսակը *
        </label>
        <select
          {...register("type")}
          className="h-[56px] rounded-[16px] bg-[#EFF0F6] px-4 outline-none"
        >
          <option value="">Ընտրել տեսակը</option>
          <option value="type1">Տեսակ 1</option>
          <option value="type2">Տեսակ 2</option>
        </select>
        {formState.errors.type?.message && (
          <p className="text-[#C30052] text-sm font-semibold">
            {formState.errors.type.message}
          </p>
        )}
      </div>

      <Input
        label="Անվանումը *"
        placeholder="Ապրանքի անուն"
        {...register("name")}
        error={formState.errors.name?.message}
      />

      <Input
        label="Տարածաշրջան *"
        placeholder="Տարածաշրջան"
        {...register("region")}
        error={formState.errors.region?.message}
      />

      <div className="relative w-full flex flex-col gap-2.5">
        <label className="text-[#14142B] font-semibold text-[14px]">
          Նկարագրություն *
        </label>
        <textarea
          {...register("description")}
          className="w-full h-[128px] rounded-[16px] border-none outline-none bg-[#EFF0F6] px-3 pl-6 py-2"
          placeholder="Նկարագրություն"
        />
        {formState.errors.description?.message && (
          <p className="text-[#C30052] text-sm font-semibold">
            {formState.errors.description.message}
          </p>
        )}
      </div>

      <div className="w-full flex gap-4 items-end">
        <div className="flex-1 relative">
          <Input
            type="number"
            label="Քանակը *"
            placeholder="Քանակ"
            {...register("quantity")}
            error={formState.errors.quantity?.message}
          />
        </div>

        <div className="min-w-[95px] relative flex flex-col gap-2.5">
          <label className="text-[#14142B] font-semibold text-[14px] invisible">
            -
          </label>
          <select
            {...register("unit")}
            value={watch("unit")}
            onChange={(e) => setValue("unit", e.target.value)}
            className="h-[56px] rounded-[16px] bg-[#EFF0F6] px-4 outline-none"
          >
            <option value="կգ">կգ</option>
            <option value="լիտր">լիտր</option>
            <option value="հատ">հատ</option>
          </select>
          {formState.errors.unit?.message && (
            <p className="text-[#C30052] text-sm font-semibold">
              {formState.errors.unit.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" className="h-[56px] text-[18px] font-semibold">
        Շարունակել
      </Button>
    </form>
  );
};

export default Step1;
