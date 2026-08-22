import type { ChangeEvent, ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import type { scheduleStyles } from "./Schedule.styles";
import type { Appointment } from "../../../types/appointment.types";

type ScheduleProps = Omit<
  ComponentProps<"div">,
  keyof VariantProps<typeof scheduleStyles>
> &
  VariantProps<typeof scheduleStyles> & {
    schedule: Array<Appointment>;
    time: string;
    onChange: (e: ChangeEvent) => void;
  };

export type { ScheduleProps };
