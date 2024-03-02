"use client";
import React from "react";
import AddToCartButton from "../../../components/AddToCartButton";
import useProductDesc from '../../../hooks/useProductDesc';
import { Param, Product } from "../../../interfaces";
import styles from "../../../styles/Common.module.css";

interface Props {
  params: Param;
}

const DetailsPage = ({ params }: Props) => {
  const { id } = params;
  const product = useProductDesc(id) as Product | null;

  if (!product) {
    return <div className="flex justify-center align-middle"><div className={`${styles["loader"]}`}/></div>;
  }

  return (
    <>
    <h1 className="font-bold text-lg my-4 mx-4 mt-8">Product Description</h1>
    <div className="container mx-auto px-4 py-4 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full md:w-60 h-auto"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold mb-4">{product?.title}</h1>
          <p className="mb-4">{product?.description}</p>
          <p className="text-lg mb-4 font-bold text-red-500">Price : ₹ {product?.price}</p>
          <div className="flex justify-left">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DetailsPage;
