import { homeStyles } from "./Home.style";
import { Aside, Main } from "../../components/layout";
import logoSvg from "../../assets/icons/Logo.svg";
import { useAppoitment } from "../../hooks/useAppointment";

export function Home() {
  const { listAppointment, sendAppointment, deleteAnAppointment } =
    useAppoitment();
  const { page, logo } = homeStyles();

  return (
    <div className={page()}>
      <div className={logo()}>
        <img src={logoSvg} />
      </div>
      <Aside
        schedule={listAppointment}
        sendForm={sendAppointment}
      />
      <Main />
    </div>
  );
}
