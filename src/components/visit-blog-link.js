import React from 'react'
import styled from "styled-components"

const BlogLinkContainer = styled.div`
  font-size: 1rem;
  font-weight: 800; 
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  text-transform: uppercase;
  max-width: 640px;
`

const BlogLink = styled.span`
  pointer: cursor;
`

const ArrowContainer = styled.div`
  display: inline-block;
  position: relative;
`
const Arrow = styled.div`
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid black;
    margin-top: 4px;
    margin-left: 10px;
`

const YellowBorder = styled.div`
  border-bottom: 8px solid black;
  box-shadow: 4px -4px 0 #FBFF03;
  margin-top: 0.5rem;
`

const VisitBlogLink = () => (
  <BlogLinkContainer>
    <BlogLink>
      Visit my blog
    </BlogLink>
    <ArrowContainer>
      <Arrow />
    </ArrowContainer>
    <YellowBorder />
  </BlogLinkContainer>
)

export default VisitBlogLink 
