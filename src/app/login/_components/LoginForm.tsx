"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodType, ZodTypeDef } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
} from "@/components/UI";
import { Input } from "@/components/ui/input";
// import StorageEnum from "@/lib/enums/storage.enum";
import { login } from "@/lib/services/auth/auth.service";
import { setCookie } from "@/lib/services/cookies-service/cookies.service";
import { setErrorsFields } from "@/lib/utils";
import { ILoginForm } from "@/types/form";
import { MissingFieldsEnum } from "@/types/missingFields";

const LoginSchema: ZodType<ILoginForm, ZodTypeDef, ILoginForm> = z.object({
  email: z.string().email({
    message: "Էլ. փոստը սխալ է",
  }),
  password: z
    .string()
    .min(6, { message: " Գաղտնաբառը կարճ է" })
    .max(20, { message: "Password is too long" }),
});

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

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
    // const res = await login(data);
    // if (res.status === "SUCCESS") {
    //   const accessToken = res.result.access_token;
    //   // const user = res.result.state.user
    //   // const profile = res.result.state.profile
    //   const isActivated = res.result.state.user?.is_activated;
    //   await setCookie(StorageEnum.ACCESS_TOKEN, accessToken);
    //   // TODO set user and profile
    //   if (!isActivated) {
    //     router.push("/register?step=2");
    //     return;
    //   }
    //   const missingFields = res.result.state.missing_fields;
    //   if (missingFields.length) {
    //     missingFields.forEach(handleNavigateByMissingFields);
    //     return;
    //   }
    //   router.push("/");
    // } else {
    //   setErrorsFields(form, res.error);
    // }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 flex-wrap gap-y-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Ձեր էլ. փոստը</FormLabel>
              <FormControl>
                <Input placeholder="name@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex flex-col gap-2 items-end">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Ձեր գաղտնաբառը</FormLabel>
                <FormControl>
                  <Input placeholder="********" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link
            href={"/forgot-password"}
            className="text-primary-main text-[14px]"
          >
            Վերականգնել գաղտնաբառը
          </Link>
        </div>

        <Button
          className="w-full h-[72px] font-semibold text-[18px]"
          type="submit"
        >
          Մուտք
        </Button>
      </form>
    </Form>
  );
};
