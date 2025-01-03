import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-myWhite mx-20 mb-36">
      <div
        className="bg-cover bg-center bg-fixed text-center"
        style={{ backgroundImage: 'url("/picture/hero.png")' }}
      >
        <div className="h-screen flex justify-center items-center">
          <div className="rounded">
            {/* <h1 className="text-3xl font-bold mb-8 text-center">Login</h1> */}
            <h1 className="mb-5 -mt-24 scroll-m-20 text-4xl font-extrabold lg:text-5xl text-myWhite \">
              Futuristics <span className="text-black">Clothes</span>
            </h1>

            <p className="mb-5 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 text-myWhite ">
              Upgrade your Wardrop with Sleek & Stylish Apparels and Top-notch
              Shoes.
            </p>
            <a
              href="/products"
              className="mx-auto flex outline outline-myPink outline-2 text-myWhite group hover:outline-myBlack
        bg-myPurple hover:bg-myPurple/90 h-10 w-36 px-4 py-2
       rounded-3xl"
            >
              <div
                className="mr-3 mt-[2px] h-4 w-4 text-lg content-center group-hover:text-myPink 
                group-hover:animate-bounce
            "
              >
                <FaShoppingBag />
              </div>
              <span className="text-center font-semibold"> Shop Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
