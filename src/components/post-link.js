import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const BookName = styled.p`
  font-size: 16px;  
`
const BlockLink = styled(Link)`
  display: block;
`

const PostLink = ({ post, link }) => (
  <BlockLink to={link}>
    <BookName>
      {post.title}
    </BookName>
  </BlockLink>
)

export default PostLink
