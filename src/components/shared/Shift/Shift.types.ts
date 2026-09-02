import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import type { shiftStyles } from "./Shift.styles";
import type { AppointmentDateTime } from "../../../types/appointment.types";

type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

type ShiftProps = Omit<
  ComponentProps<"div">,
  keyof VariantProps<typeof shiftStyles>
> &
  VariantProps<typeof shiftStyles> & {
    appointments: Array<AppointmentDateTime>;
    timeOfDay: TimeOfDay;
    deleteApp: (id: string) => void;
  };

export { type ShiftProps };
