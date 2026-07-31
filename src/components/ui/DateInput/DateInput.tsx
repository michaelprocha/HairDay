import { Icon } from "../Icon";
import type { DateInputProps } from "./DateInput.types";
import { dateInputStyles } from "./DateInput.styles";
import careDownIcon from "../../../assets/icons/caretDown.svg?react";
import calendarBlanckIcon from "../../../assets/icons/calendarBlanck.svg?react";

export function DateInput({
  ref,
  HandleOpenCalendar,
  HandleChangeDate,
  dateValue,
  color,
  text,
  ...props
}: DateInputProps) {
  const { labelDate, inputDate, spanText } = dateInputStyles();

  return (
    <label
      onClick={HandleOpenCalendar}
      htmlFor="date"
      className={labelDate({ color })}
    >
      <Icon icon={calendarBlanckIcon} />
      <input
        className={inputDate({ color, text })}
        type="date"
        id="date"
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
