import React from 'react'
import styled from "styled-components"

import Hamburger from '../components/hamburger'
import Hero from '../components/hero'
import VisitBlogLink from '../components/visit-blog-link'
import SectionHeader from '../components/section-header'
import SneakPic from '../components/sneak-pic'
import EmailLink from '../components/email-link'

const Container = styled.div`
  max-width: 850px;
  margin: auto;
  padding-bottom: 300px;
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
    <VisitBlogLink />
    <SectionHeader header="From my camera" />
    <SneakPic />
    <SectionHeader header="For a quick reply" />
    <EmailLink />
    <SectionHeader header="On other channels" />
  </Container>
)

export default HomePage
