import React from 'react'
import Nav from '../components/nav'
import SEO from '../components/seo'
import Logo from '../components/logo'

const BookSummariesPage = () => (
  <>
  <SEO title="Book Summaries | Nishant Dania" keywords={['developer', 'photography', 'software', 'books']} />
  <Logo />
  <Nav />
  <p>
    Best excerpts from the top books I’ve read:
  </p>
  </>
)

export default BookSummariesPage 
