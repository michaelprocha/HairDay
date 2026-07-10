import { Icon } from "../../ui/Icon";
import { buttonIconStyles } from "./ButtonIcon.styles";
import type { ButtonIconProps } from "./ButtonIcon.types";

export function ButtonIcon({
  icon,
  color,
  disabled,
  size,
  ...props
}: ButtonIconProps) {
  const { buttonStyles, iconStyles } = buttonIconStyles();
  return (
    <button
      className={buttonStyles({ disabled })}
      disabled={disabled}
      {...props}
    >
      <Icon
        className={iconStyles({ color, size })}
        icon={icon}
      />
    </button>
  );
}
