import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import InstaGrid from '../components/instagrid'
import Layout from '../components/layout'

const GridContainer = styled.div`
  margin-top: 20px;
`
const InstaSlugContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  .gatsby-image-wrapper {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    opacity: 0.6;
  }
  a {
    display: flex;
    justify-content: center;
    color: #5a5a5a;
  }
`

const InstagramSlug = () => (
  <a
    href="https://instagram.com/nishantdania"
    target="_blank"
    rel="noopener noreferrer"
  >
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "instagram-icon.png" }) {
            childImageSharp {
              fluid(maxWidth: 24) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data =>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      } 
    />
    View more on Instagram
  </a>
)

const PhotographyPage = () => (
  <Layout>
    <SEO title="Photography" keywords={['developer', 'photography', 'software', 'books']} />
    <GridContainer>
      <InstaGrid />
    </GridContainer>
    <InstaSlugContainer>
      <InstagramSlug />
    </InstaSlugContainer>
  </Layout>
)

export default PhotographyPage 
