import { useState } from "react";
import Logo from "/logo/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [shopMenu, setShopMenu] = useState(false);
  const navItem = ["Home", "New Arrivals", "Sale", "About"];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:h-[78px] lg:px-8">
        {/* LOGO */}
        <a href="#" className="flex shrink-0 items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-8 w-auto sm:h-9 lg:h-10 xl:h-11 object-contain"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          <a
            href="#"
            className="text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-indigo-600"
          >
            Home
          </a>

          {/* SHOP DROPDOWN */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-indigo-600">
              Shop
              <MdKeyboardArrowDown className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-0 top-12 z-50 w-56 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {navItem && navItem.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {navItem && navItem.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-indigo-600"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* SEARCH */}
          <div className="w-20 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none sm:w-28 md:w-32 lg:w-40 xl:w-48">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-slate-400 shrink-0"
            >
              <path
                d="m21 21-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>

            <input
              type="text"
              placeholder="Search products"
              className="w-28 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none sm:w-36 lg:w-48"
            />
          </div>

          {/* ICON BUTTON BASE */}
          {[
            {
              type: "account",
              icon: (
                <>
                  <path
                    d="M20 21a8 8 0 1 0-16 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </>
              ),
            },
          ].map((item) => (
            <button
              key={item.type}
              className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                {item.icon}
              </svg>
            </button>
          ))}

          {/* CART */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6h15l-1.5 9h-12z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6 5 3H2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="9" cy="20" r="1.5" fill="currentColor" />
              <circle cx="18" cy="20" r="1.5" fill="currentColor" />
            </svg>

            <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white shadow-sm">
              3
            </span>
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 lg:hidden"
          >
            {mobileMenu ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6 6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-[max-height] duration-500 ease-in-out lg:hidden ${
          mobileMenu ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="space-y-2 px-4 py-5">
          {/* MOBILE SEARCH */}
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <input
              type="text"
              placeholder="Search products"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          {navItem && navItem.map((item) => (
            <a
              key={item}
              href="#"
              className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {item}
            </a>
          ))}

          {/* MOBILE SHOP */}
          <div className="rounded-2xl border border-slate-200">
            <button
              onClick={() => setShopMenu(!shopMenu)}
              className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-slate-700"
            >
              Shop
              <svg
                className={`transition-transform ${
                  shopMenu ? "rotate-180" : ""
                }`}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m6 9 6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                shopMenu ? "max-h-60" : "max-h-0"
              }`}
            >
              <div className="space-y-1 px-3 pb-3">
                {navItem && navItem.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
