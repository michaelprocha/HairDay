import type { ComponentProps, Ref } from "react";
import type { VariantProps } from "tailwind-variants";
import type { asideStyles } from "./Aside.styles";

type AsideProps = Omit<
  ComponentProps<"aside">,
  keyof VariantProps<typeof asideStyles>
> &
  VariantProps<typeof asideStyles> & {
    inputDateRef: Ref<HTMLInputElement>;
    dateValue: string;
    HandleChangeDate: () => void;
    HandleOpenCalendar: () => void;
  };

export { type AsideProps };
