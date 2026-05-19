import React from "react";
import {
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiMiniStar,
} from "react-icons/hi2";
import { newArrivalProductData } from "../../data/productData";
import SectionHeader from "../SectionHeader/SectionHeader";

const NewArrival = () => {
  return (
    <div className="container-section">
      {/* SECTION HEADER */}
      <SectionHeader
        value={"Latest Collection"}
        title={"New Arrivals"}
        description={
          "Discover fresh fashion essentials crafted with premium quality, modern elegance, and timeless comfort."
        }
      />

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {newArrivalProductData &&
          newArrivalProductData.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-[28px] border border-slate-200/70 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)]"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[26px]">
                {/* BADGE */}
                <span className="absolute left-4 top-4 z-10 rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md">
                  New
                </span>

                {/* IMAGE */}
                <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* HOVER ACTIONS */}
                <div className="absolute inset-x-0 bottom-5 flex translate-y-8 items-center justify-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-slate-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-indigo-600">
                    <HiOutlineEye className="h-5 w-5" />
                  </button>

                  <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-slate-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-rose-500">
                    <HiOutlineHeart className="h-5 w-5" />
                  </button>

                  <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700">
                    <HiOutlineShoppingBag className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="space-y-3 p-5 sm:p-6">
                {/* TITLE */}
                <div>
                  <h3 className="line-clamp-1 text-base font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-indigo-600 sm:text-[17px]">
                    {product.name}
                  </h3>
                </div>

                {/* RATING */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    <HiMiniStar className="h-4 w-4 fill-current" />
                    <HiMiniStar className="h-4 w-4 fill-current" />
                    <HiMiniStar className="h-4 w-4 fill-current" />
                    <HiMiniStar className="h-4 w-4 fill-current" />
                    <HiMiniStar className="h-4 w-4 fill-current opacity-40" />
                  </div>

                  <span className="text-xs font-medium text-slate-500">
                    ({product.reviews})
                  </span>
                </div>

                {/* PRICE */}
                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold tracking-tight text-slate-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* CTA */}
      <div className="mt-12 flex justify-center sm:mt-14">
        <button className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:shadow-lg active:scale-[0.98]">
          View All New Arrivals
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
