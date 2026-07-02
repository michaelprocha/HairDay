import { asideStyles } from "./Aside.styles";

export function Aside() {
  const { aside } = asideStyles();
  return <aside className={aside()}></aside>;
}
