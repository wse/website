import React from 'react'
import styled from "styled-components"

const Text = styled.div`
  font-size: 0.7rem;
  font-weight: 800; 
  text-transform: uppercase;
`

const SectionHeader = ({ header }) => (
  <Text>
    { header }
  </Text>
)

export default SectionHeader
