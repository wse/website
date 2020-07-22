import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PageHeader from '../components/page-header'
import Layout from '../components/layout'

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

  h2 {
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 8px;
    padding-top: 20px;
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
    border-top: 1px solid #efefef;
  }

  ul {
    counter-reset: item;
    li {
      padding: 32px 0;
      border-bottom: 1px solid #efefef;
      :before {
        counter-increment: item;
        content: counter(item) '.';
        padding: 16px 0;
        padding-right: 16px;
        font-weight: bold;
        display: none;
      }
    }
  }

  ol {
    list-style: none;
    li {
      padding: 32px 0;
      border-bottom: 1px solid #efefef;
    }
  }

  a {
    color: black;
    text-decoration: underline;
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { title, date } = frontmatter

  return (
    <Layout>
      <PageHeader title={title} alwaysShow />
      <DateContainer>
        <div>Published on</div>
        {date}
      </DateContainer>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
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
