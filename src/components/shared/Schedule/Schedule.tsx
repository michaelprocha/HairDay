import { TimeSelect } from "../../ui";
import { scheduleStyles } from "./Schedule.styles";
import type { ScheduleProps } from "./Schedule.types";

export function Schedule({ color, typeText, size }: ScheduleProps) {
  const { period, periods, times, text, title } = scheduleStyles();
  return (
    <div className={periods({ size })}>
      <h2 className={title({ color, typeText })}>Horários</h2>
      <div className={period()}>
        <div>
          <p className={text({ color, typeText })}>Manhã</p>
        </div>
        <div className={times()}>
          <TimeSelect
            time="09:00"
            name="time"
          />
          <TimeSelect
            time="10:00"
            name="time"
          />
          <TimeSelect
            time="11:00"
            name="time"
          />
          <TimeSelect
            time="12:00"
            name="time"
          />
        </div>
      </div>
      <div className={period()}>
        <div>
          <p className={text({ color, typeText })}>Tarde</p>
        </div>
        <div className={times()}>
          <TimeSelect
            time="13:00"
            name="time"
          />
          <TimeSelect
            time="14:00"
            name="time"
          />
          <TimeSelect
            time="15:00"
            name="time"
          />
          <TimeSelect
            time="16:00"
            name="time"
          />
          <TimeSelect
            time="17:00"
            name="time"
          />
          <TimeSelect
            time="18:00"
            name="time"
          />
        </div>
      </div>
      <div className={period()}>
        <div>
          <p className={text({ color, typeText })}>Noite</p>
        </div>
        <div className={times()}>
          <TimeSelect
            time="19:00"
            name="time"
          />
          <TimeSelect
            time="20:00"
            name="time"
          />
          <TimeSelect
            time="21:00"
            name="time"
          />
        </div>
      </div>
    </div>
  );
}
