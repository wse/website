import React from 'react'
import Nav from '../components/nav'
import SEO from '../components/seo'
import Logo from '../components/logo'

const ContactPage = () => (
  <>
  <SEO title="Contact | Nishant Dania" keywords={['developer', 'photography', 'software', 'books']} />
  <Logo />
  <Nav />
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
  </>
)

export default ContactPage 
