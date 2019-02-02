import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"

import Hero from '../components/hero'
import Footer from '../components/footer'
import Nav from '../components/nav'
import LatestPost from '../components/latest-post'
import HeroImage from '../components/hero-image'
import '../components/layout.css'
import { MetaData } from '../components/common/meta'

const Container = styled.div`
  max-width: 850px;
  margin: auto;
`

const Text = styled.p`
  font-family: serif;
  line-height: 2rem;
  margin: 2rem 1rem;

  a {
    text-decoration: underline;
    color: #000;
  }

  @media (max-width: 800px) {
    margin: 2rem;
  }
`

const HomePage = ({ location }) => (
  <Container>
    <MetaData
      location={location}
      title="About"
    />
    <Nav/ > 
    <Hero />
    <LatestPost />
    <Text>
      I moved to Singapore in November 2017 to work at <a target="_blank" rel="noopener noreferrer" href="https://www.tradegecko.com/">TradeGecko</a> as a software developer where I specialize in frontend development and occasionally work on backend as well. Before this gig, I was working at <a target="_blank" rel="noopener noreferrer" href="https://www.flipkart.com/">Flipkart</a> as a mobile developer and later as a web developer at the same company.
    </Text>
    <HeroImage />
    <Text>
      A Fujifilm X100F camera was my best purchase in 2018. I’ve been using it to document my travels since then. I post the ones that I like the most on my <a href="https://www.instagram.com/nishantdania/" target="_blank" rel="noopener noreferrer">Instagram channel</a> or at <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@nishantdania">Unsplash</a>. The picture above was taken at Lake Marian in New Zealand in September 2018.
    </Text>
    <Text>
      I strongly believe that you should learn as much as you can from the world around you and this act of learning should be consistent and should never stop. Occasionally (hopefully consistently in the future) I share my learnings and ideas on my <Link to="/blog">blog</Link>.
    </Text>
    <Text>
      You can reach out to me at <a target="_top" href="mailto:nishantdania@gmail.com">nishantdania@gmail.com</a> for a fast response or find me on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/nishantdania">Twitter</a>, <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nishantdania">LinkedIn</a>, <a target="_blank" rel="noopener noreferrer" href="https://github.com/nishantdania/">Github</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nishantdania/">Instagram</a>.
    </Text>
    <Footer />
  </Container>
)

export default HomePage
