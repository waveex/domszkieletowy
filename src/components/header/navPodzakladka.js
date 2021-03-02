import React from "react";
import { Link } from "gatsby";
const NavReal = () => {
  return (
    <div>
      <div className="relative pt-6 ">
        <nav
          className="relative max-w-7xl mx-auto flex items-start  px-4 sm:px-6    "
          aria-label="Global"
        >
          <div className="flex items-center flex-1 justify-center">
            <div className="hidden md:block md:ml-10 md:space-x-10 ">
              <Link
                to="..//"
                className="text-3xl white link text-gray-500 hover:text-gray-900"
              >
                Strona główna
              </Link>
              <Link
                to="kontakt"
                className="text-3xl white link text-gray-500 hover:text-gray-900"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavReal;
