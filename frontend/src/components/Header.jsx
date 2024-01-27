import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand='md' collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>BB shop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <LinkContainer to="/cart">
                            <Nav.Link><FaCartShopping /> Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                            <Nav.Link ><FaUser /> Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header