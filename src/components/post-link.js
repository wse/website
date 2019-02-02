import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const BookName = styled.p`
  font-size: 1.2rem;
  color: #000;
  font-weight: 800;
`

const BlockLink = styled(Link)`
  display: block;
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

const PostLink = ({ post, link }) => (
  <BlockLink to={link}>
    <Date>
      {post.published_at} 
    </Date>
    <Tag>
       {post.primary_tag && post.primary_tag.name}
    </Tag>
    <BookName>
      {post.title}
    </BookName>
  </BlockLink>
)

export default PostLink
