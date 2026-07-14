import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import type { timeSelectStyles } from "./TimeSelect.styles";

type Hour =
  | "00"
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23";
type DecimalMinutes = "0" | "1" | "2" | "3" | "4" | "5";
type UnitMinutes = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type Time = `${Hour}:${DecimalMinutes}${UnitMinutes}`;

type TimeSelectProps = Omit<
  ComponentProps<"input">,
  keyof VariantProps<typeof timeSelectStyles>
> &
  VariantProps<typeof timeSelectStyles> & {
    time: Time;
  };

export type { TimeSelectProps };
