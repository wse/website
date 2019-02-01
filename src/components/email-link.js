import React from 'react'
import styled from "styled-components"

const Text = styled.div`
  font-size: 0.7rem;
  font-weight: 600; 
`

const Link = styled.a`
  
`

const EmailLink = () => (
  <Text>
    Shoot an email at &nbsp;
    <Link
      href="mailto:nishantdania@gmail.com"
      target="_top"
    >
      nishantdania@gmail.com
    </Link>
  </Text>
)

export default EmailLink 
