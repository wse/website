import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import PostLink from '../components/post-link'
import Nav from '../components/nav'
import Footer from '../components/footer'
import '../components/layout.css'
import { MetaData } from '../components/common/meta'

const Container = styled.div`
  max-width: 850px;
  margin: auto;
`

const PageDescription = styled.h1`
  line-height: 2rem;
  margin: 4rem 1rem;

  @media (max-width: 800px) {
    margin: 4rem 2rem;
  }
`

const PostsContainer = styled.ul`
  margin: 2rem 1rem;
  margin-bottom: 6rem;

  @media (max-width: 800px) {
    margin: 2rem;
    margin-bottom: 5rem;
  }
`

const BlogListItem = styled.li`
  display: block;
  margin: 2rem 0rem;
`

const BlogPage = ({
  data,
  location,
}) => {
  const posts = data.allGhostPost.edges;

  const Posts = posts.map((post) => {
    let link = `/blog/${post.node.slug}`
    return <BlogListItem key={post.node.id}>
            <PostLink link={link} key={post.node.id} post={post.node} />
      </BlogListItem>
  })
  return <Container>
    <MetaData
      location={location}
      data={data}
    />
    <Nav />
    <PageDescription>
      Blog Posts
    </PageDescription>
    <PostsContainer>
      {Posts}
    </PostsContainer>
    <Footer />
  </Container>
}

export default BlogPage 

export const pageQuery = graphql`
  query {
    allGhostPost(
      sort: { order: DESC, fields: published_at }
    ) {
      edges {
        node {
          id
          slug
          title
          primary_tag {
            name
          }
          published_at(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`
