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
  const { labelDate, iconDate, inputDate } = dateInputStyles();

  return (
    <label
      onClick={HandleOpenCalendar}
      htmlFor="date"
      className={labelDate({ color })}
    >
      <Icon
        icon={calendarBlanckIcon}
        className={iconDate({ color })}
      />
      <input
        className={inputDate({ color, text })}
        type="date"
        id="date"
        ref={ref}
        onChange={HandleChangeDate}
        {...props}
      />
      <span className="cursor-pointer text-md text-gray-200 pb-0.5">
        {dateValue}
      </span>
      <Icon
        icon={careDownIcon}
        className="text-gray-300 size-4"
      />
    </label>
  );
}
