
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'



const Trzebiatow = () => {
  const data = useStaticQuery(graphql`
    {
     allFile(filter: {relativeDirectory: {eq: "trzebiatow"}}) {
        edges {
          node {
            base
            childImageSharp {
              thumb: fluid(maxWidth: 270, maxHeight: 270, quality: 90) {
                ...GatsbyImageSharpFluid
              }
              full: fluid(maxWidth: 1024, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
 ` );
  console.log(data);
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  console.log(images);
  return (

    <Gallery images={images} />


  );
}

export default Trzebiatow
