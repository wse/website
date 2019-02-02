import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Nav from '../components/nav'
import Footer from '../components/footer'
import '../components/layout.css'
import { MetaData } from '../components/common/meta'

const Container = styled.div`
  max-width: 850px;
  margin: auto;
`

const Header = styled.div`
  margin: 4rem 1rem;
  margin-bottom: 3rem;

  @media (max-width: 800px) {
    margin: 4rem 2rem;
    margin-bottom: 2rem;
  }
`

const Title = styled.h1`
`

const Content = styled.div`
  margin: 2rem 1rem;
  margin-bottom: 4rem;
  font-family: serif;
  line-height: 2rem;

  a {
    text-decoration: underline;
    color: #000;
  }

  p {
    margin-top: 1rem; 
    margin-bottom: 1rem; 
  }

  @media (max-width: 800px) {
    margin: 2rem;
  }
`

const Date = styled.div`
  color: #a2a2a2;
  font-size: 0.7rem;
  display: inline-block;
`

const Tag = styled.div`
  display: inline-block;
  color: #a2a2a2;
  font-size: 0.7rem;
  margin: 0 1rem;
`

export default function Post({
  data, // this prop will be injected by the GraphQL query below.
  location,
}) {
  const post = data.ghostPost // data.markdownRemark holds our post data
  const { title, html } = post;

  return (
    <Container>
      <MetaData
        location={location}
        data={data}
      />
      <Nav />
      <Header>
        <Title>
          {title}
        </Title>
        <Date>
          {post.published_at_pretty} 
        </Date>
        <Tag>
           {post.primary_tag && post.primary_tag.name}
        </Tag>
      </Header>
      <Content
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Footer />
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`
