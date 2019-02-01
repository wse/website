import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

const Square = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
`

const SocialLinks = () => (
  <StaticQuery
    query={graphql`
      query {
        instagram: file(relativePath: { eq: "instagram-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        twitter: file(relativePath: { eq: "twitter-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        github: file(relativePath: { eq: "github-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        linkedin: file(relativePath: { eq: "linkedin-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        behance: file(relativePath: { eq: "behance-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <Container>
        <Square><Img fluid={data.instagram.childImageSharp.fluid} /></Square>
        <Square><Img fluid={data.twitter.childImageSharp.fluid} /></Square>
        <Square><Img fluid={data.github.childImageSharp.fluid} /></Square>
        <Square><Img fluid={data.linkedin.childImageSharp.fluid} /></Square>
        <Square><Img fluid={data.behance.childImageSharp.fluid} /></Square>
      </Container>
    }
  />
)
export default SocialLinks 
