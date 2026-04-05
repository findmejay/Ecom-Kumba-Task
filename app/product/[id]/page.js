"use client";
import * as React from "react";
import Link from "next/link";

import { useState, useEffect } from "react";
import PinturaEditor from "@/app/components/PinturaEditor";
import AddToCart from "../../components/AddToCart";

export default function ProductPage({ params }) {
  const { id } = React.use(params);

  const [product, setProduct] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();

      setProduct(data);
      setImage(data.thumbnail);
    }

    fetchProduct();
  }, [id]);

  if (!product) return <h1>Loading...</h1>;

  return (
    <div className="bg-[#f4f4f4] max-sm:p-4 max-sm:gap-2 sm:gap-4 md:gap-6 lg:gap-14 sm:p-16   lg:p-16 flex max-sm:flex-col min-h-screen">
      <Link href={`/`}>
        <i className="ri-arrow-left-s-line text-[#272727] text-[2rem] h-fit p-0"></i>
      </Link>

      <div>
        <img
          src={image || product.thumbnail}
          alt={product.title}
          className="h-auto max-sm:w-full sm:w-180 md:w-190 lg:w-[72vw] object-cover rounded bg-[#e6e6e6]"
          loading="eager"
        />
      </div>

      <div className="max-sm:block md:hidden lg:hidden xl:hidden sm:hidden">
        <PinturaEditor imageUrl={image} setImage={setImage} />
        <AddToCart />
      </div>

      <div className="flex flex-col sm:gap-2 lg:gap-4 max-sm:mt-6 sm:px-4 lg:px-14 ">
        <h1 className="text-3xl font-bold sm:text-2xl mt-4 text-[#161616] lg:text-3xl">
          {product.title}
        </h1>
        <p className="text-gray-700 sm:text-[0.9rem] lg:text-[1rem]">
          {product.description}
        </p>
        <h2 className="text-gray-600 text-2xl mt-2 sm:text-2xl">
          ${product.price}
        </h2>
        <div className="max-sm:hidden">
          <PinturaEditor imageUrl={image} setImage={setImage} />
          <AddToCart />
        </div>
      </div>
    </div>
  );
}
