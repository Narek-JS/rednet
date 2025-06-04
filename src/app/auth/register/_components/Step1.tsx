"use client";

import { IAuthData, IRegisterForm } from "@/types/register";
import { setClientCookie } from "@/utils/cookies/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { setErrorsFields } from "@/utils/formErrors";
import { Button, Input } from "@/components/UI";
import { StorageEnum } from "@/types/storage";
import { ENDPOINTS_ENUM } from "@/constants";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { api } from "@/utils/api";
import Link from "next/link";
import * as yup from "yup";

const UserSchema = yup.object({
  password_confirmation: yup.string().required("Կրկնեք գաղտնաբառը պարտադիր է"),
  first_name: yup.string().required("Անունը պարտադիր է"),
  last_name: yup.string().required("Ազգանունը պարտադիր է"),
  password: yup.string().required("Գաղտնաբառը պարտադիր է"),
  email: yup
    .string()
    .email("Էլ. փոստը սխալ է")
    .required("Էլ. փոստը պարտադիր է"),
});

const Step1: React.FC = () => {
  const router = useRouter();
  const form = useForm<IRegisterForm>({
    resolver: yupResolver(UserSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: IRegisterForm) => {
    const res = await api.post<IAuthData>(ENDPOINTS_ENUM.AUTH_REGISTER, {
      body: JSON.stringify(data),
    });

    if (res.status === "SUCCESS") {
      const accessToken = res.result.access_token;
      const user = res.result.state.user;

      setClientCookie(StorageEnum.ACCESS_TOKEN, accessToken);
      if (user) setClientCookie(StorageEnum.USER, JSON.stringify(user));

      router.push("/auth/register?step=2");
      return;
    }

    setErrorsFields(form, res.error);
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-[32px] text-[#14142B] font-bold">Գրանցվել</h1>
        <p className="mt-1 flex items-center gap-2 text-[#14142B] font-semibold">
          Արդեն ունեք հաշիվ?{" "}
          <Link href="/auth/login" className="text-primary">
            Մուտք գործեք
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-2 flex-wrap gap-y-8"
      >
        <div className="flex gap-2.5">
          <Input
            label="Ձեր անունը"
            placeholder="John"
            error={errors.first_name?.message}
            {...register("first_name")}
          />

          <Input
            label="Ձեր ազգանունը"
            placeholder="Doe"
            error={errors.last_name?.message}
            {...register("last_name")}
          />
        </div>

        <Input
          label="Ձեր էլ. փոստը"
          placeholder="name@email.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <div className="flex gap-2.5">
          <Input
            label="Ձեր գաղտնաբառը"
            placeholder="********"
            type="password"
            error={errors.password?.message}
            {...register("password")}
          />

          <Input
            label="Կրկնեք գաղտնաբառը"
            placeholder="********"
            type="password"
            error={errors.password_confirmation?.message}
            {...register("password_confirmation")}
          />
        </div>

        <Button
          className="w-full h-[72px] font-semibold text-[18px]"
          type="submit"
        >
          Շարունակել
        </Button>
      </form>
    </>
  );
};

export { Step1 };
