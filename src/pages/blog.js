import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'
import styled from 'styled-components'

const Post = styled.li`
  padding: 24px 0;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  text-transform: capitalize;
  max-width: 66.66%;
  padding-top: 48px;
  padding-bottom: 16px;
`

const DateContainer = styled.div`
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
`

const Excerpt = styled.div`
  padding-top: 20px;
  font-size: 16px;
  line-height: 32px;
  position: relative;

  &:after {
    display: block;
    position: absolute;
    content: '';
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 95%
    );
  }
`

const Read = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`

const StyledLink = styled(Link)`
  display: block;
  color: black;
  text-decoration: none;

  &:hover {
    .blog-title {
      text-decoration: underline;
    }
  }
`

const Blog = function ({ data }) {
  const { allMarkdownRemark } = data
  const posts = allMarkdownRemark.edges

  return (
    <Layout>
      <PageHeader title="Blog Posts" />
      <ul>
        {allMarkdownRemark.edges.map(edge => {
          const { excerpt, frontmatter } = edge.node
          return (
            <Post>
              <StyledLink to={frontmatter.slug}>
                <Title className="blog-title">{frontmatter.title}</Title>
                <DateContainer>{frontmatter.date}</DateContainer>
                <Excerpt>{excerpt}</Excerpt>
                <Read>Read On &rarr;</Read>
              </StyledLink>
            </Post>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`

export default Blog
