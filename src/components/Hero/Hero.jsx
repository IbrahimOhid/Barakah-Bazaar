import { NavLink } from "react-router-dom";
import ExploreButton from "../Button/ExploreButton";
import ShopButton from "../Button/ShopButton";
import HeroImg from "/image/hero_img.jpg";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="container-section relative bg-cover bg-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="container mx-auto px-4 py-24 md:py-32 w-full">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Summer Collection <span className="text-indigo-600">{new Date().getFullYear()}</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Discover our latest arrivals designed for comfort and style.
              Premium quality that lasts.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink to={"/product"}><ShopButton value={"Shop Now"}/></NavLink>
              <NavLink to={"/product"}><ExploreButton value={"Explore Collection"}/></NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
