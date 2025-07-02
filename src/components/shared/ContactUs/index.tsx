"use client";

import { Select, SelectItem } from "@/components/UI/Select";
import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/UI/Button";
import { Input } from "@/components/UI/Input";

const countryCodes = [
  { code: "AM", value: "+374" },
  { code: "US", value: "+1" },
  { code: "AU", value: "+61" },
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  agree: boolean;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

const ContactUs: React.FC = () => {
  const [country, setCountry] = useState(countryCodes[0].code);
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });
  const [errors, setErrors] = useState<ErrorState>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    let fieldValue: string | boolean = value;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      fieldValue = e.target.checked;
    }
    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    // Simulate backend validation
    // If error: setErrors({ email: "Invalid email" })
    // Else:
    console.log({ ...form, country });
  };

  return (
    <div className="flex flex-col w-full max-w-xl">
      <h2 className="text-4xl font-bold mb-4">Contact us</h2>
      <p className="text-lg text-[#6B7280] mb-8">
        Our friendly team would love to hear from you.
      </p>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            label="First name *"
            name="firstName"
            placeholder="First name"
            value={form.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <Input
            label="Last name *"
            name="lastName"
            placeholder="Last name"
            value={form.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>
        <Input
          label="Email *"
          name="email"
          placeholder="you@company.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          type="email"
        />
        <div>
          <label className="text-[#14142B] font-semibold text-[14px] text-left mb-2 block">
            Phone number
          </label>
          <div className="flex gap-2">
            <div className="w-28">
              <Select
                value={country}
                onValueChange={setCountry}
                placeholder="Code"
              >
                {countryCodes.map((c) => (
                  <SelectItem key={c.code} value={c.code}>
                    {c.code}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <Input
              name="phone"
              placeholder={
                countryCodes.find((c) => c.code === country)?.value || "+"
              }
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
              type="tel"
              className="flex-1"
            />
          </div>
        </div>
        <div>
          <label className="text-[#14142B] font-semibold text-[14px] text-left mb-2 block">
            Message *
          </label>
          <textarea
            name="message"
            placeholder="Leave us a message..."
            value={form.message}
            onChange={handleChange}
            className="w-full min-h-[100px] max-h-[200px] rounded-[12px] sm:rounded-[16px] border-none outline-none bg-[#EFF0F6] px-3 py-2 resize-y text-base"
          />
          {errors.message && (
            <p className="text-[#C30052] text-sm font-semibold mt-1">
              {errors.message}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="w-4 h-4 rounded border border-[#D1D5DB]"
            id="privacy-policy"
          />
          <label htmlFor="privacy-policy" className="text-sm text-[#6B7280]">
            You agree to our friendly{" "}
            <a href="#" className="underline">
              privacy policy
            </a>
            .
          </label>
        </div>
        <Button
          type="submit"
          variant="primery"
          className="mt-2 text-lg font-semibold"
        >
          Send message
        </Button>
      </form>
    </div>
  );
};

export { ContactUs };
