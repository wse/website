import React from 'react'
import Nav from '../components/nav'
import SEO from '../components/seo'
import InstaGrid from '../components/instagrid'
import Logo from '../components/logo'

const PhotographyPage = () => (
  <>
  <SEO title="Photography | Nishant Dania" keywords={['developer', 'photography', 'software', 'books']} />
  <Logo />
  <Nav />
  <InstaGrid />
  </>
)

export default PhotographyPage 
