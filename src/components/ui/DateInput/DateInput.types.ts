import type { VariantProps } from "tailwind-variants";
import { type ComponentProps, type Ref } from "react";
import { dateInputStyles } from "./DateInput.styles";

type DateInputProps = Omit<
  ComponentProps<"input">,
  keyof VariantProps<typeof dateInputStyles>
> &
  VariantProps<typeof dateInputStyles> & {
    ref?: Ref<HTMLInputElement>;
    HandleChangeDate: () => void;
    HandleOpenCalendar: () => void;
    dateValue: string;
  };

export { type DateInputProps };
