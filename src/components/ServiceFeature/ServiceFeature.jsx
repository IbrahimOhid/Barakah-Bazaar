import React from "react";
import {
  HiOutlineTruck,
  HiOutlineArrowPath,
  HiOutlineShieldCheck,
  HiOutlineClock,
} from "react-icons/hi2";

const features = [
  {
    id: 1,
    icon: HiOutlineTruck,
    title: "Free Shipping",
    description: "On all orders over $39.00",
  },
  {
    id: 2,
    icon: HiOutlineArrowPath,
    title: "30 Days Return",
    description: "Money back guarantee",
  },
  {
    id: 3,
    icon: HiOutlineShieldCheck,
    title: "Secure Checkout",
    description: "100% Protected by PayPal",
  },
  {
    id: 4,
    icon: HiOutlineClock,
    title: "24/7 Support",
    description: "All time customer support",
  },
];

const ServiceFeature = () => {
  return (
      <div className="container-section">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group flex items-start gap-4 rounded-3xl border border-transparent bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-100 hover:shadow-lg sm:px-6 sm:py-6"
              >
                {/* ICON */}
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-400 transition-all duration-300 group-hover:bg-orange-100 group-hover:text-orange-500 sm:h-16 sm:w-16">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>

                {/* CONTENT */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default ServiceFeature;