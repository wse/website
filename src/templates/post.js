import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 32px 24px;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  max-width: 250px;
  padding-bottom: 20px;
  padding-top: 72px;
  text-transform: capitalize;
`

const Divider = styled.div`
  height: 8px;
  background: #000;
  max-width: 150px;
`

const DateContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 48px;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;

  div {
    font-weight: normal;
    padding: 8px 0;
  }
`

const Content = styled.div`
  line-height: 32px;

  h1 {
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 16px;
    padding-top: 40px;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  p {
    padding-bottom: 16px;
  }

  hr {
    margin-bottom: 32px;
    margin-top: 16px;
    border-top: 1px solid #eaeaea;
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { title, date } = frontmatter

  return (
    <Container>
      <Title>{title}</Title>
      <Divider />
      <DateContainer>
        <div>Published on</div>
        {date}
      </DateContainer>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
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
