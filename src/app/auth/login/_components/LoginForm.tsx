"use client";

import { MissingFieldsEnum } from "@/types/missingFields";
import { yupResolver } from "@hookform/resolvers/yup";
import { IAuthData, ILoginForm } from "@/types/login";
import { setErrorsFields } from "@/utils/formErrors";
import { Button, Input } from "@/components/UI";
import { StorageEnum } from "@/types/storage";
import { ENDPOINTS_ENUM } from "@/constants";
import { setCookie } from "@/utils/cookies";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { api } from "@/utils/api";
import Link from "next/link";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Էլ. փոստը սխալ է")
    .required("Էլ. փոստը պարտադիր է"),
  password: yup
    .string()
    .min(6, "Գաղտնաբառը կարճ է")
    .max(20, "Password is too long")
    .required("Գաղտնաբառը պարտադիր է"),
});

export const LoginForm: React.FC = () => {
  const router = useRouter();

  const form = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const handleNavigateByMissingFields = (missingField: MissingFieldsEnum) => {
    switch (missingField) {
      case MissingFieldsEnum.ORGANIZATION_TYPE:
        router.push("/register?step=3");
        break;
      default:
        return;
    }
  };

  const onSubmit = async (data: ILoginForm) => {
    const response = await api.post<IAuthData>(ENDPOINTS_ENUM.AUTH_LOGIN, {
      body: JSON.stringify(data),
    });

    if (response.status === "SUCCESS") {
      const accessToken = response.result.access_token;

      const isActivated = response.result.state.user?.is_activated;
      await setCookie(StorageEnum.ACCESS_TOKEN, accessToken);

      if (!isActivated) {
        router.push("/register?step=2");
        return;
      }
      const missingFields = response.result.state.missing_fields;
      if (missingFields.length) {
        missingFields.forEach(handleNavigateByMissingFields);
        return;
      }
      router.push("/");
    } else {
      setErrorsFields(form, response.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      <Input
        label="Ձեր էլ. փոստը"
        placeholder="name@email.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        label="Ձեր գաղտնաբառը"
        placeholder="********"
        type="password"
        error={errors.password?.message}
        {...register("password")}
      />

      <Link
        href={"/forgot-password"}
        className="flex justify-end text-primary text-[14px] -mt-2"
      >
        Վերականգնել գաղտնաբառը
      </Link>

      <Button type="submit">Մուտք</Button>
    </form>
  );
};
