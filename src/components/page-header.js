import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: ${props => (props.alwaysShow ? 'block' : 'none')};
  @media (max-width: 650px) {
    display: block;
  }
`

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  line-height: 40px;
  padding-bottom: 20px;
  padding-top: 42px;
  max-width: 66.66%;

  @media (max-width: 650px) {
    padding-top: 32px;
    font-size: 24px;
    line-height: 32px;
  }
`

const Divider = styled.div`
  height: 8px;
  background: #000;
  max-width: 150px;
  @media (max-width: 650px) {
    height: 4px;
    max-width: 100px;
  }
`

export default function PageHeader({
  title,
  alwaysShow = false,
  showDivider = true,
  className = '',
}) {
  return (
    <Container className={className} alwaysShow={alwaysShow}>
      <Title>{title}</Title>
      {showDivider && <Divider />}
    </Container>
  )
}
