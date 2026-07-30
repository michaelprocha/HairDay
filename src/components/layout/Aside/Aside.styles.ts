import { tv } from "tailwind-variants";

const asideStyles = tv({
  slots: {
    aside: "p-20 flex flex-col gap-6 bg-gray-700 rounded-xl",
    title: "title-lg text-gray-100 text-nowrap",
    paragraph: "text-sm text-gray-300",
    textArea: "flex flex-col gap-2",
  },
});

export { asideStyles };
