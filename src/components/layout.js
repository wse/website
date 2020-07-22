import React from 'react'
import '../styles/normalize.css'
import '../styles/reset.css'
import '../styles/global.css'
import styled from 'styled-components'
import Nav from './nav'

const MainContainer = styled.div`
  max-width: 650px;
  margin: auto;
  padding-bottom: 72px;
`
const ContentContainer = styled.div`
  @media (max-width: 650px) {
    padding: 0 24px;
  }
`

const Layout = ({ children }) => (
  <MainContainer>
    <Nav />
    <ContentContainer>{children}</ContentContainer>
    <Nav />
  </MainContainer>
)

export default Layout
