import type { Time } from "./time.types";

interface Appointment {
  id: string;
  name: string;
  date: string;
}

type AppointmentDateTime = {
  id: string;
  name: string;
  date: string;
  time: Time;
};

export type { Appointment, AppointmentDateTime };
