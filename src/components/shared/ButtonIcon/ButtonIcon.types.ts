import type { ComponentProps, FC } from "react";
import type { VariantProps } from "tailwind-variants";
import type { buttonIconStyles } from "./ButtonIcon.styles";

type ButtonIconProps = Omit<
  ComponentProps<"button">,
  keyof VariantProps<typeof buttonIconStyles>
> &
  VariantProps<typeof buttonIconStyles> & {
    icon: FC<ComponentProps<"svg">>;
  };

export type { ButtonIconProps };
