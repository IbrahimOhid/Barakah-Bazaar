import React from "react";
import {
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineCube,
} from "react-icons/hi2";

const features = [
  {
    id: 1,
    icon: HiOutlineSparkles,
    title: "Handcrafted Artistry",
    description:
      "Beautiful crochet work and custom jewelry crafted with care, creativity, and love.",
  },
  {
    id: 2,
    icon: HiOutlineCube,
    title: "Creative Supplies",
    description:
      "Premium hardware and accessories designed for makers, creators, and DIY enthusiasts.",
  },
  {
    id: 3,
    icon: HiOutlineHeart,
    title: "Curated Lifestyle Goods",
    description:
      "Carefully selected products that bring comfort, elegance, and purpose to everyday living.",
  },
];

const About = () => {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white ">
      <div className="container-section">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
            About Barakah Bazaar
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Where Purpose Meets Quality
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
            Welcome to{" "}
            <span className="font-semibold text-slate-900">
              Barakah Bazaar
            </span>{" "}
            — a thoughtfully curated marketplace designed to bring value,
            creativity, and abundance into everyday life.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT CONTENT */}
          <div>
            {/* STORY */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Our Story
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                At Barakah Bazaar, we believe shopping should inspire joy,
                connection, and meaning. What began as a simple passion project
                has grown into a modern online marketplace connecting skilled
                creators with conscious shoppers who appreciate craftsmanship
                and intentional living.
              </p>

              {/* MISSION */}
              <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
                <h4 className="text-lg font-bold text-slate-900">
                  Our Mission
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-emerald-700">
                    “To share the barakah.”
                  </span>{" "}
                  We aim to bridge the gap between talented creators and
                  thoughtful customers by offering products rooted in quality,
                  authenticity, and purpose.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
                >
                  {/* ICON */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-100 sm:h-16 sm:w-16">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>

                  {/* TEXT */}
                  <div className="mt-5">
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTER QUOTE */}
        <div className="mt-14 rounded-[30px] border border-slate-200 bg-white px-6 py-10 text-center shadow-sm sm:px-10">
          <p className="mx-auto max-w-3xl text-base italic leading-relaxed text-emerald-700 sm:text-lg lg:text-xl">
            “May your life always be filled with abundance, blessings, and
            barakah.”
          </p>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
            — The Barakah Bazaar Team
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;