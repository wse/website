import React from 'react'
import styled from "styled-components"

const WhoAmI = styled.div`
  font-size: 3.2rem;
  line-height: 4rem;
  font-family: -apple-system-headline, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-weight: 800; 
  max-width: 640px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  color: #5d5d5d;
  span {
    color: black;
  }
`

const Hero = () => (
  <WhoAmI>
    I’m <span>Nishant Dania</span>,<br />
    a <span>software developer</span>&nbsp;
    from India based in <span>Singapore</span>.
  </WhoAmI>
)

export default Hero 
