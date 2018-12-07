import React from 'react'
import { Link } from 'gatsby'
import { Container, Form, Input, Grid } from 'semantic-ui-react'
import './header.css'

const Header = ({ siteTitle }) => (
  <div style={{ background: '#5AB9EA' }}>
    <Container>
    <Grid style={{ paddingBottom: 0, margin: 0 }} stackable>
    <Grid.Row columns={2} style={{ padding: 0, marginBottom: 0 }}>
    <Grid.Column style={{ paddingBottom: 0, marginBottom: 0 }}>
      <h1 style={{ padding: '1rem 0', marginBottom: 0 }}>
        <Link style={{ color: 'white', fontWeight: '20', fontSize: '1.4em' }} to="/">
          {siteTitle}
        </Link>
      </h1>
    </Grid.Column>
    <Grid.Column verticalAlign='middle'>
      <Form name="subscribe" data-netlify="true">
      <Input className="email-input" fluid transparent style={{ paddingLeft: '4px' }} type="email" name="email" placeholder="Enter email" action="submit" />
      </Form>
      </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
  </div>
)

export default Header
