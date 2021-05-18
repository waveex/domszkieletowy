import React from "react";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
const NavReal = () => {
  return (
    <div>
      <div id="hero" className="relative pt-6 ">
        <nav
          className="relative max-w-7xl mx-auto flex items-start  px-4 sm:px-6    "
          aria-label="Global"
        >
          <div className="flex items-center flex-1 justify-center">
            <div className=" md:block md:ml-10 md:space-x-10 ">
              <Link
                to="..//"
                className="text-3xl link text-gray-500 hover:text-gray-900"
              >
                Strona główna
              </Link>
              <a
                onClick={() => scrollTo("#realizacje")}
                className="text-3xl link text-gray-500 hover:text-gray-900"
              >
                Realizaje
              </a>
              <a
                onClick={() => scrollTo("#kontakt")}
                className="text-3xl link text-gray-500 hover:text-gray-900"
              >
                Kontakt
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavReal;
