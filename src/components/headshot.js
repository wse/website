import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

const RoundImage = styled(Img)`
  border-radius: 50%;
  width: 128px;
  height: 128px;
`
const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "headshot.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <RoundImage fluid={data.placeholderImage.childImageSharp.fluid} />
    }
  />
)
export default Image
