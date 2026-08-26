import { useEffect, useState } from "react";
import {
  postAppointment,
  getSchedule,
  deleteAppointment,
} from "../services/schedule/schedule.services";
import type { AppointmentDateTime } from "../types/appointment.types";
import type { Time } from "../types/time.types";

export function useAppoitment() {
  const [listAppointment, setListAppointment] = useState<
    Array<AppointmentDateTime>
  >([]);

  useEffect(() => {
    async function getAppointments() {
      const appointments = await getSchedule();
      setListAppointment(
        appointments.map((app) => {
          const dataTime = app.date.split("T");
          const fullTime = dataTime[1].split(":");
          const time = `${fullTime[0]}:${fullTime[1]}` as Time;
          return { ...app, time };
        }),
      );
    }
    getAppointments();
  }, []);

  const sendAppointment = async (
    name: string,
    dateNoFormate: string,
    time: string,
  ) => {
    console.log(time);
    const [month, day, year] = dateNoFormate.split("/");
    const date = `${year}-${month}-${day}:T${time}:00`;
    const appointment = await postAppointment({ name, date });
    setListAppointment([
      ...listAppointment,
      { id: appointment.id, name, date, time: time as Time },
    ]);
  };

  const deleteAnAppointment = async (id: string) => {
    await deleteAppointment(id);
    setListAppointment(listAppointment.filter((app) => app.id !== id));
  };

  return {
    sendAppointment,
    listAppointment,
    deleteAnAppointment,
  };
}
