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
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Nasze realizacje
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Zapraszamy do galerii zdjęć z realizacji wykonanych w całej Polsce.
        </p>
      </div>
      <div className="flex flex-row w-full">
        <div className=" p-0 shadow-3xl mt-4 h-auto ">
          <Wegorzewo />
        </div>
        <div className=" p-0 shadow-3xl mt-4 h-auto ">
          <WalczDom />
        </div>
        <div className=" p-0 shadow-3xl mt-4 h-auto ">
          <Slupno />
        </div>
        <div className=" p-0 shadow-3xl mt-4 h-auto ">
          <Rewal />
        </div>
        <div className=" p-0 shadow-3xl mt-4 h-auto ">
          <Trzebiatow />
        </div>
        <div className=" p-0 shadow-3xl mt-4 h-auto ">
          <WiezbaRewal />
        </div>
        <div className=" p-0 shadow-3xl mt-4 h-auto ">
          <Janki />
        </div>{" "}
        <div className=" p-0 shadow-3xl mt-4 h-auto ">
          <Jaromin />
        </div>{" "}
        <div className=" p-0 shadow-3xl mt-4 h-auto ">
          <Jozefow />
        </div>{" "}
        <div className=" p-0 shadow-3xl mt-4 h-auto ">
          <Luban />
        </div>
      </div>
    </div>
  );
};

export default Projects;
