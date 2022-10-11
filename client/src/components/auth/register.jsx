import React, {Component} from "react";
import {Form, Button, InputGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import SpinnerUi from "../ui_elements/spinner";
import { useToken } from '../../utils/front_utils';

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password:'',
            valid: false,
            loading: false
        }
    }
    
    handleChange = (e) => this.setState({...this.state, [e.target.name]: e.target.value})
    handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        try {
            this.state.loading = true
            const data = this.state;
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            if(form.checkValidity()){
                const res = await axios.post(`http://localhost:5000/api/users`, data, config)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    useToken(res.data.token);
                })
            }else{
                this.validate(e);
                console.log('error');
            }
        } catch (error) {
            console.log(error.response.data.errors[0]);
        }
    
    }
    validate = (e) => {
        this.setState({ valid: true })
        return;
    }


    render(){
        return(
        <Form noValidate validated={this.state.valid} onSubmit={this.handleSubmit}>
            { this.state.loading && <SpinnerUi /> }
            <Form.Group className="mb-3" controlId="reg_name">
                <Form.Label>Name</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control required onChange={this.handleChange } name='name' type="text" placeholder="Enter name" />
                    <Form.Control.Feedback type="invalid">Please provide name</Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="reg_email">
                <Form.Label>Email address</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control required onChange={this.handleChange}  name='email' type="email" placeholder="Enter email" />
                    <Form.Control.Feedback type="invalid">Please provide email</Form.Control.Feedback>
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="reg_pwd_1">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control required onChange={this.handleChange}  name='password' type="password" placeholder="Password" />
                    <Form.Control.Feedback type="invalid">Please provide password</Form.Control.Feedback>
                </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit">Register</Button>
            <Form.Text className="text-muted">
                Already have an account? <Link to='/login'>Sign In</Link>
            </Form.Text>
        </Form>
        );
    }
}
