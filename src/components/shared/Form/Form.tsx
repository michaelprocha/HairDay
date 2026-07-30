import userSquareIcon from "../../../assets/icons/userSquare.svg?react";
import { DateInput } from "../../ui/DateInput";
import { IconTextInput } from "../IconTextInput";
import { Schedule } from "../Schedule";
import { formStyles } from "./Form.styles";
import type { FormProps } from "./Form.types";

export function Form({
  inputDateRef,
  dateValue,
  HandleChangeDate,
  HandleOpenCalendar,
  ...props
}: FormProps) {
  const { form, dateText, inputTextText } = formStyles();
  return (
    <form
      className={form()}
      {...props}
    >
      <div>
        <p className={dateText()}>Data</p>
        <DateInput
          ref={inputDateRef}
          dateValue={dateValue}
          HandleChangeDate={HandleChangeDate}
          HandleOpenCalendar={HandleOpenCalendar}
        />
      </div>
      <div>
        <Schedule />
      </div>
      <div>
        <p className={inputTextText()}>Cliente</p>
        <IconTextInput icon={userSquareIcon} />
      </div>
    </form>
  );
}
