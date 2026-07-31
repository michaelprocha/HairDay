import userSquareIcon from "../../../assets/icons/userSquare.svg?react";
import { DateInput } from "../../ui/DateInput";
import { IconTextInput } from "../IconTextInput";
import { Schedule } from "../Schedule";
import { formStyles } from "./Form.styles";
import type { FormProps } from "./Form.types";
import { useRef, useState } from "react";

export function Form({ schedule, ...props }: FormProps) {
  const inputDateRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState<string>(
    new Date().toLocaleDateString(navigator.language),
  );

  const { form, dateText, inputTextText } = formStyles();

  const HandleOpenCalendar = () => {
    if (inputDateRef.current !== null) {
      try {
        inputDateRef.current.showPicker();
      } catch (error) {}
    }
  };

  const HandleChangeDate = () => {
    if (inputDateRef.current !== null) {
      if (inputDateRef.current.value === "") {
        setInputValue(new Date().toLocaleDateString(navigator.language));
      } else {
        const newDate = new Date(
          inputDateRef.current.value + "T00:00:00",
        ).toLocaleDateString(navigator.language);
        setInputValue(newDate);
      }
    }
  };
  return (
    <form
      className={form()}
      {...props}
    >
      <div>
        <p className={dateText()}>Data</p>
        <DateInput
          ref={inputDateRef}
          dateValue={inputValue}
          HandleChangeDate={HandleChangeDate}
          HandleOpenCalendar={HandleOpenCalendar}
        />
      </div>
      <div>
        <Schedule schedule={schedule} />
      </div>
      <div>
        <p className={inputTextText()}>Cliente</p>
        <IconTextInput icon={userSquareIcon} />
      </div>
    </form>
  );
}
