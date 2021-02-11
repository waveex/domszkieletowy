import React from "react";
import WalczDom from "./galery/walczDom";
import Rewal from "./galery/rewal";
import Trzebiatow from "./galery/trzebiatow";
import Wegorzewo from "./galery/wegorzewo";
import WiezbaRewal from "./galery/wiezba-rewal";

const Projects = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Nasze realizacje</h2>
            <p className="mt-4 text-lg text-gray-500">
           Zapraszamy do galerii zdjęć z realizacji wykonanych w całej Polsce.
            </p>

          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-5 lg:gap-x-8">
            <div className="flex">
              {/* Heroicon name: outline/check */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                 Dom w Walczu
                </dt>
                <dd className="mt-2 text-base text-gray-500">
          <WalczDom />
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: outline/check */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
             Dom w Rewalu
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                 <Rewal />
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: outline/check */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
          Więźba w Rewalu
                </dt>
                <dd className="mt-2 text-base text-gray-500">
             <WiezbaRewal />
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: outline/check */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
            Dom w Trzebiatowie
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                <Trzebiatow />
                </dd>
              </div>
            </div>
            <div className="flex">
              {/* Heroicon name: outline/check */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
            Dom w Węgorzewie
                </dt>
            <Wegorzewo />
              </div>
            </div>
           {/* <div className="flex">
              {/* Heroicon name: outline/check */}
              {/* <svg
                className="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Renowacje obiektów drewnianych
                </dt>
                <dd className="mt-2 text-base text-gray-500"></dd>
              </div>
            </div>
            <div className="flex"> */}
              {/* Heroicon name: outline/check */}
              {/* <svg
                className="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  W okresie zimowym prace wykończeniowe “suche” np. montaż płyt,
                  układanie podłóg
                </dt>
                <dd className="mt-2 text-base text-gray-500"></dd>
              </div>
            </div>
            <div className="flex"> */}
              {/* Heroicon name: outline/check */}
              {/* <svg
                className="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  remonty generalne
                </dt>
                <dd className="mt-2 text-base text-gray-500"></dd>
              </div>
            </div>  */}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Projects;
