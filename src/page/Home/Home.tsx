import { homeStyles } from "./Home.style";
import { Aside, Main } from "../../components/layout";
import logoSvg from "../../assets/icons/Logo.svg";

export function Home() {
  const { page, logo } = homeStyles();
  return (
    <div className={page()}>
      <div className={logo()}>
        <img src={logoSvg} />
      </div>
      <Aside />
      <Main />
    </div>
  );
}
