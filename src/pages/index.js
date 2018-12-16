import React from 'react'
import Nav from '../components/nav'
import SEO from '../components/seo'
import Headshot from '../components/headshot'
import styled from "styled-components"
import '../components/layout.css'

const Container = styled.div`
  margin: 380px auto 0;
  padding-left: 100px;
  @media (max-width: 800px) {
    margin: auto;
    padding: 20px;
  }
`

const Name = styled.h1`
  font-size: 72px;
  font-weight: normal;
  margin-bottom: 5px;
  @media (max-width: 800px) {
    font-size: 36px;
    font-weight: bold;
  }
`
const Career = styled.h2`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 5px;
  color: #5a5a5a;
  @media (max-width: 800px) {
    text-align: center;
    padding: 20px;
  }
`
const DescriptionSection = styled.section`
  margin-left: 20px;
  @media (max-width: 800px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const UpperSection = styled.section`
  display: flex;
  @media (max-width: 800px) {
    display: block;
  }
` 

const HeadshotContainer = styled.div`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
`

const IndexPage = () => (
  <Container>
    <SEO title="About" keywords={['developer', 'photography', 'software', 'books']} />
    <UpperSection>
      <HeadshotContainer>
        <Headshot />
      </HeadshotContainer>
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
              TradeGecko
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
