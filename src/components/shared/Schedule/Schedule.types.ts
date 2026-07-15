import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import type { scheduleStyles } from "./Schedule.styles";

type ScheduleProps = Omit<
  ComponentProps<"div">,
  keyof VariantProps<typeof scheduleStyles>
> &
  VariantProps<typeof scheduleStyles>;

export type { ScheduleProps };
