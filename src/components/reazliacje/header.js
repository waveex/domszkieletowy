import React from "react";
import NavReal from "../header/navPodzakladka";
const Header = () => {
  return (
    <div id="#ofirmie" className="relative py-16 bgDechy overflow-hidden ">
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <NavReal />

        <main className=" ">
          <div className="">
            <div className="center">
              <h1>
                <span className="mt-1 block  tracking-tight  sm:text-5xl xl:text-6xl text-center">
                  <span className="block  hero__title ">Dom szkieletowy </span>
                  <span className="block hero__title">Realizacje</span>
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

export default Header;
