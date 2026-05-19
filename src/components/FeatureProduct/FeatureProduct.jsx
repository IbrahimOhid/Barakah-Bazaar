

import { featuresProductData } from "../../data/productData";
import Button from "../Button/Button";
import SectionHeader from "../SectionHeader/SectionHeader";
import ProductCard from "../ProductCard/ProductCard";

const tabs = ["All", "New Arrivals", "Best Sellers"];

const FeatureProduct = () => {
  return (
      <div className="container-section">
        {/* SECTION HEADER */}
        <SectionHeader
          value={"Trending Products"}
          title={"Featured Products"}
          description={
            "Discover premium-quality fashion designed with comfort, elegance, and modern everyday versatility."
          }
        />

        {/* FILTERS */}
        <div className="mt-8 flex justify-center">
          <div className="scrollbar-hide flex w-full max-w-full items-center gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50/80 p-1.5 backdrop-blur sm:w-auto">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`flex-shrink-0 whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
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
        <ProductCard products={featuresProductData}/>

        {/* CTA */}
        <div className="flex justify-center sm:mt-14">
          <Button value={"View All Products"} />
        </div>
      </div>
  );
};

export default FeatureProduct;
