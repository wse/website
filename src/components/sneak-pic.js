import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

const Grid = styled(Img)`
  margin: 1rem;
  width: auto;
`
const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "sneak-pic.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <Grid fluid={data.placeholderImage.childImageSharp.fluid} />
    }
  />
)
export default Image
