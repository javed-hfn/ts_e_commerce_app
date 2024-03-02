"use client";
import React from "react";
import ProductCards from "components/ProductCards";
import useAllProducts from "hooks/useAllProducts";
import styles from "../styles/Common.module.css";

const LandingPage = () => {
  const products = useAllProducts();

  return (
    <>
      {products?.length === 0 ? (
        <div className="flex justify-center align-middle">
          <div className={`${styles["loader"]}`} />
        </div>
      ) : (
        <div className="container mx-auto px-5 mt-8">
          <h1 className="font-bold text-lg my-2">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products?.map((product, index) => (
              <ProductCards key={index} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
