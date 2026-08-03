import sunHrozonIcon from "../../../assets/icons/sunHorizon.svg?react";
import cloudSunIcon from "../../../assets/icons/cloudSun.svg?react";
import moonStarIcon from "../../../assets/icons/moonStar.svg?react";
import trashIcon from "../../../assets/icons/trash.svg?react";
import { Icon } from "../../ui";
import { ButtonIcon } from "../ButtonIcon";
import type { ShiftProps } from "./Shift.types";
import { shiftStyles } from "./Shift.styles";

export function Shift({ appointments, timeOfDay }: ShiftProps) {
  console.log(appointments);
  const {
    shiftStyle,
    headerStyle,
    headerParagraphStyle,
    listStyle,
    lineStyle,
    lineParagraphStyle,
  } = shiftStyles();
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
          {appointments.map((appointment) => (
            <li className={lineStyle()}>
              <p className={lineParagraphStyle()}>{appointment.date}</p>
              <p className={lineParagraphStyle({ class: "flex-1 text-md" })}>
                {appointment.name}
              </p>
              <ButtonIcon
                icon={trashIcon}
                size="sx"
              />
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (timeOfDay === "afternoon") {
    return (
      <div>
        <div>
          <Icon icon={cloudSunIcon} />
          <p>Tarde</p>
          <p>13h-18h</p>
        </div>
        <ol>
          <li>
            <p>13:00</p>
            <p>Michael Rocha</p>
            <ButtonIcon icon={trashIcon} />
          </li>
        </ol>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Icon icon={moonStarIcon} />
        <p>Noite</p>
        <p>19h-21h</p>
      </div>
      <ol>
        <li>
          <p>21:00</p>
          <p>Michael Rocha</p>
          <ButtonIcon icon={trashIcon} />
        </li>
      </ol>
    </div>
  );
}
