import { Button } from "./Button";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { vi } from "vitest";

describe("ui's Button", () => {
  test("Check if the onClick event is working.", async () => {
    const clickFunction = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={clickFunction} />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(clickFunction).toHaveBeenCalledTimes(1);
  });

  test("Check if the disabled is working", async () => {
    const clickFunction = vi.fn();
    const user = userEvent.setup();
    render(
      <Button
        onClick={() => clickFunction()}
        disabled
      />,
    );

    const button = screen.getByRole("button");
    await user.click(button);

    expect(clickFunction).not.toHaveBeenCalled();
  });
});
