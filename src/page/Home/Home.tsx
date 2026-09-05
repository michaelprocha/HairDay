import { homeStyles } from "./Home.style";
import { Aside, Main } from "../../components/layout";
import logoSvg from "../../assets/icons/Logo.svg";
import { useAppoitment } from "../../hooks/useAppointment";

export function Home() {
  const { listAppointment, sendAppointment, deleteAnAppointment, error } =
    useAppoitment();
  const { page, logo, errorStyle } = homeStyles();

  return (
    <div className={page()}>
      <div className={logo()}>
        <img src={logoSvg} />
      </div>
      {error.status && <div className={errorStyle()}>{error.message}</div>}
      <Aside
        schedule={listAppointment}
        sendForm={sendAppointment}
      />
      <Main
        schedule={listAppointment}
        deleteApp={deleteAnAppointment}
      />
    </div>
  );
}
