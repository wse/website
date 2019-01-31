import React from 'react'
import styled from "styled-components"

import Hamburger from '../components/hamburger'
import Hero from '../components/hero'

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
  </Container>
)

export default HomePage
