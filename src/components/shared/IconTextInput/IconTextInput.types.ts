import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import type { iconTextInputStyles } from "./IconTextInput.styles";
import type { FC } from "react";

type IconTextInputProps = Omit<
  ComponentProps<"input">,
  keyof VariantProps<typeof iconTextInputStyles>
> &
  VariantProps<typeof iconTextInputStyles> & {
    icon: FC<ComponentProps<"svg">>;
  };

export { type IconTextInputProps };
