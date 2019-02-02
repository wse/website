import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  margin: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    margin: 4rem 2rem;
  }
`

const Title = styled.p`
  font-family: -apple-system-headline,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-weight: 800;
  font-size: 1rem;
`

const Description = styled.p`
  text-align: center;
  max-width: 420px;
  margin: 1.2rem 0;
  font-family: serif;
`

const Link = styled.a`
  font-family: -apple-system-headline,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  color: #000;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.1rem;
  padding: 0.6rem 1.6rem;
  border: 1px solid #a2a2a2;
  border-radius: 4px;
  font-size: 0.6rem;
`

const Subscribe = () => (
  <Container>
    <Title>
      Get My Newsletter 
    </Title>
    <Description>
      Subscribe to my newsletter to get notified about the new posts on my blog. No spam. Unsubscribe anytime.
    </Description>
    <Link
      href="http://eepurl.com/gfiQzT"
      target="_blank"
      rel="noopener noreferrer"
    >
      Subscribe 
    </Link>
  </Container>
)

export default Subscribe 
