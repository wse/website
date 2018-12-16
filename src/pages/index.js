import React from 'react'
import Nav from '../components/nav'
import SEO from '../components/seo'
import Headshot from '../components/headshot'
import styled from "styled-components"
import '../components/layout.css'

const Container = styled.div`
  margin: 380px auto 0;
  max-width: 800px;
`

const Name = styled.h1`
  font-size: 72px;
  font-weight: normal;
  margin-bottom: 5px;
`
const Career = styled.h2`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 5px;
  color: #5a5a5a;
`
const DescriptionSection = styled.section`
  margin-left: 20px;
`
const UpperSection = styled.section`
  display: flex;
  margin-left: -150px;
` 

const IndexPage = () => (
  <Container>
    <SEO title="About" keywords={['developer', 'photography', 'software', 'books']} />
    <UpperSection>
      <Headshot />
      <DescriptionSection>
        <Name>
          Nishant Dania
        </Name>
        <Career>
          Software Developer at&nbsp;
          <strong>
            <a 
              href="https://www.tradegecko.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tradegecko
            </a>
          </strong>
          . Ex&nbsp;
          <strong>
            <a
              href="https://www.flipkart.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flipkart
            </a>
          </strong>
        </Career>
        <Nav />
      </DescriptionSection>
    </UpperSection>
  </Container>
)

export default IndexPage
