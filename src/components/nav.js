import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"

const LinkList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
`

const LinkListItem = styled.li`
  display: inline-block;
  a {
    color: #000;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;
    font-family: -apple-system-headline,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  }
  .active {
    display: none;
  }
`

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: 'active' } : null
}

const Nav = ({ location }) => (
  <LinkList>
    <LinkListItem>
      <Link to="/" getProps={isPartiallyActive}>
        Nishant Dania 
      </Link>
    </LinkListItem>

    <LinkListItem>
      <Link to="/blog" getProps={isPartiallyActive}>
        Blog
      </Link>
    </LinkListItem>
  </LinkList>
)

export default Nav 
