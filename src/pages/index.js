import React from 'react'
import Layout from '../components/layout'
import HeroImage from '../components/hero-image'
import styled from 'styled-components'

const ContentContainer = styled.div``

const IndexPage = () => (
  <Layout>
    <ContentContainer>
      <HeroImage />
    </ContentContainer>
  </Layout>
)

export default IndexPage
