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
  margin-left: 1rem;
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

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : null
}

const Nav = ({ location }) => (
  <LinkList>
    <LinkListItem>
      <Link to="/" getProps={isActive}>
        About 
      </Link>
    </LinkListItem>

    <LinkListItem>
      <Link to="/blog" getProps={isActive}>
        Blog
      </Link>
    </LinkListItem>
  </LinkList>
)

export default Nav 
