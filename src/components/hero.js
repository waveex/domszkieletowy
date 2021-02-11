import * as React from "react"
import Image from './header/image'
import Nav from './header/nav'

const Hero = () => {

  return (

    <div className="relative bg-white overflow-hidden">

      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <Nav />

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>

                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Dom szkieletowy </span>
                  <span className="block text-2xl ">Zapraszamy do zapoznania się z naszą ofertą i dotychczasowymi realizacjami. </span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Realizujemy projekty budowy domów szkieletowych i różnych konstrukcji wykonanych z drewna, które są świetnym rozwiązaniem pod względem jakości, ergonomii, a także czasu realizacji. Jednak każdy projekt wymaga odpowiedniego wykonawcy.
            </p>

            </div>
            <div className="mt-1 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">

              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <Image ></Image>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

  );
}


export default Hero;
