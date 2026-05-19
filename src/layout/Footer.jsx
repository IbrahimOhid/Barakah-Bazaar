import Logo from "/logo/logo.png";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
  RiPinterestLine,
  RiVisaLine,
  RiMastercardLine,
  RiPaypalLine,
  RiAppleFill,
} from "react-icons/ri";

const Footer = () => {
  const shopLinks = [
    "Women",
    "Men",
    "Accessories",
    "Footwear",
    "New Arrivals",
    "Sale",
  ];

  const helpLinks = [
    "Customer Service",
    "My Account",
    "Find a Store",
    "Shipping & Returns",
    "FAQs",
  ];

  const aboutLinks = [
    "About Us",
    "Sustainability",
    "Careers",
    "Press",
    "Contact Us",
  ];

  const socialLinks = [
    {
      icon: <RiFacebookFill className="h-[18px] w-[18px]" />,
      href: "#",
    },
    {
      icon: <RiInstagramLine className="h-[18px] w-[18px]" />,
      href: "#",
    },
    {
      icon: <RiTwitterXLine className="h-[18px] w-[18px]" />,
      href: "#",
    },
    {
      icon: <RiPinterestLine className="h-[18px] w-[18px]" />,
      href: "#",
    },
  ];

  const paymentIcons = [
    <RiVisaLine className="h-7 w-7" />,
    <RiMastercardLine className="h-7 w-7" />,
    <RiPaypalLine className="h-7 w-7" />,
    <RiAppleFill className="h-7 w-7" />,
  ];

  return (
    <footer className=" bg-white">
      {/* MAIN */}
      <div className="container-section ">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* BRAND */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-flex shrink-0 items-center">
              <img
                src={Logo}
                alt="Logo"
                className="h-9 w-auto object-contain sm:h-10"
              />
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-[15px]">
              We create premium fashion essentials designed for comfort,
              sustainability, and modern everyday style.
            </p>

            {/* SOCIAL */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-100/60"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS WRAPPER */}
          <div className="grid grid-cols-2 gap-10 sm:gap-12 lg:col-span-8 lg:grid-cols-3">
            {/* SHOP */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Shop
              </h3>

              <ul className="mt-5 space-y-4">
                {shopLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-indigo-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* HELP */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Help
              </h3>

              <ul className="mt-5 space-y-4">
                {helpLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-indigo-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ABOUT */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                About
              </h3>

              <ul className="mt-5 space-y-4">
                {aboutLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-indigo-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col gap-6 border-t border-slate-200 pt-7 sm:mt-16 lg:flex-row lg:items-center lg:justify-between">
          {/* COPYRIGHT */}
          <p className="text-center text-sm font-medium text-slate-500 lg:text-left">
            © {new Date().getFullYear()} Barakah-Bazaar. All rights reserved.
          </p>

          {/* POLICIES */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-slate-900"
              >
                {item}
              </a>
            ))}
          </div>

          {/* PAYMENTS */}
          <div className="flex items-center justify-center gap-3 text-slate-500 lg:justify-end">
            {paymentIcons.map((icon, index) => (
              <div
                key={index}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
