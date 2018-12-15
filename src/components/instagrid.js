import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Square = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin: 0 10px 20px;
`

const Instagrid = () => (
  <StaticQuery
    query={graphql`
      query {
        nz1: file(relativePath: { eq: "new_zealand1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        nz2: file(relativePath: { eq: "new_zealand2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        nz3: file(relativePath: { eq: "new_zealand3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        b1: file(relativePath: { eq: "bhutan1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        b2: file(relativePath: { eq: "bhutan2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        b3: file(relativePath: { eq: "bhutan3.jpg" }) {
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
        <Square><Img fluid={data.nz1.childImageSharp.fluid} /></Square>
        <Square><Img fluid={data.nz2.childImageSharp.fluid} /></Square>
        <Square><Img fluid={data.nz3.childImageSharp.fluid} /></Square>
        <Square><Img fluid={data.b1.childImageSharp.fluid} /></Square>
        <Square><Img fluid={data.b2.childImageSharp.fluid} /></Square>
        <Square><Img fluid={data.b3.childImageSharp.fluid} /></Square>
      </Container>
    }
  />
)
export default Instagrid 
