import React from "react";

const ExploreButton = ({value}) => {
  return (
    <div>
      <a
        href="#"
        className="py-3 px-6 bg-white text-gray-800 font-medium rounded-button border border-gray-200 hover:bg-gray-50 transition-colors whitespace-nowrap group inline-flex h-12 items-center justify-center gap-2 rounded-2xl  text-sm  shadow-2xl shadow-indigo-950/20  duration-300 hover:-translate-y-0.5  active:scale-[0.98] sm:h-14 sm:px-7 sm:text-[15px]"
      >
        {value}
      </a>
    </div>
  );
};

export default ExploreButton;
