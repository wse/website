import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  margin-top: 20px; 
  margin-bottom: 20px;
`

const Content = styled.div`
  font-family: serif;
  margin: auto;
  margin-top: 20px;
  border-top: 1px solid;
  padding: 20px;
  p {
    padding-bottom: 20px;
    padding-top: 20px;
    border-bottom: 1px solid #efefef;
  }
`

export default function BookSummary({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const post = data.ghostPost // data.markdownRemark holds our post data
  const { title, html } = post;

  return (
    <Layout>
      <Title>
        {title}
      </Title>
      <Content
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`
