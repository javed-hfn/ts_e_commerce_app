import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productCartSlice } from "./reducers/productCartSlice";

const initialCartItems = localStorage.getItem("productCartItems")
  ? JSON.parse(localStorage.getItem("productCartItems") as string)
  : [];

export const store = configureStore({
  reducer: {
    cart: productCartSlice.reducer,
  },
  preloadedState: {
    cart: {
      productCartItems: initialCartItems,
    },
  },
});

store.subscribe(() => {
  const { productCartItems } = store.getState().cart;
  localStorage.setItem("productCartItems", JSON.stringify(productCartItems));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
