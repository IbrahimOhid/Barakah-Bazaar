import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "/logo/logo.png";

import {
  HiOutlineShoppingBag,
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";

import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { navItem, shopItem } from "../data/navbarData";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [shopMenu, setShopMenu] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `relative text-[15px] font-semibold transition-all duration-300 ${
      isActive ? "text-indigo-600" : "text-slate-700 hover:text-indigo-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white backdrop-blur-xl">
      {/* CONTAINER */}
      <div className="container-section flex h-[72px] items-center justify-between gap-4">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-6 xl:gap-12">
          {/* LOGO */}
          <NavLink to="/" className="shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className="h-8 w-auto object-contain sm:h-9 lg:h-10"
            />
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>

            {/* SHOP DROPDOWN */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-[15px] font-semibold text-slate-700 transition-all duration-300 hover:text-indigo-600">
                Shop
                <MdKeyboardArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              {/* DROPDOWN */}
              <div className="invisible absolute left-0 top-14 z-50 w-64 translate-y-3 rounded-3xl border border-slate-200/80 bg-white p-2 opacity-0 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {shopItem.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className="flex items-center rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-indigo-600"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {navItem.map((nav) => (
              <NavLink key={nav.id} to={nav.path} className={navLinkStyle}>
                {nav.item}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* SEARCH */}
          <div className="hidden h-11 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 transition-all duration-300 focus-within:border-indigo-500 focus-within:bg-white focus-within:shadow-lg focus-within:shadow-indigo-100/60 md:flex lg:w-[240px] xl:w-[280px]">
            <IoIosSearch className="h-5 w-5 shrink-0 text-slate-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent text-sm font-medium text-slate-700 placeholder:text-slate-400 outline-none"
            />
          </div>

          {/* ICON BUTTON */}
          {[
            {
              icon: <HiOutlineShoppingBag className="h-5 w-5" />,
              badge: true,
            },
            {
              icon: <RiAccountPinCircleLine className="h-5 w-5" />,
            },
          ].map((btn, index) => (
            <button
              key={index}
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-100 active:scale-95"
            >
              {btn.icon}

              {btn.badge && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white shadow-sm">
                  3
                </span>
              )}
            </button>
          ))}

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

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-500 lg:hidden ${
          mobileMenu ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-section py-5">
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
            <NavLink
              to={"/"}
              onClick={() => setMobileMenu(false)}
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
                    <NavLink
                      key={item.id}
                      to={item.path}
                      onClick={() => {
                        setMobileMenu(false);
                        setShopMenu(false);
                      }}
                      className="flex items-center rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-indigo-600"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {navItem.map((nav) => (
              <NavLink
                key={nav.id}
                to={nav.path}
                onClick={() => setMobileMenu(false)}
                className="flex items-center rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-indigo-600"
              >
                {nav.item}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
