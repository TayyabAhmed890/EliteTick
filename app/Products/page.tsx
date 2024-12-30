import React from "react";
import { productData } from "./data/products";
import Link from "next/link";
import { Poppins } from 'next/font/google';
const Pop = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
});


const Products = () => {
  return (
    <>
      <h1 className={`${Pop.className} text-center font-bold text-3xl`}>Products</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-9 mx-auto">
          <div className="flex items-center justify-center flex-wrap -m-4">
            {productData.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-auto">
                <div>
                  <Link href={`/Products/${product.id}`} className="block relative h-48 rounded overflow-hidden">
                 
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={product.image}
                        style={{ width: '420px', height: '100%' }} // Fixed dimensions
                      />
                 
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.name}
                    </h2>
                    <p className="mt-1">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
