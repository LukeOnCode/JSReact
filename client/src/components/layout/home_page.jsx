import React, {Component} from "react";
import {Link, Navigate} from 'react-router-dom';
import {Container, Button} from 'react-bootstrap';
import axios from "axios";
import NotAllowed from "./not_allowed";
import { getInfo } from "../../utils/front_utils";




export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = ({ post: null })
        this.updateD = this.updateD.bind(this)
    }
    updateD = (data) => {
        this.setState({ post: data })
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/profile')
        .then( (res) => {
            this.updateD(res.data)
        })
    }
    render(){
        console.log(this.state);
        return(
            <>   
                <Container  fluid="fluid" className="px-0 d-flex flex-column flex-sm-column flex-md-row vh-90">
                    <h1>Hello homepage</h1>
                </Container>   
            </>
        );
    }
}
