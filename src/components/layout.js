import React from 'react'
import Logo from '../components/logo'
import styled from "styled-components"
import Nav from '../components/nav'

const Container = styled.div`
  margin: 40px auto 0;
  max-width: 800px;
`

const Layout = ({ children }) => (
  <Container>
    <Logo />
    <Nav />
    { children }
  </Container>
)

export default Layout 
