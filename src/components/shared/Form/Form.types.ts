import type { ComponentProps, Ref } from "react";
import { type VariantProps } from "tailwind-variants";
import type { formStyles } from "./Form.styles";

type FormProps = Omit<
  ComponentProps<"form">,
  keyof VariantProps<typeof formStyles>
> &
  VariantProps<typeof formStyles> & {
    inputDateRef: Ref<HTMLInputElement>;
    dateValue: string;
    HandleChangeDate: () => void;
    HandleOpenCalendar: () => void;
  };

export { type FormProps };
