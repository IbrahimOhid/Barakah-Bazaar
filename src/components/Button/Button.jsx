import React from "react";

const Button = ({ value }) => {
  return (
    <div>
      <div className="flex justify-center">
        <button className="inline-flex h-12 items-center justify-center cursor-pointer rounded-2xl border border-slate-300 bg-white px-7 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:shadow-lg active:scale-[0.98]">
          {value}
        </button>
      </div>
    </div>
  );
};

export default Button;
