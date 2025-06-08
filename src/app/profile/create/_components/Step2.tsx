"use client";

import { Button, Input, Select } from "@/components/UI";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface FormValues {
  state: string;
  companySize: string;
}

const schema = yup.object({
  state: yup.string().required("Մարզը պարտադիր է"),
  companySize: yup.string().required("Company size ընտրելը պարտադիր է"),
});

const Step2: React.FC = () => {
  const router = useRouter();

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("data --> ", data);

    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <Input
        label="Մարզ"
        placeholder="Մարզ"
        error={errors.state?.message}
        {...register("state")}
      />

      <Select
        error={errors.companySize?.message}
        placeholder="Company Size"
        {...register("companySize")}
        onChange={(e) =>
          setValue("companySize", e.target.value, { shouldValidate: true })
        }
      >
        <option value="1-5">1-5</option>
        <option value="5-10">5-10</option>
        <option value="10-20">10-20</option>
        <option value="20-50">20-50</option>
        <option value="50-100">50-100</option>
        <option value="100+">100+</option>
      </Select>

      <Button
        className="w-full h-[72px] font-semibold text-[18px]"
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

export { Step2 };
