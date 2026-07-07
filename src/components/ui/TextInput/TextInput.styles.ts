import { tv } from "tailwind-variants";

const textInputStyles = tv({
  variants: {
    color: {
      primary: "text-gray-200 placeholder:text-gray-400",
    },
    text: {
      md: "text-md",
    },
    spacing: {
      sm: "px-2",
    },
    outline: {
      none: "outline-none",
    },
  },
  defaultVariants: {
    color: "primary",
    text: "md",
    spacing: "sm",
    outline: "none",
  },
});

export { textInputStyles };
