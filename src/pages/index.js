import React from 'react'
import Layout from '../components/layout'
import HeroImage from '../components/hero-image'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ContentContainer = styled.div``

const ImageContainer = styled.div`
  padding: 24px 0;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 32px;
  padding: 12px 0;
  a {
    text-decoration: underline;
  }
`

const IndexPage = () => (
  <Layout>
    <ContentContainer>
      <Text>I’m Nishant Dania, a software developer based in Singapore.</Text>
      <Text>
        I moved to Singapore in November 2017 to work at{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tradegecko.com/"
        >
          TradeGecko
        </a>{' '}
        as a software developer where I specialize in frontend development and
        occasionally work on backend as well. Before this gig, I was working at{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.flipkart.com/"
        >
          Flipkart
        </a>{' '}
        as a mobile developer and later as a web developer at the same company.
      </Text>
      <ImageContainer>
        <HeroImage />
      </ImageContainer>
      <Text>
        A Fujifilm X100F camera was my best purchase in 2018. I’ve been using it
        to document my travels since then. I post the ones that I like the most
        on my{' '}
        <a
          href="https://www.instagram.com/nishantdania/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram channel
        </a>{' '}
        or at{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com/@nishantdania"
        >
          Unsplash
        </a>
        . The picture above was taken at Lake Marian in New Zealand in September
        2018.
      </Text>
      <Text>
        I strongly believe that you should learn as much as you can from the
        world around you and this act of learning should be consistent and
        should never stop. Occasionally (hopefully consistently in the future) I
        share my learnings and ideas on my <Link to="/blog">blog</Link>.
      </Text>
      <Text>
        You can reach out to me at{' '}
        <a target="_top" href="mailto:nishantdania@gmail.com">
          nishantdania@gmail.com
        </a>{' '}
        for a fast response or find me on{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/nishantdania"
        >
          Twitter
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/nishantdania"
        >
          LinkedIn
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/nishantdania/"
        >
          Github
        </a>{' '}
        and{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/nishantdania/"
        >
          Instagram
        </a>
        .
      </Text>
    </ContentContainer>
  </Layout>
)

export default IndexPage
