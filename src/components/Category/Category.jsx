import { categoryProductData } from "../../data/productData";
import { HiArrowRight } from "react-icons/hi2";
import SectionHeader from "../SectionHeader/SectionHeader";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <section className="bg-white py-10">
      <div className="container-section">
        {/* SECTION HEADER */}
        <SectionHeader
          value={"Categories"}
          title={"Shop by Category"}
          description={
            "Explore premium collections designed for modern lifestyles, comfort, and timeless everyday fashion."
          }
        />

        {/* CATEGORY GRID */}
       <NavLink to={"/product"}> <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {categoryProductData?.map((category) => (
            <a
              key={category.id}
              href="#"
              className="group relative overflow-hidden rounded-[28px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/70"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* IMAGE */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  {/* CATEGORY NAME */}
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                        {category.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-white/70">
                        Explore Collection
                      </p>
                    </div>

                    {/* ICON */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-indigo-600">
                      <HiArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* HOVER BORDER */}
              <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-black/5 transition-all duration-300 group-hover:ring-indigo-200" />
            </a>
          ))}
        </div></NavLink>
      </div>
    </section>
  );
};

export default Category;
