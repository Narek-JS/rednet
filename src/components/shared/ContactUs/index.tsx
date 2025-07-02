"use client";

import { Select, SelectItem } from "@/components/UI/Select";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox } from "@/components/UI/Chechbox";
import { Button } from "@/components/UI/Button";
import { Label } from "@/components/UI/Label";
import { Input } from "@/components/UI/Input";
import * as yup from "yup";

const countryCodes = [
  { code: "AM", value: "+374" },
  { code: "AU", value: "+61" },
  { code: "US", value: "+1" },
];

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  message: yup.string().required("Message is required"),
  phone: yup.string().required("Phone is required"),
  country: yup.string().required(),
  agree: yup
    .bool()
    .oneOf([true], "You must agree to the privacy policy")
    .required(),
});

type FormValues = {
  firstName: string;
  lastName: string;
  message: string;
  country: string;
  agree: boolean;
  email: string;
  phone: string;
};

const defaultValues = {
  country: countryCodes[0].code,
  firstName: "",
  lastName: "",
  agree: false,
  message: "",
  email: "",
  phone: "",
};

const ContactUs: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    watch,
  } = form;

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  const selectedCountry = watch("country");

  return (
    <div className="flex flex-col w-full lg:max-w-xl">
      <h2 className="text-4xl font-bold mb-4">Contact us</h2>
      <p className="text-lg text-[#6B7280] mb-8">
        Our friendly team would love to hear from you.
      </p>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            error={errors.firstName?.message}
            placeholder="First name"
            label="First name *"
            {...register("firstName")}
          />
          <Input
            error={errors.lastName?.message}
            placeholder="Last name"
            label="Last name *"
            {...register("lastName")}
          />
        </div>
        <Input
          error={errors.email?.message}
          placeholder="you@company.com"
          label="Email *"
          type="email"
          {...register("email")}
        />
        <div className="relative overflow-x-clip w-full flex flex-col gap-2.5">
          <Label className="text-[#14142B] font-semibold text-[14px] text-left">
            Phone number *
          </Label>
          <div className="flex">
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  className="!rounded-tr-none !rounded-br-none"
                  onValueChange={field.onChange}
                  parentClassname="!w-fit"
                  value={field.value}
                  placeholder="Code"
                >
                  {countryCodes.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      {c.code}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Input
              placeholder={
                countryCodes.find((c) => c.code === selectedCountry)?.value ||
                "+"
              }
              className="w-full !rounded-tl-none !rounded-bl-none"
              type="tel"
              {...register("phone")}
            />
          </div>
          {errors.phone && (
            <p className="absolute left-0 -bottom-[22px] text-[#C30052] whitespace-nowrap text-sm font-semibold">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="relative overflow-x-clip w-full flex flex-col gap-2.5">
          <Label className="text-[#14142B] font-semibold text-[14px] text-left">
            Message *
          </Label>
          <textarea
            className="w-full min-h-[100px] max-h-[200px] rounded-[12px] sm:rounded-[16px] border-none outline-none bg-[#EFF0F6] px-3 py-2 resize-y text-base"
            placeholder="Leave us a message..."
            {...register("message")}
          />
          {errors.message && (
            <p className="absolute left-0 -bottom-[22px] text-[#C30052] whitespace-nowrap text-sm font-semibold">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Controller
            control={control}
            name="agree"
            render={({ field }) => (
              <Checkbox
                onChange={field.onChange}
                checked={field.value}
                id="privacy-policy"
              />
            )}
          />
          <label htmlFor="privacy-policy" className="text-sm text-[#6B7280]">
            You agree to our friendly{" "}
            <a href="#" className="underline">
              privacy policy
            </a>
            .
          </label>
        </div>
        {errors.agree && (
          <p className="text-[#C30052] text-sm font-semibold -mt-4 mb-2">
            {errors.agree.message}
          </p>
        )}
        <Button
          className="mt-2 text-lg font-semibold"
          variant="primery"
          type="submit"
        >
          Send message
        </Button>
      </form>
    </div>
  );
};

export { ContactUs };
