import React from 'react'
import '../styles/normalize.css'
import '../styles/reset.css'
import '../styles/global.css'
import styled from 'styled-components'

const ContentContainer = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 0 24px;
`

const Layout = ({ children }) => <ContentContainer>{children}</ContentContainer>

export default Layout
