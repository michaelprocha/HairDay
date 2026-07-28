import { tv } from "tailwind-variants";

const dateInputStyles = tv({
  slots: {
    labelDate:
      "relative w-full flex border rounded-lg px-3 pt-3 pb-2 items-center justfy-center gap-2",
    inputDate: `sr-only bottom-0 left-0`,
    iconDate: "size-5",
  },
  variants: {
    color: {
      primary: {
        iconDate: "text-yellow",
        labelDate: "border-gray-500",
        inputDate: "text-gray-200",
      },
    },
    text: {
      primary: {
        inputDate: "text-md",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    text: "primary",
  },
});

export { dateInputStyles };
