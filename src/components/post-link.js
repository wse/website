import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const BookName = styled.p`
  font-size: 16px;  
`
const Author = styled.p`
  font-size: 16px;
`

const BlockLink = styled(Link)`
  display: block;
`

const PostLink = ({ post }) => (
  <BlockLink to={post.frontmatter.path}>
    <BookName>
      {post.frontmatter.title}
    </BookName>
    <Author>
      by {post.frontmatter.bookAuthor}
    </Author>
  </BlockLink>
)

export default PostLink
