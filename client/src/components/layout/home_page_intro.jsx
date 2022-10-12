import React, {Component} from "react";
import {Link, Navigate} from 'react-router-dom';
import {Container, Button, Card} from 'react-bootstrap';
import {FaRegWindowClose} from 'react-icons/fa';

export default class SelfIntro extends Component{
    constructor(props){
        super(props);
        this.state = {
            post: [{...this.props.post}],
            users: [{...this.props.users}]
        }
    }
    active = () => {
        localStorage.setItem('Banner', "false");
        let locale = localStorage.getItem('Banner')
        let div = document.querySelector('.card-banner');
        if(locale === "false"){
            div.setAttribute('id','hidden')
        }
    }

    render(){
        let users = [];
        users.push(this.state.users[0].users);
        let maped = users[0];
        console.log(users[0]);
        return(
                <Container fluid="fluid" id=""className="card-banner px-0 d-flex flex-column flex-sm-column flex-md-row vh-90">
                    {   
                    this.state.post.map(el=>  
                            <Card className="mx-3 p-0 ">
                            <Card.Header className="d-flex align-items-center" as="h5">
                                    {el.name}
                                    <Button onClick={this.active} className="margin-inline-start" variant="light">
                                        <FaRegWindowClose/>
                                    </Button>
                                </Card.Header>
                                <Card.Body className="">
                                <Card.Title>{el.email}</Card.Title>
                                <Card.Text>to make changes go to your profile</Card.Text>
                                <Button className='button-hm' variant="primary"  size="sm" as={Link} to="#">
                                    Account
                                </Button>
                            </Card.Body>
                        </Card>
                        ) 
                    }
                    {
                        maped.map((el, i) => 
                            <h1>{el.name}</h1>
                        )
                    }
                </Container>   
        );
    }
}
