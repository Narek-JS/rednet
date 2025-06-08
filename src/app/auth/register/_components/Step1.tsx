/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { setClientCookie } from "@/utils/cookies/client";
import { useRegisterMutation } from "@/store/auth/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterRequest } from "@/store/auth/types";
import { setErrorsFields } from "@/utils/formErrors";
import { Button, Input } from "@/components/UI";
import { StorageEnum } from "@/types/storage";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IError } from "@/types/general";
import Link from "next/link";
import * as yup from "yup";

const schema = yup.object({
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
  const [registerMutation] = useRegisterMutation();

  const form = useForm<RegisterRequest>({
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;

  const onSubmit = async (data: RegisterRequest) => {
    const res = await registerMutation(data);

    if (res.data && "data" in res.data) {
      const accessToken = res.data.data.access_token;
      const user = res.data.data.state.user;

      setClientCookie(StorageEnum.ACCESS_TOKEN, accessToken);
      if (user) setClientCookie(StorageEnum.USER, JSON.stringify(user));

      return router.push("/auth/register?step=2");
    }

    if (res.error) {
      const errors = (res.error as any)?.data;

      if (errors) {
        setErrorsFields(form, errors as IError);
      } else {
        console.log("Unexpected error --> ", res);
      }
    }
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
            error={formState.errors.first_name?.message}
            {...register("first_name")}
          />

          <Input
            label="Ձեր ազգանունը"
            placeholder="Doe"
            error={formState.errors.last_name?.message}
            {...register("last_name")}
          />
        </div>

        <Input
          label="Ձեր էլ. փոստը"
          placeholder="name@email.com"
          error={formState.errors.email?.message}
          {...register("email")}
        />

        <div className="flex gap-2.5">
          <Input
            label="Ձեր գաղտնաբառը"
            placeholder="********"
            type="password"
            error={formState.errors.password?.message}
            {...register("password")}
          />

          <Input
            label="Կրկնեք գաղտնաբառը"
            placeholder="********"
            type="password"
            error={formState.errors.password_confirmation?.message}
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
