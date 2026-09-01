import sunHrozonIcon from "../../../assets/icons/sunHorizon.svg?react";
import cloudSunIcon from "../../../assets/icons/cloudSun.svg?react";
import moonStarIcon from "../../../assets/icons/moonStar.svg?react";
import trashIcon from "../../../assets/icons/trash.svg?react";
import { Icon } from "../../ui";
import { ButtonIcon } from "../ButtonIcon";
import type { ShiftProps } from "./Shift.types";
import { shiftStyles } from "./Shift.styles";

export function Shift({ appointments, timeOfDay, deleteApp }: ShiftProps) {
  const {
    shiftStyle,
    headerStyle,
    headerParagraphStyle,
    listStyle,
    lineStyle,
    lineParagraphStyle,
  } = shiftStyles();
  const handleDeleteAppointment = (idAppointment: string) => {
    deleteApp(idAppointment);
  };
  if (timeOfDay === "morning") {
    return (
      <div className={shiftStyle()}>
        <div className={headerStyle()}>
          <Icon icon={sunHrozonIcon} />
          <p
            className={headerParagraphStyle({ class: "flex-1 text-gray-300" })}
          >
            Manhã
          </p>
          <p className={headerParagraphStyle()}>09h-12h</p>
        </div>
        <ol className={listStyle()}>
          {appointments
            .toSorted((a, b) => a.time.localeCompare(b.time))
            .map((appointment) => (
              <li
                key={appointment.id}
                className={lineStyle()}
              >
                <p className={lineParagraphStyle({ class: "min-w-12" })}>
                  {appointment.time}
                </p>
                <p className={lineParagraphStyle({ class: "flex-1 text-md" })}>
                  {appointment.name}
                </p>
                <ButtonIcon
                  icon={trashIcon}
                  size="sx"
                  onClick={() => handleDeleteAppointment(appointment.id)}
                />
              </li>
            ))}
        </ol>
      </div>
    );
  }

  if (timeOfDay === "afternoon") {
    return (
      <div className={shiftStyle()}>
        <div className={headerStyle()}>
          <Icon icon={cloudSunIcon} />
          <p
            className={headerParagraphStyle({ class: "flex-1 text-gray-300" })}
          >
            Tarde
          </p>
          <p className={headerParagraphStyle()}>13h-18h</p>
        </div>
        <ol className={listStyle()}>
          {appointments
            .toSorted((a, b) => a.time.localeCompare(b.time))
            .map((appointment) => (
              <li className={lineStyle()}>
                <p className={lineParagraphStyle({ class: "min-w-12" })}>
                  {appointment.time}
                </p>
                <p className={lineParagraphStyle({ class: "flex-1 text-md" })}>
                  {appointment.name}
                </p>
                <ButtonIcon
                  icon={trashIcon}
                  size="sx"
                  onClick={() => handleDeleteAppointment(appointment.id)}
                />
              </li>
            ))}
        </ol>
      </div>
    );
  }

  return (
    <div className={shiftStyle()}>
      <div className={headerStyle()}>
        <Icon icon={moonStarIcon} />
        <p className={headerParagraphStyle({ class: "flex-1 text-gray-300" })}>
          Noite
        </p>
        <p className={headerParagraphStyle()}>19h-21h</p>
      </div>
      <ol className={listStyle()}>
        {appointments
          .toSorted((a, b) => a.time.localeCompare(b.time))
          .map((appointment) => (
            <li className={lineStyle()}>
              <p className={lineParagraphStyle({ class: "min-w-12" })}>
                {appointment.time}
              </p>
              <p className={lineParagraphStyle({ class: "flex-1 text-md" })}>
                {appointment.name}
              </p>
              <ButtonIcon
                icon={trashIcon}
                size="sx"
                onClick={() => handleDeleteAppointment(appointment.id)}
              />
            </li>
          ))}
      </ol>
    </div>
  );
}
