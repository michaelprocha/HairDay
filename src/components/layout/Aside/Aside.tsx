import { Form } from "../../shared";
import { asideStyles } from "./Aside.styles";
import type { AsideProps } from "./Aside.types";

export function Aside({ schedule, sendForm, ...props }: AsideProps) {
  const { aside, title, paragraph, textArea } = asideStyles();
  return (
    <aside
      className={aside()}
      {...props}
    >
      <div className={textArea()}>
        <h2 className={title()}>Agende um atendimento</h2>
        <p className={paragraph()}>
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </p>
      </div>
      <Form
        schedule={schedule}
        sendForm={sendForm}
      />
    </aside>
  );
}
