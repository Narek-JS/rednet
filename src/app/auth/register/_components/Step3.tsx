"use client";

import { Button, Input, RadioGroup, RadioGroupItem } from "@/components/UI";
import { yupResolver } from "@hookform/resolvers/yup";
import { ENDPOINTS_ENUM } from "@/constants";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { api } from "@/utils/api";
import * as yup from "yup";
import classNames from "classnames";

const schema = yup.object().shape({
  org_type: yup
    .string()
    .required("Ընտրությունը պարտադիր է")
    .oneOf(["legal", "physical"]),
  type: yup.string(),
  tin: yup.string().when("org_type", {
    is: "legal",
    then: (s) => s.required("ՀՎՀՀ-ն պարտադիր է"),
  }),
  name: yup.string().when("org_type", {
    is: "legal",
    then: (s) => s.required("Անունը պարտադիր է"),
  }),
  address: yup.string().when("org_type", {
    is: "legal",
    then: (s) => s.required("Հասցեն պարտադիր է"),
  }),
  head_full_name: yup.string().when("org_type", {
    is: "legal",
    then: (s) => s.required("Ղեկավարի անունը պարտադիր է"),
  }),
});

type FormData = yup.InferType<typeof schema>;

const Step3: React.FC = () => {
  const router = useRouter();

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      org_type: undefined,
      type: "llc",
      tin: "",
      name: "",
      address: "",
      head_full_name: "",
    },
  });

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors, isValid },
  } = form;

  useEffect(() => {
    setValue("type", "llc");
  }, [setValue]);

  const onSubmit = async ({ org_type, ...data }: FormData) => {
    if (org_type === "physical") {
      const res = await api.post(ENDPOINTS_ENUM.ORGANIZATION_INDIVIDUAL);

      if (res.status === "SUCCESS") {
        router.push("/auth/register?step=4");
      }
    } else {
      const res = await api.post(ENDPOINTS_ENUM.ORGANIZATION_LEGAL, {
        body: JSON.stringify({ ...data, type: "llc" }),
      });
      if (res.status === "SUCCESS") {
        router.push("/auth/register?step=4");
      }
    }
  };

  const orgType = watch("org_type");

  return (
    <>
      <div className="mb-8">
        <h1 className="text-title-active text-[32px] font-semibold">
          Վերնագիր
        </h1>
        <p className="font-medium text-body mt-1">
          Հանդիսանում եք որպես իրավաբանական անձ, թե ֆիզիկական անձ:
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-8 space-y-8">
        <RadioGroup className="flex w-full gap-8" {...register("org_type")}>
          <label className="flex items-center gap-2 cursor-pointer">
            <RadioGroupItem value="legal" />
            <span className="font-normal">Իրավաբանական անձ</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <RadioGroupItem value="physical" />
            <span className="font-normal">Ֆիզիկական անձ</span>
          </label>
        </RadioGroup>
        {errors.org_type && (
          <p className="text-[#C30052] text-sm font-semibold">
            {errors.org_type.message}
          </p>
        )}

        {orgType === "legal" && (
          <>
            <Input
              label="ՀՎՀՀ"
              placeholder="ՀՎՀՀ"
              error={errors.tin?.message}
              {...register("tin")}
            />
            <Input
              label="Ընկերության լրիվ և ճշգրիտ անվանումը"
              placeholder="Company name"
              error={errors.name?.message}
              {...register("name")}
            />
            <Input
              label="Ընկերության հասցեն"
              placeholder="Address"
              error={errors.address?.message}
              {...register("address")}
            />
            <Input
              label="Ղեկավարի Անուն Ազգանուն"
              placeholder="Name Surname"
              error={errors.head_full_name?.message}
              {...register("head_full_name")}
            />
          </>
        )}

        <Button
          className={classNames("w-full h-[72px] font-semibold text-[18px]", {
            "opacity-50 cursor-default": !isValid,
          })}
          disabled={!isValid}
          type="submit"
        >
          Շարունակել
        </Button>
      </form>
    </>
  );
};

export { Step3 };
