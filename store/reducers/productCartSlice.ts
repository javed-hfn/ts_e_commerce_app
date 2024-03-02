import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "interfaces";
import { RootState } from "store/store";

export interface CartState {
  productCartItems: CartItem[];
}
const initialState: CartState = {
  productCartItems: [],
};

export const productCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Product>) => {
      const cartItem = state.productCartItems.find(
        (el) => el.product.id === action.payload.id
      );
      if (cartItem) cartItem.qty++;
      else {
        state.productCartItems.push({
          product: action.payload,
          qty: 1,
          quantity: 0,
          id: 0,
          title: "",
          price: 0,
          description: "",
          category: "",
          image: "",
          rating: {
            count:0,
            rate:0
          }
        });
      }
    },

    decrement: (state, action: PayloadAction<Product>) => {
      const cartItem = state.productCartItems.find(
        (el) => el.product.id === action.payload.id
      );
      if (cartItem) {
        cartItem.qty--;
        if (cartItem.qty === 0) {
          state.productCartItems = state.productCartItems.filter(
            (el) => el.product.id !== action.payload.id
          );
        }
      }
    },
  },
});

const productCartItems = (state: RootState) => state?.cart?.productCartItems;

export const productQtyInCartSelector = createSelector(
  [productCartItems, (productCartItems, productId: number) => productId],
  (productCartItems, productId) =>
    productCartItems.find((el) => el.product?.id === productId)?.qty
);

export const totalCartItemsSelector = createSelector([productCartItems], (productCartItems) =>
  productCartItems.reduce((total: number, curr: CartItem) => (total += curr.qty), 0)
);
export const TotalPriceSelector = createSelector([productCartItems], (productCartItems) =>
  productCartItems.reduce(
    (total: number, curr: CartItem) => (total += curr.qty * curr.product.price),
    0
  )
);

export const { increment, decrement } = productCartSlice.actions;

export default productCartSlice.reducer;
