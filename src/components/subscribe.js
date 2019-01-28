import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  padding: 10px;
  border-radius: 4px;
  background: #5b65cc;
  padding: 24px;
  color: white;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Message = styled.p`
  font-size: 16px;
  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`

const Link = styled.a`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  border-bottom: 4px solid white;
  :hover {
    color: #ffffff;
    border-bottom-color: #000000;
  }
  @media (max-width: 800px) {
    align-self: flex-start;
  }
`

const Subscribe = () => (
  <Container>
    <Message>
      Join the mailing list to get notified when a new post is up !
    </Message>
    <Link
      href="http://eepurl.com/gfiQzT"
      target="_blank"
      rel="noopener noreferrer"
    >
      Click here to subscribe
    </Link>
  </Container>
)

export default Subscribe 
