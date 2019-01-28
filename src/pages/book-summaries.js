import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import PostLink from '../components/post-link'

const PageDescription = styled.p`
  margin-top: 20px;
`

const SummariesContainer = styled.ul`
  margin-top: 20px;
  padding: 20px;
`

const BookListItem = styled.li`
  margin-bottom: 20px;
  color: #5660ca;
`

const BookSummariesPage = ({
  data,
}) => {
  const posts = data.allGhostPost.edges;

  let bookSummaries = posts.filter((post) => {
    return post.node.primary_tag && post.node.primary_tag.name === 'Book Summary';
  });
  
  const Summaries = bookSummaries.map((post) => {
    let link = `/book-summaries/${post.node.slug}`
    return <BookListItem key={post.node.id}>
            <PostLink link={link} key={post.node.id} post={post.node} />
      </BookListItem>
  })
  return <Layout>
    <PageDescription>
      This is a personal repository of all tech and business related books that I read moving forward and some excerpts from these books for future reference.
      I have not done a very good job at keeping these references for a very long time, hopefully it changes now.
    </PageDescription>
    <SummariesContainer>
      {Summaries}
    </SummariesContainer>
  </Layout>
}

export default BookSummariesPage 

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
