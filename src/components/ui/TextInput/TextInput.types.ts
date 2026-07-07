import type { ComponentProps } from "react";
import { textInputStyles } from "./TextInput.styles";
import { type VariantProps } from "tailwind-variants";

type TextInputProps = Omit<
  ComponentProps<"input">,
  keyof VariantProps<typeof textInputStyles>
> &
  VariantProps<typeof textInputStyles>;

export { type TextInputProps };
