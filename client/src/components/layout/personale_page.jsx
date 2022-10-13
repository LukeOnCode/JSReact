import React, {Component} from "react";
import {Container, Button, Card} from 'react-bootstrap';


export default class PersonalPage extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
                <Container fluid="fluid" className=" px-0 d-flex flex-column flex-sm-column flex-md-row ">
                    <h1>Peronal page</h1>
                </Container>   
        );
    }
}
