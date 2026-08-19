import { render, screen } from "@testing-library/react";
import { DateInput } from "./DateInput";
import { vi } from "vitest";
import { createRef } from "react";
import userEvent from "@testing-library/user-event";

describe("DateInput's test", () => {
  it("calls openCalendar when input is clicked", async () => {
    const openDateMock = vi.fn();
    const inputRef = createRef<HTMLInputElement>();
    const user = userEvent.setup();
    render(
      <DateInput
        HandleChangeDate={vi.fn()}
        HandleOpenCalendar={openDateMock}
        ref={inputRef}
        dateValue="01/14/1997"
      />,
    );

    const calendar = screen.getByText("01/14/1997");
    await user.click(calendar);

    expect(openDateMock).toHaveBeenCalled();
  });

  it("calls HandleChangeDate when changing input value", async () => {
    const onChangeMock = vi.fn();
    const { container } = render(
      <DateInput
        HandleChangeDate={onChangeMock}
        HandleOpenCalendar={vi.fn()} // Prop obrigatória
        dateValue="01/14/1997"
      />,
    );

    const input = container.querySelector('input[type="date"]')!;
    await userEvent.type(input, "1998-02-15");

    expect(onChangeMock).toHaveBeenCalled();
  });
});
