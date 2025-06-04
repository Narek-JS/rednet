import { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
import { IError } from "../api";

const setErrorsFields = <F extends FieldValues>(
  form: UseFormReturn<F>,
  { errors }: IError
) => {
  Object.entries(errors).forEach(([key, value]) => {
    form.setError(key as FieldPath<F>, { message: value[0] });
  });
};

export { setErrorsFields };
