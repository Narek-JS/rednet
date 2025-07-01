"use client";

import {
  useCreateTenderLotMutation,
  usePublishTenderMutation,
  useGetTenderLotsQuery,
} from "@/store/tender/api";
import { Button, Input, Select, SelectItem, Skeleton } from "@/components/UI";
import { MultipleFileUpload } from "@/components/UI/MultipleFileUpload";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { useGetMeasurementsQuery } from "@/store/lookup/api";
import { setErrorsFields } from "@/utils/form/errorFields";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox } from "@/components/UI/Chechbox";
import { TenderLot } from "@/store/tender/types";
import { openModal } from "@/store/modal/slice";
import { useAppDispatch } from "@/store/hooks";
import { Eye } from "@/components/Icons/Eye";
import { TEXTS } from "@/constants/texts";
import { IError } from "@/types/general";
import { Trash } from "lucide-react";
import { useEffect } from "react";
import * as yup from "yup";

interface FormValues {
  lots: Array<TenderLot>;
  agreement: boolean;
  newLot: {
    measurement_unit_id: string;
    supply_days_count: string;
    starting_price: string;
    description: string;
    file_names: string[];
    quantity: string;
    cpv_code: string;
    name: string;
    status?: string;
  };
}

interface Props {
  tenderId: number;
}

const schema = yup.object({
  lots: yup.array().min(1, "At least one lot is required"),
  agreement: yup
    .boolean()
    .oneOf([true], TEXTS.createTenderStep2.validation.agreement)
    .required(),
});

const defaultValues = {
  newLot: {
    measurement_unit_id: "",
    supply_days_count: "",
    starting_price: "",
    description: "",
    file_names: [],
    quantity: "",
    cpv_code: "",
    name: "",
  },
  agreement: false,
  lots: [],
};

