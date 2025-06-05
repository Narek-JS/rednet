/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IError {
  errors: Record<string, Array<string>>;
  message: string;
}
