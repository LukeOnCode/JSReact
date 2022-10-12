import React, {Component} from "react";
import {Link, Navigate} from 'react-router-dom';
import {Container, Button, Card} from 'react-bootstrap';
import {FaRegWindowClose} from 'react-icons/fa';

export default class SelfIntro extends Component{
    constructor(props){
        super(props);
        this.state = {
            post: [{...this.props.post}],
            isActive: true
        }
    }
    hideCard = () => {
        this.setState({isActive: false})
    }
    render(){
        console.log(this.state);
        console.log(this.state.post[0]);
        return(
                <Container fluid="fluid" className="px-0 d-flex flex-column flex-sm-column flex-md-row vh-90">
                    {
                        this.state.post.map(el => 
                        <Card className="mx-3 p-0" style={{ display: this.state.isActive ? 'block' : 'none' }}>
                            <Card.Header className="d-flex align-items-center" as="h5">
                                    {el.name}
                                    <Button onClick={this.hideCard} className="margin-inline-start" variant="light">
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
                </Container>   
        );
    }
}
