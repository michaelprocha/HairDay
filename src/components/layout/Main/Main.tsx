import { mainStyles } from "./Main.styles";

export function Main() {
  const { main } = mainStyles();
  return <main className={main()}></main>;
}
