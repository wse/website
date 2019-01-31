import React from 'react'
import styled from "styled-components"

const Text = styled.div`
  font-size: 0.7rem;
  font-weight: 800; 
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  text-transform: uppercase;
`

const SectionHeader = ({ header }) => (
  <Text>
    { header }
  </Text>
)

export default SectionHeader
