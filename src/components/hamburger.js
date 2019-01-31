import React from 'react'
import styled from "styled-components"

const Ham = styled.div`
  font-size: 28px;
  display: flex;
  align-items: flex-end;
  flex-direction: column; 
`

const Hamburger = () => (

  <Ham>
    &#9776;
  </Ham>
)

export default Hamburger 
