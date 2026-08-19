import { tv } from "tailwind-variants";

const dateInputStyles = tv({
  slots: {
    labelDate:
      "relative flex border rounded-lg px-3 pt-3 pb-2 items-center justfy-center gap-2",
    inputDate: `sr-only bottom-0 left-0`,
    spanText: "flex-1 cursor-pointer pb-0.5",
  },
  variants: {
    color: {
      primary: {
        labelDate: "border-gray-500",
        spanText: "text-gray-200",
      },
    },
    text: {
      primary: {
        spanText: "text-md",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    text: "primary",
  },
});

export { dateInputStyles };
