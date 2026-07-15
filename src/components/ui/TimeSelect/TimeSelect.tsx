import { type TimeSelectProps } from "./TimeSelect.types";
import { timeSelectStyles } from "./TimeSelect.styles";

export function TimeSelect({
  color,
  time,
  disabled,
  ...props
}: TimeSelectProps) {
  const { label, input } = timeSelectStyles();
  return (
    <label
      htmlFor={`time-${time}`}
      className={label({ color, disabled })}
    >
      {time}
      <input
        type="radio"
        id={`time-${time}`}
        value={time}
        className={input({ disabled })}
        disabled={disabled}
        {...props}
      />
    </label>
  );
}
