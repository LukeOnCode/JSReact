import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Container, Button} from 'react-bootstrap';



export default class HomePage extends Component{
    render(){
        return(
            <Container fluid="fluid" className="px-0 d-flex flex-column flex-sm-column flex-md-row vh-90">
                <h1>Hello homepage</h1>
            </Container>
        );
    }
}
