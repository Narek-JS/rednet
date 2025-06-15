"use client";

import {
  useOrganizationIndividualMutation,
  useOrganizationLegalMutation,
} from "@/store/auth/api";
import { Button, Input, RadioGroup, RadioGroupItem } from "@/components/UI";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { setErrorsFields } from "@/utils/formErrors";
import { openModal } from "@/store/modal/slice";
import { useAppDispatch } from "@/store/hooks";
import { TEXTS } from "@/constants/texts";
import { IError } from "@/types/general";
import classNames from "classnames";
import * as yup from "yup";

const schema = yup.object().shape({
  org_type: yup
    .string()
    .required(TEXTS.registerStep3.validation.orgType)
    .oneOf(["legal", "physical"]),
  type: yup.string(),
  tin: yup.string().when("org_type", {
    is: "legal",
    then: (s) => s.required(TEXTS.registerStep3.validation.tin),
  }),
  name: yup.string().when("org_type", {
    is: "legal",
    then: (s) => s.required(TEXTS.registerStep3.validation.name),
  }),
  address: yup.string().when("org_type", {
    is: "legal",
    then: (s) => s.required(TEXTS.registerStep3.validation.address),
  }),
  head_full_name: yup.string().when("org_type", {
    is: "legal",
    then: (s) => s.required(TEXTS.registerStep3.validation.headFullName),
  }),
});

const Step3: React.FC = () => {
  const dispatch = useAppDispatch();

  const [organizationIndividual] = useOrganizationIndividualMutation();
  const [organizationLegal] = useOrganizationLegalMutation();

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      org_type: undefined,
      head_full_name: "",
      type: "llc",
      address: "",
      name: "",
      tin: "",
    },
  });

  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
    control,
    watch,
  } = form;

  const onSubmit = async ({ org_type, ...data }: any) => {
    if (org_type === "physical") {
      const res = await organizationIndividual();

      if (!res.error) {
        return dispatch(openModal({ type: "registerSuccess" }));
      }

      const errors = (res.error as any)?.data;
      if (errors) {
        setErrorsFields(form as any, errors as IError);
      } else {
        console.log("Unexpected error --> ", res);
      }
      return;
    }

    const res = await organizationLegal({ ...data, type: "llc" });

    if (!res.error) {
      return dispatch(openModal({ type: "registerSuccess" }));
    }

    const errors = (res.error as any)?.data;
    if (errors) {
      setErrorsFields(form as any, errors as IError);
    } else {
      console.log("Unexpected error --> ", res);
    }
  };

  const orgType = watch("org_type");

  return (
    <>
      <div className="mb-8">
        <h1 className="text-title-active text-[32px] font-semibold">
          {TEXTS.registerStep3.title}
        </h1>
        <p className="font-medium text-body mt-1">
          {TEXTS.registerStep3.subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-8 space-y-8">
        <Controller
          control={control}
          name="org_type"
          render={({ field }) => (
            <RadioGroup
              className="flex flex-col sm:flex-row w-full gap-3 sm:gap-8"
              onValueChange={field.onChange}
              value={field.value}
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <RadioGroupItem value="legal" />
                <span className="font-normal text-body text-[14px] sm:text-[16px]">
                  {TEXTS.registerStep3.orgTypes.legal}
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <RadioGroupItem value="physical" />
                <span className="font-normal text-body text-[14px] sm:text-[16px]">
                  {TEXTS.registerStep3.orgTypes.physical}
                </span>
              </label>
            </RadioGroup>
          )}
        />
        {errors.org_type && (
          <p className="text-[#C30052] text-sm font-semibold">
            {errors.org_type.message}
          </p>
        )}

        {orgType === "legal" && (
          <>
            <Input
              label={TEXTS.registerStep3.fields.tin}
              placeholder={TEXTS.registerStep3.placeholders.tin}
              error={errors.tin?.message}
              {...register("tin")}
            />
            <Input
              label={TEXTS.registerStep3.fields.name}
              placeholder={TEXTS.registerStep3.placeholders.name}
              error={errors.name?.message}
              {...register("name")}
            />
            <Input
              label={TEXTS.registerStep3.fields.address}
              placeholder={TEXTS.registerStep3.placeholders.address}
              error={errors.address?.message}
              {...register("address")}
            />
            <Input
              label={TEXTS.registerStep3.fields.headFullName}
              placeholder={TEXTS.registerStep3.placeholders.headFullName}
              error={errors.head_full_name?.message}
              {...register("head_full_name")}
            />
          </>
        )}

        <Button
          className={classNames("w-full font-semibold", {
            "opacity-50 cursor-default": !isValid,
          })}
          disabled={!isValid}
          type="submit"
        >
          {TEXTS.registerStep3.continue}
        </Button>
      </form>
    </>
  );
};

export { Step3 };
