import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Image = styled(Img)`
  bottom: 0;
  left: 0;
  right: auto;
  top: 0;
  width: 100%;
`

const HeroImage = ({ imagePath }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Image
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{ position: `fixed` }}
    />
  )
}

export default HeroImage
