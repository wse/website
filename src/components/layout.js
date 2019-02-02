import React from 'react'
import styled from "styled-components"
import Nav from '../components/nav'
import Subscribe from '../components/subscribe'

const Container = styled.div`
  margin: 40px auto 0;
  max-width: 1000px;
  padding: 0 20px;
`

const Footer = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
  color: #777777;
  padding: 20px;
`

const Layout = ({ children }) => (
  <Container>
    <Nav centered />
    { children }
    <Subscribe />
    <Footer>
      . . ...always be learning... . .
    </Footer>
  </Container>
)

export default Layout 
