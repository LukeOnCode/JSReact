import React, {Component} from "react";
import {Spinner} from 'react-bootstrap';

export default class SpinnerUi extends Component{
    render(){
        return(
            <Spinner animation="border" size="sm" role="status" variant="primary"/>
        )
    }
}