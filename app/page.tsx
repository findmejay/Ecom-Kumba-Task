import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/app/components/AddToCart.js";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="p-10 bg-white text-black min-h-screen">
      <div className="flex justify-between max-sm:mb-10 sm:mb-12">
        <h1 className="text-3xl font-bold mb-6 text-[#232323]">Products</h1>
        <Link href="/cart">
          <button className="bg-linear-to-r from-[#E2A4DD] to-[#F9C383] text-[#1e1e1e] flex justify-center items-center px-4 py-2 gap-3 w-fit rounded">
            {" "}
            <i className="ri-shopping-bag-line p-0 m-0"></i>
            <span className="leading-0 max-sm:hidden text-[1rem]">Go To Cart</span>
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
        {products.slice(0, 20).map((product) => (
          <div key={product.id}>
            <Link href={`/product/${product.id}`}>
              <div className=" rounded-lg cursor-pointer">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="bg-[#f5f5f5] h-auto w-full object-cover rounded "
                ></Image>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="mt-2 font-semibold line-clamp-1">{product.title}</h2>{" "}
                  <p className="text-gray-600">${product.price}</p>{" "}
                </div>
              </div>
            </Link>
            <AddToCart product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
