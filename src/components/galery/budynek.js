
import * as React from "react";
import { useStaticQuery , graphql  } from "gatsby";

import Img from "gatsby-image";

const Budynek = () => {
    const data = useStaticQuery(graphql`
    {
     allFile(filter: {relativeDirectory: {eq: "rewal"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `);
return(
 <div>
 {data.allFile.edges.map( ({node}) =>(
 <Img className="mt-10"
 fluid={node.childImageSharp.fluid}
 /> ) ) }

 </div>
);
    }

export default Budynek
