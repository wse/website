import React from 'react'
import SEO from '../components/seo'
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

const BookSummariesPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Summaries = edges.map((edge) => {
    return <li key={edge.node.id}><PostLink key={edge.node.id} post={edge.node} /></li>
  })
  return <Layout>
    <SEO title="Book Summaries" keywords={['developer', 'photography', 'software', 'books']} />
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            bookAuthor
          }
        }
      }
    }
  }
`
