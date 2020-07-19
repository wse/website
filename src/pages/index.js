import React from 'react'
import Layout from '../components/layout'
import HeroImage from '../components/hero-image'
import Nav from '../components/nav'
import styled from 'styled-components'

const ContentContainer = styled.div`
  .navContainer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    @media (min-width: 900px) {
      padding-left: 48px;
      padding-bottom: 48px;
    }
  }
`

const Me = styled.h1`
  position: fixed;
  bottom: 90px;
  left: 0;
  right: 0;
  padding-left: 12px;
  color: white;
  font-weight: bold;
  font-size: 24px;

  @media (min-width: 900px) {
    padding-left: 48px;
    bottom: 120px;
  }
`

const IndexPage = () => (
  <Layout>
    <ContentContainer>
      <HeroImage />
      <Me>Nishant Dania</Me>
      <Nav />
    </ContentContainer>
  </Layout>
)

export default IndexPage
