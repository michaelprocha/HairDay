import userEvent from "@testing-library/user-event";
import { ButtonIcon } from "./ButtonIcon";
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userSquare from "../../../assets/icons/userSquare.svg?react";

describe("shared's ButtonIcon", () => {
  test("checks if onClick is working", async () => {
    const mockFunction = vi.fn();
    const user = userEvent.setup();
    render(
      <ButtonIcon
        icon={userSquare}
        onClick={mockFunction}
      />,
    );

    const buttonIcon = await screen.findByRole("button");
    await user.click(buttonIcon);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  test("checks if disabled is working", async () => {
    const mockFunction = vi.fn();
    const user = userEvent.setup();
    render(
      <ButtonIcon
        icon={userSquare}
        onClick={mockFunction}
        disabled
      />,
    );

    const buttonIcon = await screen.findByRole("button");
    await user.click(buttonIcon);

    expect(mockFunction).not.toHaveBeenCalled();
  });
});
