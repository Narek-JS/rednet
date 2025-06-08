"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input, Button } from "@/components/UI";
import { Checkbox } from "@/components/UI/Chechbox";
import { Upload, Eye, FileText as File } from "lucide-react";

interface TenderData {
  name: string;
  startPrice: number;
  days: number;
  deliveryTime: number;
  isReaded: boolean;
}

interface FormData {
  tenders: TenderData[];
}

const tenderSchema: yup.ObjectSchema<TenderData> = yup.object({
  name: yup.string().required("Անվանումը պարտադիր է"),
  startPrice: yup.number().required("Ստարտ գինը պարտադիր է"),
  days: yup.number().required("Օրերի քանակը պարտադիր է"),
  deliveryTime: yup.number().required("Մատակարարման ժամկետը պարտադիր է"),
  isReaded: yup.boolean().required("Համաձայնությունը պարտադիր է").oneOf([true], "Համաձայնությունը պարտադիր է"),
});

const schema: yup.ObjectSchema<FormData> = yup.object({
  tenders: yup.array().of(tenderSchema).required("Առնվազն մեկ չափաբաժին պարտադիր է"),
});

export default function Step2() {
  const router = useRouter();
  const tenderRef = useRef<HTMLInputElement>(null);
  const [tenderImages, setTenderImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const form = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      tenders: [{ name: "", startPrice: 0, days: 0, deliveryTime: 0, isReaded: false }]
    },
  });

  const { control, handleSubmit, register, formState: { errors } } = form;

  const { fields, append } = useFieldArray({
    control,
    name: "tenders"
  });

  const onSubmit = (data: FormData) => {
    console.log("Step2 data:", data);
    router.push("/tender?step=3");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setTenderImages((prev) => [...prev, file.name]);
  };

  return (
    <div className="bg-white p-10 rounded-[24px] shadow-md">
      {fields.length > 1 && (
        <div className="flex flex-col gap-4 pb-8">
          {fields.map((_, index) => (
            index === activeIndex ? null : (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="cursor-pointer bg-[#EFF0F6] px-4 py-2 flex items-center justify-between"
              >
                <p className="font-bold text-[18px]">Չափաբաժնի անվանումը</p>
                <div className="flex gap-3 items-center text-[18px] text-[#F35D74] font-semibold">
                  <Eye />
                  Տեսնել
                </div>
              </div>
            )
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <input type="file" ref={tenderRef} onChange={handleImageChange} className="hidden" />

        <div>
          <p className="mb-2">
            Կցել լուսանկարներ, այլ տեսակի փաստաթղթեր կամ <br /> ֆայլեր
          </p>
          <div className="flex flex-col gap-1">
            {tenderImages.map((img, i) => (
              <p key={i} className="text-[#1890FF] text-sm flex gap-1 items-center">
                <File />
                {img}
              </p>
            ))}
            <div
              className="cursor-pointer w-[148px] h-[32px] border border-[#D9D9D9] flex gap-2 items-center justify-center"
              onClick={() => tenderRef.current?.click()}
            >
              <Upload />
              <p className="text-body font-normal">Upload photo</p>
            </div>
          </div>
        </div>

        {fields.map((field, index) =>
          index === activeIndex ? (
            <div key={field.id} className="flex flex-col gap-6">
              <Input
                label="Չափաբաժնի անվանումը *"
                {...register(`tenders.${index}.name` as const)}
                error={errors.tenders?.[index]?.name?.message}
              />
              <Input
                label="Ստարտ գինը *"
                type="number"
                {...register(`tenders.${index}.startPrice` as const)}
                error={errors.tenders?.[index]?.startPrice?.message}
              />
              <Input
                label="Գրանցվելու օրերի քանակը *"
                type="number"
                {...register(`tenders.${index}.days` as const)}
                error={errors.tenders?.[index]?.days?.message}
              />
              <Input
                label="Մատակարարման վերջնաժամկետը *"
                type="number"
                {...register(`tenders.${index}.deliveryTime` as const)}
                error={errors.tenders?.[index]?.deliveryTime?.message}
              />

              <div className="flex items-start gap-3">
                <Controller
                  control={control}
                  name={`tenders.${index}.isReaded` as const}
                  render={({ field: { value, onChange, ref, ...rest } }) => (
                    <Checkbox
                      checked={!!value}
                      onChange={(e) => onChange((e.target as HTMLInputElement).checked)}
                      ref={ref}
                      className="mt-1"
                      {...rest}
                    />
                  )}
                />
                <span className="text-xs text-gray-700">
                  Սույնով հաստատում եմ, որ տրամադրված ամբողջ տեղեկատվությունը համապատասխանում է իրականությանը...
                </span>
              </div>
              {errors.tenders?.[index]?.isReaded && (
                <p className="text-[#C30052] text-sm font-semibold">
                  {errors.tenders?.[index]?.isReaded?.message}
                </p>
              )}
            </div>
          ) : null
        )}

        <Button
          variant="outline"
          type="button"
          className="bg-white h-[62px] px-10 font-semibold text-[18px] text-primary-main border-primary-main"
          onClick={() => {
            append({
              name: "",
              startPrice: 0,
              days: 0,
              deliveryTime: 0,
              isReaded: false
            });
            setActiveIndex(fields.length);
          }}
        >
          Ավելացնել չափաբաժին
        </Button>

        <Button className="w-full h-[72px] font-semibold text-[18px]" type="submit">
          Շարունակել
        </Button>
      </form>
    </div>
  );
}
