import { Icon } from "../Icon";
import type { DateInputProps } from "./DateInput.types";
import { dateInputStyles } from "./DateInput.styles";
import careDownIcon from "../../../assets/icons/caretDown.svg?react";
import calendarBlanckIcon from "../../../assets/icons/calendarBlanck.svg?react";
import { useId } from "react";

export function DateInput({
  ref,
  HandleOpenCalendar,
  HandleChangeDate,
  dateValue,
  color,
  text,
  ...props
}: DateInputProps) {
  const inputId = useId();
  const { labelDate, inputDate, spanText } = dateInputStyles();

  return (
    <label
      onClick={HandleOpenCalendar}
      htmlFor={inputId}
      className={labelDate({ color })}
    >
      <Icon icon={calendarBlanckIcon} />
      <input
        className={inputDate({ color, text })}
        type="date"
        id={inputId}
        ref={ref}
        onChange={HandleChangeDate}
        {...props}
      />
      <span className={spanText()}>{dateValue}</span>
      <Icon
        icon={careDownIcon}
        color="secondary"
        size="sm"
      />
    </label>
  );
}
