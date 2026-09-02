import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { mainStyles } from "./Main.styles";
import type { AppointmentDateTime } from "../../../types/appointment.types";

type MainTypes = Omit<
  ComponentProps<"main">,
  keyof VariantProps<typeof mainStyles>
> &
  VariantProps<typeof mainStyles> & {
    schedule: Array<AppointmentDateTime>;
    deleteApp: (id: string) => void;
  };

export type { MainTypes };
