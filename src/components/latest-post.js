import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Container = styled.div`
  margin: 3rem 1rem;

  @media (max-width: 800px) {
    margin: 2rem;
  }
`

const Header = styled.div`
  font-family: serif;
  color: #a2a2a2;
  font-size: 1rem;
`

const PostLink = styled(Link)`
  font-family: serif;
  font-size: 1rem;
  color: #000;
  text-decoration: underline;
  line-height: 2rem;
  display: inline-block;
`

const LatestPost = () => (
  <StaticQuery
    query={graphql`
      query LatestPostQuery {
        allGhostPost(
          sort: { order: DESC, fields: published_at }
          limit: 1
        ) {
          edges {
            node {
              title
              published_at
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Header>
          Latest Blog Post:
        </Header>
        <PostLink to={`/blog/${data.allGhostPost.edges[0].node.slug}`}>
          {data.allGhostPost.edges[0].node.title}
        </PostLink>
      </Container>
    )}
  />
)

export default LatestPost
