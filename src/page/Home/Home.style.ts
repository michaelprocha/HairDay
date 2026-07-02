import { tv } from "tailwind-variants";

const homeStyles = tv({
  slots: {
    page: "min-h-dvh bg-gray-800 flex p-3 gap-3 relative",
    logo: "bg-gray-600 px-5 py-3 absolute top-0 left-0 rounded-br-xl",
  },
});

export { homeStyles };
