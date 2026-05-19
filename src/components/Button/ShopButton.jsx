import { HiArrowRight } from "react-icons/hi2";

const ShopButton = ({value}) => {
  return (
    <div>
      <a
        href="#"
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-2xl shadow-indigo-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 active:scale-[0.98] sm:h-14 sm:px-7 sm:text-[15px]"
      >
        {value}
        <HiArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default ShopButton;
