import * as React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Offer from "../components/offer";
import About from "../components/about";
import Contact from "../components/contact";
import Gotoup from "../components/gotoup";
const IndexPage = () => {
  return (
    <main className="fadeIn">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dom Szkieletowy - zbuduj z nami swój dom</title>
        <meta
          name="description"
          content="Kompleksowa budowa domów szkieletowych i konstrukcji drewnianych"
        />
      </Helmet>
      <Hero />
      <Offer />
      <About />
      <Contact />
      <Gotoup />
    </main>
  );
};

export default IndexPage;
