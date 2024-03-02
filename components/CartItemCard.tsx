import React from "react";
import { decrement, increment } from "store/reducers/productCartSlice";
import { useAppDispatch } from "store/store";
import QtyBtnComp from "./QtyBtnComp";
import { Product } from "../interfaces";

export interface CartItem {
  product: Product;
  qty: number;
}

interface Props {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="grid shadow  grid-cols-1 sm:grid-cols-4 items-center py-2 mb-5 border-b">
      <div className="sm:col-span-1 flex justify-center mb-3 sm:mb-0">
        <img
          src={cartItem?.product?.image}
          width={80}
          height={80}
          alt={cartItem?.product?.title}
          className="rounded-md"
        />
      </div>
      <div className="sm:col-span-1 flex items-center justify-center mb-2 sm:mb-0">
        <p className="text-slate-600 text-center">{cartItem?.product?.title}</p>
      </div>
      <div className="sm:col-span-1 flex justify-center mb-2 sm:mb-0">
        <QtyBtnComp
          qty={cartItem?.qty}
          onDecrease={() => dispatch(decrement(cartItem?.product))}
          onIncrease={() => dispatch(increment(cartItem?.product))}
        />
      </div>
      <div className="sm:col-span-1 flex justify-center">
        <p className="text-center text-green">₹ {(cartItem?.qty * cartItem?.product?.price).toFixed(2)} </p>
      </div>
    </div>
  );
};

export default CartItemCard;
