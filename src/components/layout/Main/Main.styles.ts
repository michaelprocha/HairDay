import { tv } from "tailwind-variants";

const mainStyles = tv({
  slots: {
    mainStyle: "px-28 py-20 w-full flex flex-col gap-8",
    headerStyle: "flex justify-between",
    h2Style: "title-lg text-gray-100 pb-2",
    paragraphStyle: "text-sm text-gray-300",
    shiftsStyles: "flex flex-col gap-3",
  },
});

export { mainStyles };
