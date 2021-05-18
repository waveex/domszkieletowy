import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

const Gotoup = () => {
  //  let y = window.scrollY;
  //   const scrollToTopButton = document.getElementById("gotoup");
  //   if (y > 0) {
  //     scrollToTopButton.className = "gotoup-show";
  //   } else {
  //     scrollToTopButton.className = "gotoup-hide";
  //   }

  return (
    <div className="bg-opacity-0">
      <div id="gotoup" className="gotoup">
        <a onClick={() => scrollTo("#hero")}>^</a>
      </div>
    </div>
  );
};

export default Gotoup;
