import React, {Component} from "react";
import {Link, Navigate} from 'react-router-dom';
import {Container, Button, Card} from 'react-bootstrap';
import {FaRegWindowClose} from 'react-icons/fa';

export default class UsersAccount extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: {...this.props.users}
        }
    }

    render(){
        console.log(this.state.users[0].users);
        return(
                <Container fluid="fluid" id=""className="card-banner px-0 d-flex flex-column flex-sm-column flex-md-row vh-90">
                    {
                        Object.keys(this.state.users[0].users).map(
                            (key) => 
                            <h1>{this.state.users[0].users[key].name}</h1>
                        )
                    }
                </Container>   
        );
    }
}
