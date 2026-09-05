import { tv } from "tailwind-variants";

const homeStyles = tv({
  slots: {
    page: "min-h-dvh bg-gray-800 flex p-3 gap-3 relative",
    logo: "bg-gray-600 px-5 py-3 absolute top-0 left-0 rounded-br-xl",
    errorStyle: `bg-gray-600 fixed w-1/2 h-15 top-0 left-1/4 
    rounded-b-2xl flex items-center justify-center font-catamaran text-xl 
    text-gray-100 font-bold z-2`,
  },
});

export { homeStyles };
