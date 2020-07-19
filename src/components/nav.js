import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 24px;
  padding-left: 12px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 62.5%);
`

const PrimaryLinksList = styled.ul`
  margin-bottom: 8px;
`

const StyledLink = styled(Link)`
  margin-right: 8px;
  font-weight: bold;
  font-size: 16px;

  :last-child {
    margin-right: 0px;
    :after {
      content: none;
    }
  }
  :after {
    content: '//';
    margin-left: 8px;
  }
`
const StyledAnchor = styled.a`
  margin-right: 8px;
  font-weight: bold;
  font-size: 12px;

  :last-child {
    margin-right: 0px;
    :after {
      content: none;
    }
  }
  :after {
    content: '-';
    margin-left: 8px;
    margin-bottom: 8px;
  }
`

const Nav = () => (
  <NavContainer className="navContainer">
    <PrimaryLinksList>
      <StyledLink to="/blog">Blog</StyledLink>
      <StyledLink to="/bookshelf">Bookshelf</StyledLink>
      <StyledLink to="/mixtape">Mixtape</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </PrimaryLinksList>

    <ul>
      <StyledAnchor target="_blank" href="https://twitter.com/nishantdania">
        Twitter
      </StyledAnchor>
      <StyledAnchor
        target="_blank"
        href="https://www.instagram.com/nishantdania/"
      >
        Instagram
      </StyledAnchor>
      <StyledAnchor
        target="_blank"
        href="https://www.linkedin.com/in/nishantdania/"
      >
        LinkedIn
      </StyledAnchor>
      <StyledAnchor target="_blank" href="mailto:nishantdania@gmail.com">
        Email
      </StyledAnchor>
    </ul>
  </NavContainer>
)

export default Nav
