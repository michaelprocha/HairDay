import { Shift } from "../Shift/Shift";
import type { ShiftsTypes } from "./Shifts.types";

export function Shifts({ schedule, deleteApp }: ShiftsTypes) {
  return (
    <>
      <Shift
        appointments={schedule.filter(
          (app) => app.time >= "09:00" && app.time <= "12:00",
        )}
        timeOfDay="morning"
        deleteApp={deleteApp}
      />
      <Shift
        appointments={schedule.filter(
          (app) => app.time >= "13:00" && app.time <= "18:00",
        )}
        timeOfDay="afternoon"
        deleteApp={deleteApp}
      />
      <Shift
        appointments={schedule.filter(
          (app) => app.time >= "19:00" && app.time <= "21:00",
        )}
        timeOfDay="evening"
        deleteApp={deleteApp}
      />
    </>
  );
}
