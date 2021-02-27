import * as React from "react";
import Image from "./header/image";
import Nav from "./header/nav";

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden tlo">
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <Nav />

        <main className=" ">
          <div className="">
            <div className="center">
              <h1>
                <span className="mt-1 block  tracking-tight  sm:text-5xl xl:text-6xl text-center">
                  <span className="block  hero__title ">Dom szkieletowy </span>
                  <span className="block text-3xl mt-8 white">
                    Zapraszamy do zapoznania się z naszą ofertą i
                    dotychczasowymi realizacjami.
                  </span>
                </span>
              </h1>
            </div>
            <div className="mt-1 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
