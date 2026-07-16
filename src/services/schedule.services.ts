import { URL, paths } from "./api";
import type { Appointment } from "../types/appointment.types";

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

export { getSchedule };
