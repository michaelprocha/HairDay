import { homeStyles } from "./Home.style";

export function Home() {
  const { page } = homeStyles();
  return <div className={page()}></div>;
}
