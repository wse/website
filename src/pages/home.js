import React from 'react'
import styled from "styled-components"

import Hamburger from '../components/hamburger'
import Hero from '../components/hero'
import VisitBlogLink from '../components/visit-blog-link'

const Container = styled.div`
  max-width: 850px;
  margin: auto;
`

const Nav = styled.div`
  padding: 1rem;
`

const HomePage = () => (
  <Container>
    <Nav>
      <Hamburger />
    </Nav> 
    <Hero />
    <VisitBlogLink />
  </Container>
)

export default HomePage
