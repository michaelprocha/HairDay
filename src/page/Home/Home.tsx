import { homeStyles } from "./Home.style";
import { Aside, Main } from "../../components/layout";
import logoSvg from "../../assets/icons/Logo.svg";

export function Home() {
  const { page, logo } = homeStyles();

  const appoitments = [
    { id: "1a2b3c4d5e", name: "teste", date: "2026-07-16T18:00:00" },
  ];

  return (
    <div className={page()}>
      <div className={logo()}>
        <img src={logoSvg} />
      </div>
      <Aside schedule={appoitments} />
      <Main />
    </div>
  );
}
