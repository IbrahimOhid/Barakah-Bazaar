import {
  HiOutlineHeart,
  HiOutlineEye,
  HiOutlineShoppingBag,
} from "react-icons/hi2";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/AddToCart/addToCartSlice";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();

  // ADD TO CART
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products?.map((product) => (
        <div
          key={product.id}
          className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_-12px_rgba(15,23,42,0.14)] sm:rounded-[28px]"
        >
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[26px]">
            <div className="aspect-[4/5] overflow-hidden bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>

            {/* BADGE */}
            {product.badge && (
              <span
                className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white shadow-md sm:left-4 sm:top-4 sm:px-3 sm:text-[11px] ${product.badgeColor}`}
              >
                {product.badge}
              </span>
            )}

            {/* ACTION BUTTONS */}
            <div className="absolute inset-x-0 bottom-3 flex translate-y-6 items-center justify-center gap-1.5 opacity-100 transition-all duration-500 sm:bottom-5 sm:gap-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
              
              <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 text-slate-700 shadow-md backdrop-blur-md transition-all duration-300 hover:text-indigo-600 sm:h-11 sm:w-11 sm:rounded-2xl">
                <HiOutlineEye className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 text-slate-700 shadow-md backdrop-blur-md transition-all duration-300 hover:text-rose-500 sm:h-11 sm:w-11 sm:rounded-2xl">
                <HiOutlineHeart className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <button
                onClick={() => handleAddToCart(product)}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200 transition-all duration-300 hover:bg-indigo-700 sm:h-11 sm:w-11 sm:rounded-2xl"
              >
                <HiOutlineShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-2 p-3 sm:space-y-3 sm:p-5 lg:p-6">
            <h3 className="line-clamp-1 text-sm font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-indigo-600 sm:text-[17px]">
              {product.name}
            </h3>

            {/* PRICE */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <p className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                ${product.price}
              </p>

              {product.oldPrice && (
                <p className="text-xs font-medium text-slate-400 line-through sm:text-sm">
                  ${product.oldPrice}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;