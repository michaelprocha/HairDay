import { tv } from "tailwind-variants";

const scheduleStyles = tv({
  slots: {
    periods: "flex flex-col gap-3",
    title: "font-catamaran",
    period: "flex flex-col gap-2",
    text: "font-catamaran ",
    times: "flex gap-2 flex-wrap",
  },
  variants: {
    color: {
      primary: {
        title: "text-gray-200",
        text: "text-gray-300",
      },
    },
    typeText: {
      primary: {
        title: "title-md",
        text: "text-sm",
      },
    },
    size: {
      md: {
        periods: "max-w-97",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    typeText: "primary",
    size: "md",
  },
});

export { scheduleStyles };
