import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PageHeader from '../components/page-header'

const Container = styled.div`
  width: 800px;
  background: black;
  height: 418px;
  overflow: hidden;
`

const InnerContainer = styled.div`
  background: white;
  border-radius: 12px;
  height: 100%;
  padding: 24px;
  transform: translate(50px, 100px);
`

const DateContainer = styled.div`
  padding-top: 20px;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;

  div {
    font-weight: normal;
    padding: 8px 0;
  }
`

const SiteName = styled.div`
  font-weight: bold;
  font-size: 14px;
  opacity: 80%;
  padding-top: 20px;
  margin-top: 20px;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark
  const { title, date } = frontmatter

  return (
    <Container>
      <InnerContainer>
        <PageHeader title={title} alwaysShow />
        <DateContainer>
          <div>Published on</div>
          {date}
        </DateContainer>
        <SiteName>nishantdania.com</SiteName>
      </InnerContainer>
    </Container>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
