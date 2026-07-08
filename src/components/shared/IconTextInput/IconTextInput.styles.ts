import { tv } from "tailwind-variants";

const iconTextInputStyles = tv({
  base: "flex py-3 pl-3 pr-1 border rounded-lg",
  variants: {
    color: {
      primary: "border-gray-500 hover:border-yellow-dark",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export { iconTextInputStyles };
