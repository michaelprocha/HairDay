import { homeStyles } from "./Home.style";
import { Aside, Main } from "../../components/layout";

export function Home() {
  const { page } = homeStyles();
  return (
    <div className={page()}>
      <Aside />
      <Main />
    </div>
  );
}
