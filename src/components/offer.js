import React from "react";

const Offer = () => {
  return (
    <div>
      <div id="oferta" className="bg-white ">
        <div className="max-w-7xl mx-auto offer-container md:py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl offer-header grid-1-3">
            <h2 className=" flex justify-center self-center text-5xl brown  font-extrabold text-gray-900">
              Oferta
            </h2>
            <p className="mt-3 offer-text text-3xl text-gray-500 sm:mt-5 sm:text-xl lg:text-3xl xl:text-xl">
              Realizujemy projekty <b> budowy domów szkieletowych </b>i różnych
              konstrukcji wykonanych z drewna, które są świetnym rozwiązaniem
              pod względem jakości, ergonomii, a także czasu realizacji. Jednak
              każdy projekt wymaga odpowiedniego wykonawcy.
            </p>
          </div>
          <div className=" grid-1">
            <p className="mt-4 offer-text text-3xl text-gray-500 text-center">
              Oferta naszej firmy jest bogata w nowoczesne rozwiązania przy
              współpracy z wieloma dostawcami materiałów zarówno z Polski jak i
              zagranicy.
              <b> Prace wykonujemy w obrębie 100 kilometrów od Warszawy.</b>
            </p>
          </div>
          <div className="grid-1-3 offer-services">
            <p className="mt-4 flex justify-center self-center text brown text-5xl font-extrabold">
              Zakres usług:
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-8">
            <div className="flex">
              {/* Heroicon name: outline/check */}

              <div className="ml-3 offer-item">
                <dt className="text-3xl leading-6 font-medium text-gray-900 darkGreen">
                  Domy szkiletowe
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Kompleksowa budowa domów i budynków użytkowych o konstrukcji
                  szkieletowej
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: outline/check */}

              <div className="ml-3 offer-item">
                <dt className="text-3xl leading-6 font-medium text-gray-900 darkGreen">
                  Więźby dachowe
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Budujemy konstrukcje wieźb dachowych dla domów.
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: outline/check */}

              <div className="ml-3 offer-item">
                <dt className="text-3xl leading-6 font-medium text-gray-900 darkGreen">
                  Elewacje drewniane
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Elewacje drewniane są przykłądem możliwości jakie oferuje nam
                  drewno, nadająć budynkowi oryginalny wygląd.
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: outline/check */}

              <div className="ml-3 offer-item">
                <dt className="text-3xl leading-6 font-medium text-gray-900 darkGreen">
                  Tarasy
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Drewniane taras to miejsce gdzie spędzisz niezpomniane chwile
                  ze swoimi bliskimi, są też idealną formą ozdoby Twojego domu.
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: outline/check */}

              <div className="ml-3 offer-item">
                <dt className="text-3xl leading-6 font-medium text-gray-900 darkGreen">
                  Altany
                </dt>
                <dd className="mt-2 text-base text-gray-500"></dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: outline/check */}

              <div className="ml-3 offer-item">
                <dt className="text-3xl leading-6 font-medium text-gray-900 darkGreen">
                  Renowacje obiektów drewnianych
                </dt>
                <dd className="mt-2 text-base text-gray-500"></dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: outline/check */}

              <div className="ml-3 offer-item">
                <dt className="text-3xl leading-6 font-medium text-gray-900 darkGreen">
                  W okresie zimowym prace wykończeniowe “suche” np. montaż płyt,
                  układanie podłóg
                </dt>
                <dd className="mt-2 text-base text-gray-500"></dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: outline/check */}

              <div className="ml-3 offer-item">
                <dt className="text-3xl leading-6 font-medium text-gray-900 darkGreen">
                  Remonty generalne
                </dt>
                <dd className="mt-2 text-base text-gray-500"></dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Offer;
