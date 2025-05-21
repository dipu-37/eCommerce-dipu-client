import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="bg-green-50 rounded-xl overflow-hidden mt-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        {/* Left Text Content */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Freshness You Can <br /> Trust, Savings You <br /> will Love!
          </h1>
          <div className="flex justify-center md:justify-start gap-4">
            <Link to="/products"><button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
              Shop now
            </button></Link>
            <button className="flex items-center text-gray-800 font-medium hover:underline">
              Explore deals <span className="ml-1">→</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img
            src="../../../src/assets/images/wicker-basket-filled-fresh-vegetables-260nw-2465411187.png"
            alt="Fresh vegetables"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
