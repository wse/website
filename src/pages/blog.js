import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import PostLink from '../components/post-link'

const PageDescription = styled.p`
  margin-top: 20px;
`

const PostsContainer = styled.ul`
  margin-top: 20px;
  padding: 20px;
`

const BlogListItem = styled.li`
  margin-bottom: 20px;
  color: #5660ca;
`

const BlogPage = ({
  data,
}) => {
  const posts = data.allGhostPost.edges;

  let blogPosts = posts.filter((post) => {
    let primary_tag = post.node.primary_tag
    return !(primary_tag && primary_tag.name === 'Book Summary');
  });
  
  const Posts = blogPosts.map((post) => {
    let link = `/blog/${post.node.slug}`
    return <BlogListItem key={post.node.id}>
            <PostLink link={link} key={post.node.id} post={post.node} />
      </BlogListItem>
  })
  return <Layout>
    <PostsContainer>
      {Posts}
    </PostsContainer>
  </Layout>
}

export default BlogPage 

export const pageQuery = graphql`
  query {
    allGhostPost(
      sort: { order: ASC, fields: published_at }
    ) {
      edges {
        node {
          id
          slug
          title
          primary_tag {
            name
          }
        }
      }
    }
  }
`
