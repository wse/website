import React from 'react'
import styled from "styled-components"

import Hero from '../components/hero'
import VisitBlogLink from '../components/visit-blog-link'
import SectionHeader from '../components/section-header'
import EmailLink from '../components/email-link'
import SocialLinks from '../components/social-links'
import Footer from '../components/footer'
import InstaGrid from '../components/instagrid'
import Nav from '../components/nav'

const Container = styled.div`
  max-width: 850px;
  margin: auto;
`

const HomePage = () => (
  <Container>
    <Nav/ > 
    <Hero />
    <VisitBlogLink />
    <SectionHeader header="From my camera" />
    <InstaGrid />
    <SectionHeader header="For a quick reply" />
    <EmailLink />
    <SectionHeader header="On other channels" />
    <SocialLinks />
    <Footer />
  </Container>
)

export default HomePage
