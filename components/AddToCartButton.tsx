import React from "react";
import { Product } from "interfaces";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "store/reducers/productCartSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import QtyBtnComp from "./QtyBtnComp";

interface Props {
  product: Product;
}

const AddToCartButton = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props?.product?.id)
  );
  const dispatch = useAppDispatch();
  if (!qty)
    return (
      <div className="flex justify-center">
        <button
          className="flex items-center px-4 py-2 my-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          onClick={() => dispatch(increment(props?.product))}
        >
          <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-cart4 pr-2"
        viewBox="0 0 16 16"
      >
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
      </svg>
          Add To Cart
        </button>
      </div>
    );
  return (
    <QtyBtnComp
      onDecrease={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
      qty={qty}
    />
  );
};

export default AddToCartButton;