const Step2: React.FC<Props> = ({ tenderId }) => {
  const dispatch = useAppDispatch();

  const [createTenderLot, { isLoading: isAddingLot }] =
    useCreateTenderLotMutation();
  const [publishTender, { isLoading: isPublishing }] =
    usePublishTenderMutation();

  const { data: tenderLots, isLoading } = useGetTenderLotsQuery({ tenderId });
  const { data: easurements } = useGetMeasurementsQuery();

  const form = useForm<FormValues>({
    resolver: yupResolver(schema) as any,
    mode: "onChange",
    defaultValues,
  });
  const {
    formState: { errors },
    handleSubmit,
    resetField,
    getValues,
    control,
  } = form;

  const { fields, append, remove, replace } = useFieldArray({
    name: "lots",
    control,
  });

  useEffect(() => {
    if (tenderLots?.data && tenderLots.data.length > 0) {
      const transformedLots = tenderLots.data.map((lot, index) => ({
        ...lot,
        measurement_unit_id: String(lot.measurement_unit?.id) || "",
        supply_days_count: lot.supply_days_count?.toString() || "",
        starting_price: lot.starting_price?.toString() || "",
        quantity: lot.quantity?.toString() || "",
        order: index,
      }));

      replace(transformedLots);
    }
  }, [tenderLots, replace]);

  const handleAddLot = async () => {
    const newLot = getValues("newLot");

    const res = await createTenderLot({
      name: newLot.name,
      description: newLot.description,
      quantity: newLot.quantity,
      cpv_code: newLot.cpv_code,
      starting_price: newLot.starting_price,
      supply_days_count: newLot.supply_days_count,
      status: newLot.status || "draft",
      file_names: newLot.file_names,
      measurement_unit_id: Number(newLot.measurement_unit_id),
      tenderId,
      order: fields.length + 1,
    });

    if (res.error) {
      const errors = (res.error as any)?.data;
      if (errors) {
        setErrorsFields(form, errors as IError, "newLot");
      } else {
        console.log("Unexpected error --> ", res);
      }
    } else {
      // Transform form data to match TenderLot structure
      const transformedLot: TenderLot = {
        id: Date.now(), // temporary id for display
        name: newLot.name,
        description: newLot.description,
        quantity: newLot.quantity,
        cpv_code: newLot.cpv_code,
        starting_price: newLot.starting_price,
        supply_days_count: newLot.supply_days_count,
        status: newLot.status || "draft",
        file_names: newLot.file_names,
        measurement_unit: {
          id: Number(newLot.measurement_unit_id),
          name:
            easurements?.data?.find(
              (m) => m.id === Number(newLot.measurement_unit_id)
            )?.name || "",
        },
      };

      append(transformedLot);
      resetField("newLot");
    }
  };

  const onSubmit = async () => {
    const res = await publishTender({ tenderId });

    if (!res.error) {
      dispatch(openModal({ type: "createTenderSuccess" }));
    }
  };

  const openParticipateModal = (lot: any) => {
    if (lot.status === "pending") {
      dispatch(openModal({ type: "participateTenderLotModal" }));
    } else {
      alert("open enmyus modal");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 -mt-3"
    >
      <div className="relative flex flex-col gap-4">
        <p className="text-[#C30052] text-sm font-semibold">
          {errors.lots?.message || ""}
        </p>

        {isLoading && <Skeleton className="w-full h-[40px] !bg-[#EFF0F6]" />}

        {fields?.map((field, index) => (
          <div
            key={field.id}
            className="flex items-center justify-between rounded h-[40px] px-3.5 bg-[#EFF0F6]"
          >
            <p className="font-semibold">{field.name}</p>
            <div className="flex items-center gap-6">
              <Button
                onClick={() => openParticipateModal(field)}
                className="text-primary flex items-center gap-2.5 font-semibold"
                variant="text"
                type="button"
              >
                <Eye /> <span>{TEXTS.createTenderStep2.seeMore}</span>
              </Button>
              <Trash
                className="text-primary cursor-pointer"
                onClick={() => remove(index)}
                size={18}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Controller
          name="newLot.measurement_unit_id"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
              label={TEXTS.createTenderStep2.fields.measurementUnit}
              error={errors?.newLot?.measurement_unit_id?.message}
              placeholder={TEXTS.createTenderStep2.placeholders.measurementUnit}
            >
              {easurements?.data?.map(({ id, name }) => (
                <SelectItem key={id} value={id.toString()}>
                  {name}
                </SelectItem>
              ))}
            </Select>
          )}
        />
        <Controller
          name="newLot.name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label={TEXTS.createTenderStep2.fields.name}
              error={errors?.newLot?.name?.message as string}
              placeholder={TEXTS.createTenderStep2.placeholders.name}
            />
          )}
        />

        <Controller
          name="newLot.quantity"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder={TEXTS.createTenderStep2.placeholders.quantity}
              label={TEXTS.createTenderStep2.fields.quantity}
              error={errors?.newLot?.quantity?.message as string}
            />
          )}
        />

        <Controller
          name="newLot.starting_price"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder={TEXTS.createTenderStep2.placeholders.startingPrice}
              label={TEXTS.createTenderStep2.fields.startingPrice}
              error={errors?.newLot?.starting_price?.message as string}
            />
          )}
        />

        <Controller
          name="newLot.description"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label={TEXTS.createTenderStep2.fields.description}
              placeholder={TEXTS.createTenderStep2.placeholders.description}
              error={errors?.newLot?.description?.message as string}
            />
          )}
        />

        <Controller
          name="newLot.supply_days_count"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder={TEXTS.createTenderStep2.placeholders.supplyDaysCount}
              label={TEXTS.createTenderStep2.fields.supplyDaysCount}
              error={errors?.newLot?.supply_days_count?.message as string}
            />
          )}
        />
      </div>

      <Controller
        name="newLot.cpv_code"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label={TEXTS.createTenderStep2.fields.cpvCode}
            placeholder={TEXTS.createTenderStep2.placeholders.cpvCode}
            error={errors?.newLot?.cpv_code?.message as string}
          />
        )}
      />

      <Controller
        name="newLot.file_names"
        control={control}
        render={({ field }) => (
          <MultipleFileUpload
            label={TEXTS.createTenderStep2.fields.fileNames}
            classname="max-w-[160px]"
            name={field.name}
            control={control}
          />
        )}
      />

      <Button
        onClick={handleAddLot}
        loading={isAddingLot}
        className="w-full"
        variant="outline"
        type="button"
      >
        {TEXTS.createTenderStep2.addLotButton}
      </Button>

      <div className="relative flex items-center gap-2">
        <Controller
          name="agreement"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="agreement"
              checked={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <label htmlFor="agreement" className="text-[10px] sm:text-sm">
          {TEXTS.createTenderStep2.agreement}
        </label>
        {errors.agreement && (
          <p className="absolute -bottom-[22px] left-[22px] text-red-500 text-xs">
            {errors.agreement.message}
          </p>
        )}
      </div>

      <Button
        className="w-full font-semibold mt-2"
        loading={isPublishing}
        type="submit"
      >
        {TEXTS.createTenderStep2.continue}
      </Button>
    </form>
  );
};

export { Step2 };
