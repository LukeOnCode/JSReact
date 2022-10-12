import React, {Component} from "react";
import {Link, Navigate} from 'react-router-dom';
import {Container, Button} from 'react-bootstrap';
import axios from "axios";
import NotAllowed from "./not_allowed";
import SelfIntro from "./home_page_intro";

export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = ({ post: null, users: null })
        this.updateD = this.updateD.bind(this)
    }
    updateD = (data) => {
        this.setState({ post: data })
    }
    updateU = (data) => {
        this.setState({ users: data })
    }
    componentDidMount(){
        const token = localStorage.getItem("Token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token
            }
        }
        axios.get('http://localhost:5000/api/profile', config)
        .then( (res) => {
            this.updateD(res.data)
        })
        .catch(error => console.log(error))

        axios.get('http://localhost:5000/api/profile/all',config)
        .then((res) => {
            this.updateU(res.data)
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <>   
                <Container fluid="fluid" className="px-0 d-flex flex-column flex-sm-column flex-md-row vh-90">
                    <h1>Homepage</h1>
                    {
                        this.state.post && (<SelfIntro {...this.state} />)
                    }
                </Container>   
            </>
        );
    }
}
