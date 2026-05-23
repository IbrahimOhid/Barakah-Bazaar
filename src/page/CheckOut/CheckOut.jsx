import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  incrementItem,
  removeItem,
} from "../../redux/AddToCart/addToCartSlice";

const CheckOut = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.products.cart);


  // TOTAL CALCULATION
const subtotal = carts.reduce(
  (total, product) =>
    total + Number(product.price) * product.quantity,
  0
);

const tax = subtotal * 0.02;
const total = subtotal + tax;

  return (
    <section className="bg-slate-50/40 py-8 sm:py-10 lg:py-14">
      <div className="container-section">
        <div className="grid gap-6 lg:grid-cols-[1fr_380px] xl:gap-8">
          {/* LEFT SIDE */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* HEADER */}
            <div className="border-b border-slate-200 px-4 py-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Shopping Cart
              </h1>
              <div className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600">
                {carts.length} Items
              </div>
            </div>

            {carts.length > 0 ? (
              <>
                {/* TABLE HEADER */}
                <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr] border-b border-slate-200 bg-slate-50 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                  <p className="text-left">Product Details</p>
                  <p className="text-center">Subtotal</p>
                  <p className="text-center">Action</p>
                </div>

                {/* PRODUCT LIST */}
                <div className="divide-y divide-slate-200">
                  {carts.map((product) => (
                    <div
                      key={product.id}
                      className="grid gap-4 p-4 sm:p-5 md:grid-cols-[2fr_1fr_1fr] md:items-center md:px-8 md:py-6"
                    >
                      {/* PRODUCT INFO */}
                      <div className="flex gap-4 sm:gap-5">
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 sm:h-28 sm:w-28">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <h3 className="line-clamp-2 text-sm font-semibold text-slate-900 sm:text-base">
                              {product.name}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                              Price: ${product.price}
                            </p>
                          </div>

                          {/* QUANTITY CONTROL */}
                          <div className="mt-4 inline-flex h-11 w-32 items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <button
                              onClick={() =>
                                dispatch(decrementItem(product.id))
                              }
                              className="flex h-full w-11 items-center justify-center border-r border-slate-200 text-xl font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-indigo-600 active:scale-95"
                            >
                              −
                            </button>

                            <span className="flex h-full min-w-[52px] items-center justify-center bg-slate-50 px-3 text-sm font-semibold text-slate-900">
                              {product.quantity}
                            </span>

                            <button
                              onClick={() =>
                                dispatch(incrementItem(product.id))
                              }
                              className="flex h-full w-11 items-center justify-center border-l border-slate-200 text-xl font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-indigo-600 active:scale-95"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* SUBTOTAL */}
                      <div className="flex items-center justify-between md:block">
                        <span className="text-sm font-medium text-slate-500 md:hidden">
                          Subtotal:
                        </span>

                        <p className="text-base font-bold text-slate-900 md:text-center">
                          ${(product.price * product.quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* REMOVE */}
                      <div className="flex justify-end md:justify-center">
                        <button
                          onClick={() => dispatch(removeItem(product.id))}
                          className="flex h-11 w-11 items-center justify-center cursor-pointer rounded-2xl border border-red-100 bg-red-50 text-lg font-semibold text-red-500 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-100 active:scale-95"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
                <h2 className="text-2xl font-bold text-slate-900">
                  Your cart is empty
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Add some products to continue shopping.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-24">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                Order Summary
              </h2>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                Secure Checkout
              </div>
            </div>

            <hr className="my-5 border-slate-200" />

            <div className="mt-6 space-y-3 rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Shipping Fee</span>
                <span className="font-semibold text-emerald-600">Free</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Tax (2%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="my-2 border-t border-dashed border-slate-300" />
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-slate-900">
                  Total Amount
                </span>
                <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              disabled={carts.length === 0}
              className={`mt-6 flex h-13 w-full items-center justify-center rounded-2xl 
    ${
      carts.length === 0
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-indigo-600 text-white hover:bg-indigo-700"
    } 
    text-sm font-semibold shadow-lg transition-all duration-300 active:scale-[0.99]`}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
