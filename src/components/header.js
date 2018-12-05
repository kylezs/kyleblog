import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'semantic-ui-react'

const Header = ({ siteTitle }) => (
  <div style={{ background: '#5AB9EA' }}>
    <Container>
      <h1 style={{ padding: '1rem 0', marginBottom: '2rem' }}>
        <Link style={{ color: 'white', fontWeight: '20', fontSize: '1.4em' }} to="/">
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </div>
)

export default Header
