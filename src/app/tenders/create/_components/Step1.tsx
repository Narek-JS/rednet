"use client";

import { Button, Input, Select, DatePicker } from "@/components/UI";
import { useCreateTenderMutation } from "@/store/tender/api";
import { setErrorsFields } from "@/utils/form/errorFields";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectState } from "@/store/auth/selectors";
import { SelectItem } from "@/components/UI/Select";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { TENDER_TYPES } from "@/constants";
import { TEXTS } from "@/constants/texts";
import { IError } from "@/types/general";
import * as yup from "yup";

interface FormValues {
  finishes_at: string;
  region: string;
  type: string;
  name: string;
}

const schema = yup.object({
  type: yup.string().required(TEXTS.createTenderStep1.validation.type),
  name: yup.string().required(TEXTS.createTenderStep1.validation.name),
  region: yup.string().required(TEXTS.createTenderStep1.validation.region),
  finishes_at: yup
    .string()
    .required(TEXTS.createTenderStep1.validation.finishesAt),
});

const Step1: React.FC = () => {
  const router = useRouter();
  const state = useAppSelector(selectState);
  const [createTender, { isLoading }] = useCreateTenderMutation();

  console.log("state --> ", state);

  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: FormValues) => {
    const profileId = state?.profile?.id;

    if (profileId) {
      const response = await createTender({ ...data, profileId });
      const tenderId = response.data?.data.id;

      if (response.error) {
        const errors = (response.error as any)?.data;

        if (errors) {
          setErrorsFields(form, errors as IError);
        } else {
          console.log("Unexpected error --> ", response);
        }
      } else if (tenderId) {
        router.push(`/tenders/create?step=2&tenderId=${tenderId}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <Select
            value={field.value}
            error={errors.type?.message}
            onValueChange={field.onChange}
            label={TEXTS.createTenderStep1.typeLabel}
            placeholder={TEXTS.createTenderStep1.typePlaceholder}
          >
            {Object.entries(TENDER_TYPES).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                {value}
              </SelectItem>
            ))}
          </Select>
        )}
      />

      <Input
        error={errors.name?.message}
        label={TEXTS.createTenderStep1.nameLabel}
        placeholder={TEXTS.createTenderStep1.namePlaceholder}
        {...register("name")}
      />

      <Input
        error={errors.region?.message}
        label={TEXTS.createTenderStep1.regionLabel}
        placeholder={TEXTS.createTenderStep1.regionPlaceholder}
        {...register("region")}
      />

      <Controller
        name="finishes_at"
        control={control}
        render={({ field }) => (
          <DatePicker
            label={TEXTS.createTenderStep1.finishesAtLabel}
            error={errors.finishes_at?.message}
            formatString="yyyy-MM-dd HH:mm:ss"
            field={field}
          />
        )}
      />

      <Button
        className="w-full font-semibold mt-2"
        loading={isLoading}
        type="submit"
      >
        {TEXTS.createTenderStep1.continue}
      </Button>
    </form>
  );
};

export { Step1 };
