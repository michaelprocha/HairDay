import { textInputStyles } from "./TextInput.styles";
import type { TextInputProps } from "./TextInput.types";

export function TextInput({
  placeholder,
  color,
  text,
  spacing,
  outline,
  ...props
}: TextInputProps) {
  return (
    <input
      className={textInputStyles({ color, text, spacing, outline })}
      type="text"
      placeholder={placeholder}
      {...props}
    />
  );
}
