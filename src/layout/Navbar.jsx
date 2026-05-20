import { useState } from "react";
import Logo from "/logo/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [shopMenu, setShopMenu] = useState(false);

  const navItem = [
    {
      id: 1,
      item: "New Arrivals",
      path: "/product",
    },
    {
      id: 2,
      item: "Sale",
      path: "/product",
    },
    {
      id: 3,
      item: "About",
      path: "/about",
    },
  ];
  const shopItem = ["Women", "Men", "Accessories", "Footwear"];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white backdrop-blur-xl ">
      {/* CONTAINER */}
      <div className="container-section flex h-[68px]  items-center justify-between  ">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-8 xl:gap-12">
          {/* LOGO */}
          <NavLink to={"/"}  className="shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className="h-8 w-auto object-contain sm:h-9 lg:h-10 xl:h-11"
            />
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            <NavLink to={"/"}
              className="relative text-[15px] font-semibold text-slate-700 transition-all duration-200 hover:text-indigo-600"
            >
              Home
            </NavLink>

            {/* SHOP DROPDOWN */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-[15px] font-semibold text-slate-700 transition-all duration-200 hover:text-indigo-600">
                Shop
                <MdKeyboardArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              {/* DROPDOWN */}
              <div className="invisible absolute left-0 top-14 z-50 w-60 translate-y-2 rounded-3xl border border-slate-200/80 bg-white p-2 opacity-0 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {shopItem.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex items-center rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-indigo-600"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {navItem.map((nav) => (
              <NavLink
                key={nav.id}
                to={nav.path}
                className="relative text-[15px] font-semibold text-slate-700 transition-all duration-200 hover:text-indigo-600"
              >
                {nav.item}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {/* SEARCH */}
          <div className="hidden md:flex h-11 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 transition-all duration-300 focus-within:border-indigo-500 focus-within:bg-white focus-within:shadow-lg focus-within:shadow-indigo-100/60 lg:w-[240px] xl:w-[280px]">
            <IoIosSearch className="h-5 w-5 shrink-0 text-slate-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent text-sm font-medium text-slate-700 placeholder:text-slate-400 outline-none"
            />
          </div>

          {/* CART */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-100 active:scale-95">
            <HiOutlineShoppingBag className="h-[21px] w-[21px]" />

            <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white shadow-sm">
              3
            </span>
          </button>

          {/* LOGIN BUTTON */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-100 active:scale-95">
            <RiAccountPinCircleLine className="h-[21px] w-[21px]" />
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 lg:hidden"
          >
            {mobileMenu ? (
              <HiOutlineXMark className="h-6 w-6" />
            ) : (
              <HiOutlineBars3 className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE + TABLET MENU */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-500 ease-in-out lg:hidden ${
          mobileMenu ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          {/* MOBILE SEARCH */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <IoIosSearch className="h-5 w-5 shrink-0 text-slate-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent text-sm font-medium text-slate-700 placeholder:text-slate-400 outline-none"
            />
          </div>

          {/* MOBILE NAVIGATION */}
          <div className="mt-5 space-y-1">
            <NavLink to={"/"}
              className="flex items-center rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100"
            >
              Home
            </NavLink>

            {/* MOBILE SHOP */}
            <div className="rounded-2xl border border-slate-200">
              <button
                onClick={() => setShopMenu(!shopMenu)}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-slate-700"
              >
                Shop
                <MdKeyboardArrowDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    shopMenu ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  shopMenu ? "max-h-60" : "max-h-0"
                }`}
              >
                <div className="space-y-1 px-3 pb-3">
                  {shopItem.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-indigo-600"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {navItem.map((nav) => (
              <NavLink
                key={nav.id}
                to={nav.path}
                className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors duration-300"
              >
                {nav.item}
              </NavLink>
            ))}
          </div>

          {/* MOBILE CTA */}
          <button className="mt-5 flex h-12 w-full items-center justify-center rounded-2xl bg-indigo-600 text-sm font-semibold text-white shadow-lg shadow-indigo-200/60 transition-all duration-300 hover:bg-indigo-700 active:scale-[0.98]">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
