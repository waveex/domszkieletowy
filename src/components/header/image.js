import * as React from "react";
import { useStaticQuery , graphql  } from "gatsby";

import Img from "gatsby-image";


const Image = () => {
  const data = useStaticQuery(graphql`
  query {
  obrazek: file(relativePath: {eq: "header.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
        }
      }
    }

  }
  `);
  return(
    <Img className=" rounded-lg h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" fluid={data.obrazek.childImageSharp.fluid} />

   );}

export default Image;

