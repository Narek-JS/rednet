"use client";

import { Button, Input, MultipleFileUpload } from "@/components/UI";
import { Controller, useForm } from "react-hook-form";
import { Time } from "@/components/Icons";
import { TEXTS } from "@/constants/texts";
import { X } from "lucide-react";

interface FormValues {
  file_names: string[];
  price: string;
}

interface Props {
  closeModal: () => void;
}

const ParticipateTenderLotModal: React.FC<Props> = ({ closeModal }) => {
  const form = useForm<FormValues>({
    mode: "onChange",
    defaultValues: { file_names: [] },
  });
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (values: FormValues) => {
    console.log("values --> ", values);
  };

  return (
    <div className="flex flex-col relative px-2 sm:px-6 py-4 sm:py-8 w-full max-w-[95vw] sm:max-w-[600px] mx-auto">
      <X
        className="absolute right-2 top-2 sm:right-4 sm:top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
        onClick={closeModal}
      />
      <h2 className="text-[20px] sm:text-[38px] font-bold mb-2.5 mt-2 sm:mt-0">
        {TEXTS.participateTenderLot.title}
      </h2>
      <p className="text-[#001D23] text-[12px] font-semibold mb-4 sm:mb-6">
        {TEXTS.participateTenderLot.categoryName}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 sm:gap-x-10 sm:gap-y-5 mb-2 sm:mb-0">
        <div className="flex flex-col gap-1">
          <p className="text-[#64748B] text-[12px]">
            {TEXTS.participateTenderLot.supplyDeadline}
          </p>
          <span className="text-[14px] text-[#191D23]">
            {TEXTS.participateTenderLot.supplyDeadlineValue}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#64748B] text-[12px]">
            {TEXTS.participateTenderLot.auctionDays}
          </p>
          <span className="text-[14px] text-[#191D23]">
            {TEXTS.participateTenderLot.auctionDaysValue}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#64748B] text-[12px]">
            {TEXTS.participateTenderLot.lot}
          </p>
          <span className="text-[14px] text-[#191D23]">
            {TEXTS.participateTenderLot.lotValue}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#64748B] text-[12px]">
            {TEXTS.participateTenderLot.region}
          </p>
          <span className="text-[14px] text-[#191D23]">
            {TEXTS.participateTenderLot.regionValue}
          </span>
        </div>
        <div className="w-fit h-[36px] bg-[#EFF0F6] rounded-md flex items-center gap-1.5 px-1.5 text-[#14142B] text-[14px] col-span-1 sm:col-span-2">
          <Time />
          <span>{TEXTS.participateTenderLot.timeLeft}</span>
          <span className=" text-[15px] font-semibold">
            {TEXTS.participateTenderLot.timeLeftValue}
          </span>
        </div>
      </div>
      <div className="bg-[#dee6f094] h-[1px] w-full mt-4 sm:mt-5" />
      <p className="text-[13px] sm:text-[13.5px] text-[#4E4B66] mt-2 sm:mt-3">
        {TEXTS.participateTenderLot.description}
      </p>

      <form
        className="w-full flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-6 border border-[#A0A3BD] rounded-md p-2 sm:p-3.5 py-4 sm:py-[22px] mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="file_names"
          control={control}
          render={({ field }) => (
            <MultipleFileUpload
              classname="w-full max-w-full sm:max-w-[148px] px-2"
              name={field.name}
              control={control}
            />
          )}
        />
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-2 sm:gap-1 w-full sm:w-auto">
          <Input
            className="w-full sm:max-w-[300px] max-h-[48px]"
            placeholder={TEXTS.participateTenderLot.startingPrice}
            error={errors.price?.message}
            {...register("price", {
              required: {
                message: TEXTS.validation.required.price,
                value: true,
              },
            })}
          />
          <Button
            type="submit"
            className="w-full sm:max-w-[150px] max-h-[48px] !rounded-full mt-2 sm:mt-0"
          >
            {TEXTS.participateTenderLot.participate}
          </Button>
        </div>
      </form>
    </div>
  );
};

export { ParticipateTenderLotModal };
