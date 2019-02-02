import React from 'react'
import styled from "styled-components"
import Subscribe from './subscribe'

const Text = styled.div`
  font-size: 0.6rem;
  color: #dadada;
  text-align: center;
  margin: 2rem;
`

const Footer = () => (
  <>
    <Subscribe />
    <Text>
      . .. …always be learning… .. .
    </Text>
  </>
)

export default Footer
