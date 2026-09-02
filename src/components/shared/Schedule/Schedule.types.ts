import type { ChangeEvent, ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import type { scheduleStyles } from "./Schedule.styles";
import type { AppointmentDateTime } from "../../../types/appointment.types";

type ScheduleProps = Omit<
  ComponentProps<"div">,
  keyof VariantProps<typeof scheduleStyles>
> &
  VariantProps<typeof scheduleStyles> & {
    schedule: Array<AppointmentDateTime>;
    time: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };

export type { ScheduleProps };
