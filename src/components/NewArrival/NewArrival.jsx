import React from "react";

import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const NewArrival = () => {
  const products = useSelector((state)=> state.products.products);
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
      <ProductCard products={products}/>

      {/* CTA */}
      <div className="mt-10 flex justify-center sm:mt-14">
        <NavLink to={"/product"}><Button value={"View All Products"} /></NavLink>
      </div>
    </div>
  );
};

export default NewArrival;
