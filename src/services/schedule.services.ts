import { URL, paths } from "./api";
import type { Appointment } from "../types/appointment.types";

const headers = new Headers();
headers.append("content-type", "application/json");

async function getSchedule(): Promise<Array<Appointment>> {
  try {
    const fetchSchedule = await fetch(`${URL}/${paths.schedule}`);

    if (fetchSchedule.ok) {
      const schedule = await fetchSchedule.json();
      return schedule;
    }

    throw new Error();
  } catch (error) {
    return [] as Array<Appointment>;
  }
}

async function postAppointment(
  newAppointment: Omit<Appointment, "id">,
): Promise<Appointment> {
  try {
    const postAppointment = await fetch(`${URL}/${paths.schedule}`, {
      method: "POST",
      body: JSON.stringify(newAppointment),
      headers: headers,
    });

    if (postAppointment.ok) {
      const appointment = await postAppointment.json();
      return appointment;
    }

    throw new Error();
  } catch (error) {
    return {} as Appointment;
  }
}

async function deleteAppointment(appointmentId: string): Promise<Appointment> {
  try {
    const deleteAppointment = await fetch(
      `${URL}/${paths.schedule}/${appointmentId}`,
      {
        method: "DELETE",
        headers: headers,
      },
    );

    if (deleteAppointment.ok) {
      const appointment = deleteAppointment.json();
      return appointment;
    }

    throw new Error();
  } catch (error) {
    return {} as Appointment;
  }
}

export { getSchedule, postAppointment, deleteAppointment };
