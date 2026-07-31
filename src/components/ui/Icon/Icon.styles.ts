import { tv } from "tailwind-variants";

const iconStyles = tv({
  variants: {
    color: {
      primary: "text-yellow",
      secondary: "text-gray-300",
    },
    size: {
      sm: "size-4",
      md: "size-5",
    },
    animete: {
      none: "",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    animete: "none",
  },
});

export { iconStyles };
