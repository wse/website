import React from 'react'
import Logo from '../components/logo'
import styled from "styled-components"
import Nav from '../components/nav'
import Subscribe from '../components/subscribe'

const Container = styled.div`
  margin: 40px auto 0;
  max-width: 1000px;
  padding: 0 20px;
`

const Layout = ({ children }) => (
  <Container>
    <Logo centered />
    <Nav centered />
    { children }
    <Subscribe />
  </Container>
)

export default Layout 
