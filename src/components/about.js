import React from "react";


const About = () => {
  return (
    <div>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                Introducing
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                O Firmie dom szkieletowy
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              O Firmie dom szkieletowy Jesteśmy małą firmą z wieloletnim
              doświadczeniem zdobytym w USA, Norwegii i na terenie Polski.
              Budujemy bezpieczne, solidne i energooszczędne domy oraz obiekty
              użytkowe. Nasze wykonanie jest nastawione na jakość, nie na ilość,
              każdy realizowany przez nas projekt jest przedsięwzięciem
              indywidualnym. W celu uzyskania najlepszej jakości i czasu
              realizacji współpracujemy z wieloma dostawcami zarówno z Polski
              jak i za granicy. [ dostawcy, mogą być ikonki z opisem ] Drewno
              C24 - Szwecja i Norwegia, Drewno BSH, KVH, Steico - Niemcy i
              Austria .
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
