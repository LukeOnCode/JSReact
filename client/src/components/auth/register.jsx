import React, {Component} from "react";
import {Form, Button} from 'react-bootstrap';

export default class Register extends Component{

    
    state = {
        name: '',
        email: ''
    }

    reg = (e) => this.setState({...this.state, [e.target.name]: e.target.value})
    send = (e) => {
        e.preventDefault();
        console.log(this.state.email);
    }
    render(){

        return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={this.reg } name='name' type="text" placeholder="Enter name" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={this.reg}  name='email' type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password2' type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                    Insert password again
                </Form.Text>
            </Form.Group>

            <Button onClick={this.send} variant="primary">
                Submit
            </Button>
        </Form>
        );
    }
}
