import { useEffect, useState } from "react";
import {
  postAppointment,
  getSchedule,
  deleteAppointment,
} from "../services/schedule/schedule.services";
import type { Appointment } from "../types/appointment.types";

export function useAppoitment() {
  const [listAppointment, setListAppointment] = useState<Array<Appointment>>(
    [],
  );

  useEffect(() => {
    async function getAppointments() {
      const appointments = await getSchedule();
      setListAppointment(appointments);
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
    setListAppointment([...listAppointment, appointment]);
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
