import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import type { asideStyles } from "./Aside.styles";
import type { Appointment } from "../../../types/appointment.types";

type AsideProps = Omit<
  ComponentProps<"aside">,
  keyof VariantProps<typeof asideStyles>
> &
  VariantProps<typeof asideStyles> & {
    schedule: Array<Appointment>;
  };

export { type AsideProps };
