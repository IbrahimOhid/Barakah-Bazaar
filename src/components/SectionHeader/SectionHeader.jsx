const SectionHeader = ({ value, title, description }) => {
  return (
    <div>
      <div className="mb-10 flex flex-col items-center justify-center text-center sm:mb-14">
        <span className="mb-3 inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          {value}
        </span>

        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
