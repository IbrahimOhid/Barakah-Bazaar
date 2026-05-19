import React from "react";

import { newArrivalProductData } from "../../data/productData";
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";

const NewArrival = () => {
  return (
    <div className="container-section">
      {/* SECTION HEADER */}
      <SectionHeader
        value={"Latest Collection"}
        title={"New Arrivals"}
        description={
          "Discover fresh fashion essentials crafted with premium quality, modern elegance, and timeless comfort."
        }
      />

      {/* PRODUCT GRID */}
      <ProductCard products={newArrivalProductData}/>

      {/* CTA */}
      <div className="mt-12 flex justify-center sm:mt-14">
        <Button value={"View All New Arrivals"}/>
      </div>
    </div>
  );
};

export default NewArrival;
