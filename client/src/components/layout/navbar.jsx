import React, {Component} from "react";
import { Container, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class FirstNavbar extends Component{
    render(){
        return(
            <Navbar expand="lg" className="bg-light vh-10">
            <Container fluid="fluid">
              <Navbar.Brand as={Link} to='/'>Developers</Navbar.Brand>
            </Container>
          </Navbar>
        );
    }
}
