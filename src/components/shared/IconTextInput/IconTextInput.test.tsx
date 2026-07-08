import { render, screen } from "@testing-library/react";
import { IconTextInput } from "./IconTextInput";
import userSquareIcon from "../../../assets/icons/userSquare.svg?react";
import userEvent from "@testing-library/user-event";

describe("shared's IconTextInput", () => {
  test("checks if the input's value is working", () => {
    const mockValue = "value";
    render(
      <IconTextInput
        icon={userSquareIcon}
        value={mockValue}
      />,
    );

    const iconTextInput = screen.getByRole("textbox");

    expect(iconTextInput).toHaveValue(mockValue);
  });
  test("checks if the input's value change", async () => {
    const mockHandleChange = vi.fn();
    const user = userEvent.setup();
    render(
      <IconTextInput
        icon={userSquareIcon}
        onChange={mockHandleChange}
      />,
    );

    const iconTextInput = screen.getByRole("textbox");
    await user.type(iconTextInput, "new value");

    expect(iconTextInput).toHaveValue("new value");
  });
});
