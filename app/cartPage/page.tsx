"use client";
import React from "react";
import Link from "next/link";
import CartItemCard from "components/CartItemCard";
import { TotalPriceSelector } from "store/reducers/productCartSlice";
import { useAppSelector } from "store/store";

const CartPage = () => {
  const productCartItems = useAppSelector(
    (state) => state.cart.productCartItems
  );

  const totalPrice = useAppSelector(TotalPriceSelector);

  return (
    <>
      {productCartItems?.length === 0 ? (
        <Link
          className="flex font-bold text-lg my-4 mx-4 h-auto text-blue-800"
          href={"/"}
        >
          No Items in your cart, Click here to explore our products.
        </Link>
      ) : (
        <>
          <h1 className="font-bold text-lg my-4 mx-4 mt-8 mb-8">Cart Items</h1>
          <div className="p-2 mt-5 flex flex-col sm:flex-row">
            <div className="w-full sm:w-3/4 mb-4 sm:mb-0 md:mt-5 sm:mt-5">
              {productCartItems?.map((item, index) => (
                <CartItemCard key={index} cartItem={item} />
              ))}
            </div>

            <div className="w-full sm:w-1/4 ml-auto pl-5">
              <div className="py-3">
                <p className="text-slate-600">
                  Total Payable Amount:{" "}
                  <span className="text-slate-900 font-bold">
                    {totalPrice.toFixed(2)} ₹
                  </span>
                </p>
              </div>
              <div className="py-3 flex justify-center">
                <button className="flex items-center px-4 py-2 my-2 bg-green-600 text-white rounded-md hover:bg-green-500 focus:outline-none">
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartPage;
