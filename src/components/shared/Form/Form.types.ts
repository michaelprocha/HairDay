import type { ComponentProps } from "react";
import { type VariantProps } from "tailwind-variants";
import type { formStyles } from "./Form.styles";
import type { AppointmentDateTime } from "../../../types/appointment.types";

type FormProps = Omit<
  ComponentProps<"form">,
  keyof VariantProps<typeof formStyles>
> &
  VariantProps<typeof formStyles> & {
    schedule: Array<AppointmentDateTime>;
    sendForm: (name: string, dateNoFormate: string, time: string) => void;
  };

export { type FormProps };
