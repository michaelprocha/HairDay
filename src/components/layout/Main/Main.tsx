import { Shifts } from "../../shared";
import { DateInput } from "../../ui/DateInput";
import { mainStyles } from "./Main.styles";
import { useRef, useState } from "react";

export function Main({}) {
  const inputDateRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState<string>(
    new Date().toLocaleDateString(navigator.language),
  );

  const { mainStyle, headerStyle, paragraphStyle, h2Style, shiftsStyles } =
    mainStyles();

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
    <main className={mainStyle()}>
      <div className={headerStyle()}>
        <div>
          <h2 className={h2Style()}>Sua agenda</h2>
          <p className={paragraphStyle()}>
            Consulte os seus cortes de cabelo agendados por dia
          </p>
        </div>
        <DateInput
          dateValue={inputValue}
          HandleChangeDate={HandleChangeDate}
          HandleOpenCalendar={HandleOpenCalendar}
          ref={inputDateRef}
        />
      </div>
      <div className={shiftsStyles()}>
        <Shifts />
      </div>
    </main>
  );
}
