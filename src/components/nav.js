import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"

const Container = styled.div`
`

const LinkList = styled.ul`
  margin: 0;
`

const LinkListItem = styled.li`
  display: inline-block;
  margin-right: 10px;
  a {
    color: #5660ca;
  }
`

const Nav = ({ siteTitle }) => (
  <Container>
    <LinkList>
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
  </Container>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: 'Nishant Dania',
}

export default Nav 
