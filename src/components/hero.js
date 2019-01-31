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
`

const Hero = () => (
  <WhoAmI>
    I’m Nishant Dania,<br />
    a software developer
    from India currently based in Singapore.
  </WhoAmI>
)

export default Hero 
