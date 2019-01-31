import React from 'react'
import styled from "styled-components"

import Hamburger from '../components/hamburger'

const Nav = styled.div`
  padding: 20px;
`

const HomePage = () => (
  <>
    <Nav>
      <Hamburger/>
    </Nav> 
  </>
)

export default HomePage
