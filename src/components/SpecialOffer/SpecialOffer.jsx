import { useEffect, useMemo, useState } from "react";
import { HiMiniFire } from "react-icons/hi2";

import SummerImg from "/image/product_img/summer.jpg";
import ExploreButton from "../Button/ExploreButton";
import ShopButton from "../Button/ShopButton";
import { NavLink } from "react-router-dom";

const SpecialOffer = () => {
  // SALE END DATE
  const targetDate = useMemo(() => {
    const now = new Date();

    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 3,
      23,
      59,
      59,
    ).getTime();
  }, []);

  // CALCULATE TIME
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0",
      ),

      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0",
      ),

      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
        2,
        "0",
      ),

      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // TIMER DATA
  const offerTime = [
    {
      id: 1,
      value: timeLeft.days,
      label: "Days",
    },
    {
      id: 2,
      value: timeLeft.hours,
      label: "Hours",
    },
    {
      id: 3,
      value: timeLeft.minutes,
      label: "Minutes",
    },
    {
      id: 4,
      value: timeLeft.seconds,
      label: "Seconds",
    },
  ];

  return (
    <div className="container-section">
      {/* WRAPPER */}
      <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 ">
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-indigo-100 blur-3xl sm:h-72 sm:w-72" />

          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-rose-100 blur-3xl sm:h-72 sm:w-72" />
        </div>

        {/* MAIN GRID */}
        <div className="relative z-10 grid items-center gap-10 px-5 py-6 sm:px-8 sm:py-8 md:grid-cols-2 lg:gap-16 lg:px-14 lg:py-14">
          {/* LEFT CONTENT */}
          <div className="order-2 md:order-1">
            {/* BADGE */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 shadow-sm">
              <HiMiniFire className="h-4 w-4 text-orange-500 sm:h-5 sm:w-5" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600 sm:text-xs">
                Limited Time Deal
              </span>
            </div>

            {/* TITLE */}
            <div className="space-y-4">
              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                Summer Sale
              </h2>

              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
                Upgrade your style with premium fashion collections and enjoy{" "}
                <span className="font-semibold text-slate-900">
                  up to 50% OFF
                </span>{" "}
                on selected items before the sale ends.
              </p>
            </div>

            {/* TIMER */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 mb-8">
              {offerTime.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-3xl font-bold tracking-tight text-orange-500 sm:text-[38px]">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600 sm:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <NavLink to={"/product"}>
                <ShopButton value={"Shop Now"} />
              </NavLink>
              <NavLink to={"/product"}>
                <ExploreButton value={"Explore Collection"} />
              </NavLink>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 md:order-2">
            <div className="relative">
              {/* IMAGE CARD */}
              <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white ">
                <img
                  src={SummerImg}
                  alt="Summer Sale"
                  className=" w-full object-cover transition-transform duration-700 hover:scale-105 "
                />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute bottom-4 left-4 rounded-3xl border border-white/40 bg-white/90 p-4 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:bottom-6 sm:left-6 sm:p-5">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                  Exclusive Offer
                </p>

                <h3 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  50% OFF
                </h3>

                <p className="mt-1 max-w-[180px] text-xs leading-relaxed text-slate-500 sm:text-sm">
                  On selected fashion collections this season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
