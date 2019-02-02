import React from 'react'
import styled from "styled-components"

const WhoAmI = styled.div`
  font-family: -apple-system-headline, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 3.2rem;
  line-height: 4rem;
  font-weight: 800; 
  max-width: 640px;
  color: #5d5d5d;
  margin: 1rem;
  margin-top: 4rem;

  span {
    color: black;
  }

  @media (max-width: 800px) {
    font-size: 2.8rem;
    line-height: 3.3rem;
    max-width: 420px;
    margin: 2rem;
    padding-top: 1rem;
  }
`

const Hero = () => (
  <WhoAmI>
    I’m <span>Nishant Dania</span>,<br />
    a <span>software developer</span>&nbsp;
    based in <span>Singapore</span>.
  </WhoAmI>
)

export default Hero 
