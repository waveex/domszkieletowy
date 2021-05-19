import React from "react";
import WalczDom from "./galery/walczDom";
import Rewal from "./galery/rewal";
import Trzebiatow from "./galery/trzebiatow";
import Wegorzewo from "./galery/wegorzewo";
import WiezbaRewal from "./galery/wiezba-rewal";
import Janki from "./galery/janki";
import Jaromin from "./galery/jaromin";
import Jozefow from "./galery/jozefow";
import Luban from "./galery/luban";
import Slupno from "./galery/slupno";

const Projects = () => {
  return (
    <div>
      <div id="realizacje" className="bg-white">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mt-4 text-lg text-gray-500">
              Zapraszamy do galerii zdjęć z realizacji wykonanych w całej
              Polsce.
            </p>
          </div>
          <dl className="grid-rows-10 ">
            <div className="grid overflow-hidden">
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Dom w Walczu
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <WalczDom className=" overflow-hidden" />
                </dd>
              </div>
            </div>
            <div className="grid overflow-hidden">
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Dom w Rewalu
                </dt>
                <dd className="mt-2 text-base text-gray-500 project">
                  <Rewal className=" overflow-hidden" />
                </dd>
              </div>
            </div>
            <div className="grid overflow-hidden">
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Józefów
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {" "}
                  <Jozefow className=" overflow-hidden" />
                </dd>
              </div>
            </div>
            <div className="grid overflow-hidden">
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Dom w Węgorzewie
                </dt>
                <Wegorzewo className=" overflow-hidden" />
              </div>
            </div>
            <div className="grid overflow-hidden">
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Więźba w Rewalu
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <WiezbaRewal className=" overflow-hidden" />
                </dd>
              </div>
            </div>
            <div className="grid overflow-hidden">
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Dom w Trzebiatowie
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <Trzebiatow className=" overflow-hidden" />
                </dd>
              </div>
            </div>

            <div className="grid overflow-hidden">
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Budowa w Jankach
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <Janki className=" overflow-hidden" />
                </dd>
              </div>
            </div>
            <div className="grid overflow-hidden">
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Jaromin
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {" "}
                  <Jaromin className=" overflow-hidden" />
                </dd>
              </div>
            </div>
            <div className="grid overflow-hidden">
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Lubań
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {" "}
                  <Luban className=" overflow-hidden" />
                </dd>
              </div>
              <div className="grid overflow-hidden">
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Dom słupno
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    <Slupno className=" overflow-hidden" />
                  </dd>
                </div>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Projects;
