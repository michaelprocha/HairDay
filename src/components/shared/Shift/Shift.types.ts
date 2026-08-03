import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import type { shiftStyles } from "./Shift.styles";
import type { Appointment } from "../../../types/appointment.types";

type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

type ShiftProps = Omit<
  ComponentProps<"div">,
  keyof VariantProps<typeof shiftStyles>
> &
  VariantProps<typeof shiftStyles> & {
    appointments: Array<Appointment>;
    timeOfDay: TimeOfDay;
  };

export { type ShiftProps };
