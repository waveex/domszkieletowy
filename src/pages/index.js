import * as React from "react";
import Hero from "../components/hero";
import Offer from "../components/offer";
import About from "../components/about";
import Contact from "../components/contact";
import Gotoup from "../components/gotoup";
const IndexPage = () => {
  return (
    <main className="fadeIn">
      <Hero />
      <Offer />
      <About />
      <Contact />
      <Gotoup />
    </main>
  );
};

export default IndexPage;
