import React from 'react'
import styled from "styled-components"

import Hamburger from '../components/hamburger'

const Container = styled.div`
  max-width: 850px;
  margin: auto;
`

const Nav = styled.div`
  padding: 1rem;
`
const WhoAmI = styled.div`
  font-size: 3.2rem;
  line-height: 4rem;
  font-family: -apple-system-headline, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-weight: 800; 
  max-width: 640px;
  padding: 0 1rem;
`

const HomePage = () => (
  <Container>
    <Nav>
      <Hamburger/>
    </Nav> 
    <WhoAmI>
      I’m Nishant Dania,<br />
      a software developer
      from India currently based in Singapore.
    </WhoAmI>
  </Container>
)

export default HomePage
