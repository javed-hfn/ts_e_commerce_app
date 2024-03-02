import React from "react";
import Link from "next/link";
import { Product } from "../interfaces";
import AddToCartButton from "./AddToCartButton";
import styles from "../styles/LandingPage.module.css";

interface Props {
  product: Product;
}

const ProductCards = ({ product }: Props) => {
  return (
    <div className="border p-4 shadow-md text-center my-4">
      <Link href={`/product/${product?.id}`}>
      <div className={styles["product-img"]}>
        <img src={product?.image} alt="product_img" className="p-5"/>
      </div>
        <h4 className={`${styles["product-title"]} py-2`}>{product?.title}</h4>
      </Link>
      <h5 className="font-semibold">₹ {product?.price}</h5>
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductCards;
