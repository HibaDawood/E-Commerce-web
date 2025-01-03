import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-myWhite dark:bg-myPurple dark:text-myPurple -pt-[10px]">
        <div className="container relative mx-auto px-4 py-10 lg:px-4 lg:py-14 xl:max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 font-bold text-5xl text-myBlue/95 dark:text-myBlack">
              ABOUT
              <span className="text-myPink dark:text-myPink"> US</span>
            </h1>
            <h2
              className="mx-auto text-xl font-medium leading-relaxed text-myPurple 
        lg:w-2/3 dark:text-myPurple mb-20"
            >
              Welcome to Chengs Collection, your one-stop destination for trendy
              and stylish girls fashion! Explore our exclusive collection of
              tops, pants, accessories, and shoes designed to elevate your
              wardrobe effortlessly. We pride ourselves on delivering
              high-quality, chic, and affordable styles that keep you ahead of
              the trends. Shop with us and embrace the confidence that comes
              with fashion that fits perfectly!
            </h2>
          </div>

          <div className="relative mx-5 lg:mx-60 mb-16">
            <div
              className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16  rounded-full border
         border-myPurple lg:size-72 dark:border-myPurple"
            ></div>
            <div
              className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border
         border-myPurple lg:size-72 dark:border-myPurple"
            ></div>
            <div
              className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border
         border-myPurple lg:size-72 dark:border-myPurple"
            ></div>
            <div
              className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border
         border-myPurple lg:size-72 dark:border-myPurple"
            ></div>
            <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-myPink/30 lg:-m-8 dark:bg-myPurple"></div>
            <div
              className="absolute inset-0 -m-6 rotate-1 rounded-xl shadow-inner lg:-m-8
         dark:bg-blue-900/75"
            ></div>
            <div>
              <Image
                src={"/picture/about-1.png"}
                alt="about-image"
                width={600}
                height={400}
                className="relative rounded-lg shadow-lg w-[48rem] h-72 bg-no-repeat bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
