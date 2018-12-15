import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact | Nishant Dania" keywords={['developer', 'photography', 'software', 'books']} />
    <p>
      Reach out via any of the following channels:
    </p>
    <ul>
      <li>
        Email:&nbsp;
        <a
          href="mailto:nishantdania@gmail.com"
          target="_top"
        >
          nishantdania@gmail.com
        </a>
      </li>
      <li>
        Instagram:&nbsp;
        <a
          href="https://instagram.com/nishantdania"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram.com/nishantdania
        </a>
      </li>
      <li>
        Twitter:&nbsp;
        <a
          href="https://twitter.com/nishantdania"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter.com/nishantdania
        </a>
      </li>
    </ul>
  </Layout>
)

export default ContactPage 
