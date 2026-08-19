import { tv } from "tailwind-variants";

const formStyles = tv({
  slots: {
    form: "flex flex-col gap-8",
    dateText: "title-md text-gray-200 pb-2",
    inputTextText: "title-md text-gray-200 pb-2",
  },
});

export { formStyles };
