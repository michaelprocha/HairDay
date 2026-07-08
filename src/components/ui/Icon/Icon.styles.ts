import { tv } from "tailwind-variants";

const iconStyles = tv({
  variants: {
    color: {
      primary: "text-yellow",
    },
    animete: {
      none: "",
    },
  },
  defaultVariants: {
    color: "primary",
    animete: "none",
  },
});

export { iconStyles };
