import React, {Component} from "react";
import {Link, Navigate} from 'react-router-dom';
import {Container, Button} from 'react-bootstrap';



export default class NotAllowed extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container  fluid="fluid" className="px-0 d-flex flex-column flex-sm-column flex-md-row vh-90">
                <h1>Try to login</h1>
                <Link to="/login" >Login</Link>
                <h1>or</h1>
                <Link to="/register">Register</Link>
            </Container>   
        );
    }
}
