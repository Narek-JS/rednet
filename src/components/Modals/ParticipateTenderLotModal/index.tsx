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
    <div className="flex flex-col">
      <X
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer"
        onClick={closeModal}
      />
      <h2 className="text-[22px] sm:text-[38px] font-bold mb-2.5">
        {TEXTS.participateTenderLot.title}
      </h2>
      <p className="text-[#001D23] text-[12px] font-semibold mb-6">
        {TEXTS.participateTenderLot.categoryName}
      </p>

      <div className="grid grid-cols-2 gap-x-10 gap-y-5">
        <div className="flex flex-col gap-1">
          <p className="text-[#64748B] text-[12px]">
            {TEXTS.participateTenderLot.supplyDeadline}
          </p>
          <span className="text-[14px] text-[#191D23]">40 օր</span>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#64748B] text-[12px]">
            {TEXTS.participateTenderLot.auctionDays}
          </p>
          <span className="text-[14px] text-[#191D23]">3 օր</span>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#64748B] text-[12px]">
            {TEXTS.participateTenderLot.lot}
          </p>
          <span className="text-[14px] text-[#191D23]">30</span>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#64748B] text-[12px]">
            {TEXTS.participateTenderLot.region}
          </p>
          <span className="text-[14px] text-[#191D23]">Երևան</span>
        </div>
        <div className="w-fit h-[36px] bg-[#EFF0F6] rounded-md flex items-center gap-1.5 px-1.5 text-[#14142B] text-[14px]">
          <Time />
          <span>{TEXTS.participateTenderLot.timeLeft}</span>
          <span className=" text-[15px] font-semibold">
            {TEXTS.participateTenderLot.timeLeftValue}
          </span>
        </div>
      </div>
      <div className="bg-[#dee6f094] h-[1px] w-full mt-5" />
      <p className="text-[13.5px] text-[#4E4B66] mt-3">
        {TEXTS.participateTenderLot.description}
      </p>

      <form
        className="w-full flex justify-between items-center gap-3 border border-[#A0A3BD] rounded-md p-3.5 py-[22px] mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="file_names"
          control={control}
          render={({ field }) => (
            <MultipleFileUpload
              classname="max-w-[148px] px-2"
              name={field.name}
              control={control}
            />
          )}
        />
        <div className="flex items-center gap-1">
          <Input
            className="max-w-[300px] max-h-[48px]"
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
            className="max-h-[48px] max-w-[150px] !rounded-full"
          >
            {TEXTS.participateTenderLot.participate}
          </Button>
        </div>
      </form>
    </div>
  );
};

export { ParticipateTenderLotModal };
