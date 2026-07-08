import type { ComponentProps, FC } from "react";
import type { VariantProps } from "tailwind-variants";
import type { iconStyles } from "./Icon.styles";

type IconProps = Omit<
  ComponentProps<"svg">,
  keyof VariantProps<typeof iconStyles>
> &
  VariantProps<typeof iconStyles> & {
    icon: FC<ComponentProps<"svg">>;
  };

export { type IconProps };
