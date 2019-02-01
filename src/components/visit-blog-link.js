import React from 'react'
import styled from "styled-components"

const BlogLinkContainer = styled.div`
  font-family: monospace;
  font-size: 2rem;
  font-weight: 400;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  border: 4px solid #e8e8e8;
  border-radius: 4px;
  max-width: 360px;
  text-align: center;
  box-shadow: -8px 8px 0px #000000;
`

const BlogLink = styled.span`
  cursor: pointer;
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

const VisitBlogLink = () => (
  <BlogLinkContainer>
    <BlogLink>
      Visit my blog
    </BlogLink>
    <ArrowContainer>
      <Arrow />
    </ArrowContainer>
  </BlogLinkContainer>
)

export default VisitBlogLink 
