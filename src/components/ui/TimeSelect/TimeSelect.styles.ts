import { tv } from "tailwind-variants";

const timeSelectStyles = tv({
  slots: {
    label: `h-10 w-19.5 border rounded-lg text-md flex items-center justify-center cursor-pointer`,
    input: "sr-only",
  },
  variants: {
    color: {
      primary: {
        label:
          "bg-gray-600 text-gray-200 border-gray-500 hover:bg-gray-500 has-checked:border-yellow has-checked:text-yellow",
      },
    },
    disabled: {
      true: {
        label:
          "bg-transparent border-gray-600 text-gray-500 pointer-events-none",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    disabled: false,
  },
});

export { timeSelectStyles };
