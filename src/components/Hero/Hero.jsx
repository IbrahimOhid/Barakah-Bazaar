import HeroImg from "/image/hero_img.jpg";
import { HiArrowRight } from "react-icons/hi2";
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
              Summer Collection {new Date().getFullYear()}
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Discover our latest arrivals designed for comfort and style.
              Premium quality that lasts.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-2xl shadow-indigo-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 active:scale-[0.98] sm:h-14 sm:px-7 sm:text-[15px]"
              >
                Shop Now
                <HiArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="py-3 px-6 bg-white text-gray-800 font-medium rounded-button border border-gray-200 hover:bg-gray-50 transition-colors whitespace-nowrap group inline-flex h-12 items-center justify-center gap-2 rounded-2xl  text-sm  shadow-2xl shadow-indigo-950/20  duration-300 hover:-translate-y-0.5  active:scale-[0.98] sm:h-14 sm:px-7 sm:text-[15px]"
              >
                Explore Collection
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
