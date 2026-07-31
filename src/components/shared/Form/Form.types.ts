import type { ComponentProps } from "react";
import { type VariantProps } from "tailwind-variants";
import type { formStyles } from "./Form.styles";
import type { Appointment } from "../../../types/appointment.types";

type FormProps = Omit<
  ComponentProps<"form">,
  keyof VariantProps<typeof formStyles>
> &
  VariantProps<typeof formStyles> & {
    schedule: Array<Appointment>;
  };

export { type FormProps };
