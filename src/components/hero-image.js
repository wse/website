import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

const Image = styled(Img)`
  margin: 2rem 1rem;

  @media (max-width: 800px) {
    margin: 2rem;
  }
`
const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hero-image.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <Image fluid={data.placeholderImage.childImageSharp.fluid} />
    }
  />
)
export default HeroImage
