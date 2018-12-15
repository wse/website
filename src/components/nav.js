import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"

const LinkList = styled.ul`
  text-align: ${props => props.centered ? 'center' : 'left'};
  margin-top: ${props => props.centered ? '20px' : 0};
`

const LinkListItem = styled.li`
  display: inline-block;
  margin-right: 10px;
  a {
    color: #5660ca;
  }
`

const Nav = ({ siteTitle, centered }) => (
  <LinkList centered={centered ? 1 : 0}>
    <LinkListItem>
      <Link to="/photography">
        Photography
      </Link>
    </LinkListItem>

    <LinkListItem>
      <Link to="/book-summaries">
        Book summaries
      </Link>
    </LinkListItem>

    <LinkListItem>
      <Link to="/contact">
        Contact
      </Link>
    </LinkListItem>
  </LinkList>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: 'Nishant Dania',
}

export default Nav 
