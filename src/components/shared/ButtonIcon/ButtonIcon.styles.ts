import { tv } from "tailwind-variants";

const buttonIconStyles = tv({
  slots: {
    buttonStyles: "cursor-pointer",
    iconStyles: "",
  },
  variants: {
    color: {
      primary: {
        iconStyles: "text-yellow hover:text-yellow-dark",
      },
    },
    size: {
      sm: {
        iconStyles: "size-8",
      },
    },
    disabled: {
      true: {
        buttonStyles: "pointer-events-none",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "sm",
    disabled: false,
  },
});

export { buttonIconStyles };
