import { iconStyles } from "./Icon.styles";
import type { IconProps } from "./Icon.types";

export function Icon({
  icon: IconComponent,
  color,
  animete,
  ...props
}: IconProps) {
  return (
    <IconComponent
      className={iconStyles({ color, animete })}
      {...props}
    />
  );
}
