import axios from "axios";
import React, {Component} from "react";
import {Container, Button, Card} from 'react-bootstrap';

export default class PersonalPage extends Component{
    constructor(props){
        super(props);
        this.state={ user: null, post: null }
    }
    componentDidMount(){
        const session_id = localStorage.getItem('Session_id');
        const data = {
            headers :{
                "Conten-type": "application/json"
            }
        }
        const res = axios.get(`http://localhost:5000/api/profile/user/${session_id}`, data)
        .then( res => this.setState({ user: [res.data], post:[res.data.profile] }))
        .catch(error => console.log(error))
    }   
    render(){
        console.log(this.state.post > 0);
        return(
                <Container fluid="fluid" className=" px-3 d-flex flex-column flex-sm-column flex-md-row ">
                    {
                        this.state.user ? 
                            this.state.user.map(
                                el =>
                                <Card className="bg-dark text-white">
                                    <Card.Img border="primary" src={el.avatar} alt="Card image" />
                                    <Card.ImgOverlay className="profile-grd">
                                        <Card.Title>{el.name}</Card.Title>
                                        <Card.Text>{el.date}</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            )
                         : <h1>no</h1>
                    }
                    {
                        this.state.post > 0 ? 
                            this.state.post.map(el => <h1>{el}</h1>)
                            :
                            <Card border="primary" className="my-3">
                            <Card.Header>No post here</Card.Header>
                            <Card.Body>
                              <Card.Title>Create your first post</Card.Title>
                              <Card.Text>
                                Share your code with everyone!
                                <Button>Create post</Button>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                    }
                </Container>   
        );
    }
}
