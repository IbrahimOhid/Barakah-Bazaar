
import {
  HiArrowRight,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { offerProductData } from "../../data/productData";
import ShopButton from "../Button/ShopButton";



const Offer = () => {
  return (
    <section className="bg-white ">
      <div className="container-section">

        {/* OFFER GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {offerProductData && offerProductData.map((offer) => (
            <div
              key={offer.id}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-slate-100 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.18)]"
            >
              {/* IMAGE */}
              <div className="relative ">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${offer.bg}`}
                />

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 sm:p-6">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-white/90">
                      Premium Collection
                    </p>

                    <h3 className="max-w-[220px] text-2xl font-bold leading-tight tracking-tight text-white sm:text-[28px]">
                      {offer.title}
                    </h3>

                    <p className="text-sm font-semibold uppercase tracking-wide text-indigo-200">
                      {offer.discount}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE CTA */}
        <div className="mt-8 flex justify-center lg:hidden">
          <button className="group inline-flex h-12 items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 hover:shadow-lg">
            Explore Deals
            <HiOutlineArrowLongRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offer;