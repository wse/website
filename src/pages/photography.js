import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import InstaGrid from '../components/instagrid'
import Layout from '../components/layout'

const GridContainer = styled.div`
  margin-top: 20px;
`

const PhotographyPage = () => (
  <Layout>
    <SEO title="Photography | Nishant Dania" keywords={['developer', 'photography', 'software', 'books']} />
    <GridContainer>
      <InstaGrid />
    </GridContainer>
  </Layout>
)

export default PhotographyPage 
