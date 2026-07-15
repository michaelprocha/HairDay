import { buttonStyles } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export function Button({
  children,
  color,
  size,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({ color, size, disabled })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
