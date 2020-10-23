import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>EShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/statistics'>
                <Nav.Link>Statistics</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/add'>
                <Nav.Link>Add-Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/display'>
                <Nav.Link>Display-Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/update'>
                <Nav.Link>Update-Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
