import { render, screen } from "@testing-library/react";
import { TextInput } from "./TextInput";

describe("ui's TextInput", () => {
  test("checks the value in the TextInput", () => {
    const mockValue = "input's value";
    render(<TextInput value={mockValue} />);

    const inputText = screen.getByRole("textbox");

    expect(inputText).toHaveValue(mockValue);
  });
});
