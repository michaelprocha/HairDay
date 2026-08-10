import { Shift } from "../Shift/Shift";

export function Shifts() {
  return (
    <>
      <Shift
        appointments={[
          { id: "1234", name: "michael", date: "10:00" },
          { id: "12345", name: "carlos", date: "11:00" },
        ]}
        timeOfDay="morning"
      />
      <Shift
        appointments={[
          { id: "1234", name: "michael", date: "10:00" },
          { id: "12345", name: "carlos", date: "11:00" },
        ]}
        timeOfDay="afternoon"
      />
      <Shift
        appointments={[
          { id: "1234", name: "michael", date: "10:00" },
          { id: "12345", name: "carlos", date: "11:00" },
        ]}
        timeOfDay="evening"
      />
    </>
  );
}
