import { tv } from "tailwind-variants";

const shiftStyles = tv({
  slots: {
    shiftStyle:
      "flex flex-col border border-gray-600 rounded-lg font-catamaran",
    headerStyle: "flex border-b border-gray-600 gap-3 py-3 px-5",
    headerParagraphStyle: "text-sm text-gray-400 capitalize",
    listStyle: "flex flex-col gap-0.5 p-5",
    lineStyle: "flex gap-5",
    lineParagraphStyle: "title-md text-gray-200 py-1 capitalize",
  },
});

export { shiftStyles };
