import React, {Component} from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class FirstNavbar extends Component{
    render(){
        return(
            <Navbar expand="lg" className="bg-light vh-10">
            <Container fluid="fluid">
              <Navbar.Brand as={Link} to='/'>Developers</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="false"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    <Nav.Link as={Link} to='/registration'>Register</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}
