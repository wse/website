import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const LinkBlock = styled(Link)`
  display: block;
  height: 64px;
  text-align: ${props => props.centered ? 'center' : 'left'};
`

const Logo = ({ centered }) => (
  <LinkBlock to="/" centered={centered ? 1 : 0} >
    <svg width="64px" height="64px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
        <defs></defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Logo">
              <rect id="Rectangle-2" fill="#000000" x="0" y="0" width="64" height="64"></rect>
              <text id="ND" fontFamily="Helvetica-Bold, Helvetica" fontSize="24" fontWeight="bold" letterSpacing="0.120000005" fill="#FFFFFF">
                  <tspan x="6" y="48">ND</tspan>
              </text>
            </g>
        </g>
    </svg>
  </LinkBlock>
)
export default Logo 
