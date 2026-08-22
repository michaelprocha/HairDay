import { postAppointment } from "../services/schedule/schedule.services";

export function useForm() {
  const sendAppointment = async (
    name: string,
    dateNoFormate: string,
    time: string,
  ) => {
    console.log(time);
    const [month, day, year] = dateNoFormate.split("/");
    const date = `${year}-${month}-${day}:T${time}:00`;
    const appointment = await postAppointment({ name, date });
  };
  return { sendAppointment };
}
