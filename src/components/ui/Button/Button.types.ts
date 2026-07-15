import { type ComponentProps } from "react";
import { buttonStyles } from "./Button.styles";
import { type VariantProps } from "tailwind-variants";

type ButtonProps = Omit<
  ComponentProps<"button">,
  keyof VariantProps<typeof buttonStyles>
> &
  VariantProps<typeof buttonStyles>;

export { type ButtonProps };
