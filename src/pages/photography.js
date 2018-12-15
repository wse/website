import React from 'react'
import SEO from '../components/seo'
import InstaGrid from '../components/instagrid'
import Layout from '../components/layout'

const PhotographyPage = () => (
  <Layout>
    <SEO title="Photography | Nishant Dania" keywords={['developer', 'photography', 'software', 'books']} />
    <InstaGrid />
  </Layout>
)

export default PhotographyPage 
