import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function GridProduct() {
  const nav = useNavigate()
  return (
    <div className="gap-4 p-8">
      <div className="flex flex-col md:pb-32 relative">
        <img
          className="max-w-[300px] bg-black"
          src="https://picsum.photos/id/63/500/500"
          alt=""
        />
        <div className="max-w-[262px] md:absolute bg-white p-2 flex flex-col gap-2 md:top-60 md:left-2">
          <div className="text-2xl font-semibold">Hazelnut Latte</div>
          <p className="text-gray-600">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>
          <p className="text-orange-400 text-2xl">IDR 20.000</p>
          <div className="flex flex-col md:flex-row md:gap-4 gap-2 w-full">
            <button onClick={()=>{nav("/detail-product")}} className="md:w-3/4 w-full bg-orange-400 rounded-[6px] p-2">
              Buy
            </button>
            <button className="md:w-1/4 p-3 w-full border border-orange-400 flex justify-center items-center text-orange-400 rounded-xl">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridProduct;
