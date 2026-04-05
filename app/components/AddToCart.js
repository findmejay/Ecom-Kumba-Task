"use client"

import { useState } from "react"

export default function AddToCart({product, onAdd}){
    const [added, setAdded] = useState(false);
    console.log(product)

    const handleAdd = ()=>{
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        setAdded(true);
        onAdd();
    }

    return(
        <button onClick={handleAdd} className="mt-4 rounded-sm sm:text-[0.875rem] lg:text-[1.1rem] w-full bg-linear-to-r from-[#E2A4DD] to-[#F9C383] text-[#1e1e1e] flex justify-center items-center px-4 py-2">
            {added ? "Added ✅" : "Add to Cart"}
        </button>
    )
}