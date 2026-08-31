import { type AppointmentDateTime } from "../../../types/appointment.types";

type ShiftsTypes = {
  schedule: Array<AppointmentDateTime>;
  deleteApp: (id: string) => void;
};

export type { ShiftsTypes };
