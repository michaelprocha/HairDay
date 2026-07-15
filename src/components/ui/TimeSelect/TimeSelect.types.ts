import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import type { timeSelectStyles } from "./TimeSelect.styles";
import type { Time } from "../../../types/time.types";

type TimeSelectProps = Omit<
  ComponentProps<"input">,
  keyof VariantProps<typeof timeSelectStyles>
> &
  VariantProps<typeof timeSelectStyles> & {
    time: Time;
  };

export type { TimeSelectProps };
