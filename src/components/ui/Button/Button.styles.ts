import { tv } from "tailwind-variants";

const buttonStyles = tv({
  base: "rounded-lg title-sm flex justify-center items-center font-catamaran",
  variants: {
    color: {
      primary:
        "bg-yellow text-gray-900 hover:outline-2 hover:outline-yellow-light cursor-pointer uppercase",
    },
    size: {
      md: "w-85 h-14",
    },
    disabled: {
      true: "opacity-30 cursor-default outline-none pointer-events-none",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    disabled: false,
    hover: false,
  },
});

export { buttonStyles };
