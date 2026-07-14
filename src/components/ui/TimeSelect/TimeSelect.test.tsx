import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { TimeSelect } from "./TimeSelect";

describe("ui's TimeSelect", () => {
  test("checks if onClick is working", async () => {
    const mockFunction = vi.fn();
    const user = userEvent.setup();
    render(
      <TimeSelect
        time="10:00"
        onClick={mockFunction}
      />,
    );

    const timeSelect = await screen.findByRole("radio");
    await user.click(timeSelect);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  test("checks if disabled is working", async () => {
    const mockFunction = vi.fn();
    const user = userEvent.setup();
    render(
      <TimeSelect
        time="10:00"
        onClick={mockFunction}
        disabled
      />,
    );

    const timeSelect = await screen.findByRole("radio");
    await user.click(timeSelect);

    expect(mockFunction).not.toHaveBeenCalled();
  });
});
