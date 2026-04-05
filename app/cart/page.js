"use client";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      setCart([]);
    }
  }, []);

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="p-10 h-screen w-full bg-[#f9f9f9] text-3xl font-bold mb-6 text-[#232323] flex flex-col items-center relative">
      
      <Link href={`/`} className="absolute top-9 left-10">
        <i className="ri-arrow-left-s-line text-[#272727] font-medium text-[2rem] h-fit p-0"></i>
      </Link>
      <h1 className="text-[2rem] font-extrabold mb-12">Cart</h1>

      {cart.length === 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        <div className="flex max-sm:w-80 sm:w-100 md:w-120 lg:w-180 flex-col gap-4">
          {cart.map((item, idx) => (
            <div key={idx} className=" border bg-[#f3f3f3] rounded-sm  w-full border-[#e0e0e0] p-2 justify-between items-center flex gap-4">
              <img
                src={item.images[0]}
                className="w-24 h-24 object-cover "
                alt={item.title}
              />
              <div className="flex flex-col justify-between gap-4 p-4 w-full">
                <div className="flex flex-col gap-1">
                  <h2 className="text-[1rem] font-medium">{item.title}</h2>
                  <p className="text-[0.9rem] font-light text-[#8d8d8d]">₹{item.price}</p>
                </div>
                <button
                  onClick={() => removeItem(idx)}
                  className="flex justify-center items-center py-2 px-10 w-fit font-medium text-white text-[0.875rem] rounded-sm bg-[#ff3f3f]"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
