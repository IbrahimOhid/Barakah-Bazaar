import React from "react";
import {
  HiOutlineHeart,
  HiOutlineEye,
  HiOutlineShoppingBag,
} from "react-icons/hi2";

import { featuresProduct } from "../../data/productData";
import Button from "../Button/Button";

const tabs = ["All", "New Arrivals", "Best Sellers"];

const FeatureProduct = () => {
  return (
    <section className="bg-white py-10">
      <div className="container-section">
        {/* HEADER */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* LEFT */}
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
              Trending Products
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
              Featured Products
            </h2>

            <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
              Discover premium-quality fashion designed with comfort,
              elegance, and modern everyday versatility.
            </p>
          </div>

          {/* FILTERS */}
          <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50/80 p-1.5 backdrop-blur">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-5 ${
                  index === 0
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-sm"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuresProduct &&
            featuresProduct.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-[28px] border border-slate-200/70 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)]"
              >
                {/* IMAGE WRAPPER */}
                <div className="relative overflow-hidden rounded-[26px]">
                  {/* IMAGE */}
                  <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* BADGE */}
                  {product.badge && (
                    <span
                      className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide text-white shadow-md ${product.badgeColor}`}
                    >
                      {product.badge}
                    </span>
                  )}

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* ACTION BUTTONS */}
                  <div className="absolute inset-x-0 bottom-5 flex translate-y-8 items-center justify-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {/* VIEW */}
                    <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-slate-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:text-indigo-600">
                      <HiOutlineEye className="h-5 w-5" />
                    </button>

                    {/* WISHLIST */}
                    <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-slate-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:text-rose-500">
                      <HiOutlineHeart className="h-5 w-5" />
                    </button>

                    {/* ADD TO CART */}
                    <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700">
                      <HiOutlineShoppingBag className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="space-y-3 p-5 sm:p-6">
                  {/* PRODUCT NAME */}
                  <div>
                    <h3 className="line-clamp-1 text-base font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-indigo-600 sm:text-[17px]">
                      {product.name}
                    </h3>

                    {product.category && (
                      <p className="mt-1 text-sm text-slate-500">
                        {product.category}
                      </p>
                    )}
                  </div>

                  {/* PRICE */}
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold tracking-tight text-slate-900">
                      {product.price}
                    </p>

                    {product.oldPrice && (
                      <p className="text-sm font-medium text-slate-400 line-through">
                        {product.oldPrice}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* CTA */}
        <Button value={"View All Products"}/>
      </div>
    </section>
  );
};

export default FeatureProduct;