import { TextInput, Icon } from "../../ui";
import type { IconTextInputProps } from "./IconTextInput.types";
import { iconTextInputStyles } from "./IconTextInput.styles";

export function IconTextInput({ color, icon, ...props }: IconTextInputProps) {
  return (
    <label className={iconTextInputStyles({ color })}>
      <Icon icon={icon} />
      <TextInput
        color={color}
        {...props}
      />
    </label>
  );
}
