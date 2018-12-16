import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  margin-top: 20px; 
`

const Author = styled.h2`
  text-align: center;
`

const Content = styled.div`
  margin: auto;
  margin-top: 20px;
  border-top: 1px solid;
  padding-top: 20px;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <SEO title="Nishant Dania | Book Summaries" keywords={['developer', 'photography', 'software', 'books']} />
      <Title>
        {frontmatter.title}
      </Title>
      <Author>
        by {frontmatter.bookAuthor}
      </Author>
      <Content
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        bookAuthor
      }
    }
  }
`
