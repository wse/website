import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  padding-bottom: 20px;
  padding-top: 72px;
  text-transform: capitalize;
  max-width: 66.66%;
`

const Divider = styled.div`
  height: 8px;
  background: #000;
  max-width: 150px;
`

export default function PageHeader({ title }) {
  return (
    <>
      <Title>{title}</Title>
      <Divider />
    </>
  )
}
