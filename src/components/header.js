import React from 'react'
import { Link } from 'gatsby'
import { Container, Form, Input, Grid, Button } from 'semantic-ui-react'
import './header.css'

//<Input className="email-input" fluid transparent style={{ paddingLeft: '4px' }} type="email" name="email" placeholder="Enter email" />
// <input />

// <Form name="subscribe" data-netlify="true" method="POST">
// <Input name="email" className="email-input" type='email' fluid transparent style={{ paddingLeft: '4px' }} placeholder='Enter email'>
// <input />
// <Button type='submit'>Subscribe</Button>
// <input type="hidden" name="form-name" value="subscribe" />
// </Input>
// </Form>


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
    <form className="ui form" name="subscribe" method="post" data-netlify="true" action="#subscribe">
    <Form.Group inline style={{ marginBottom: 0 }}>
    <input className="ui input primary email-input" type="email" name="email" placeholder="Email" />
    <button className="ui button" type="submit">Subscribe</button>
    <input type="hidden" name="form-name" value="subscribe" />
    </Form.Group>
    </form>

    </Grid.Column>
    </Grid.Row>
    </Grid>
    </Container>
  </div>
)

export default Header
