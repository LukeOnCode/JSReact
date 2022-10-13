import React, {Component} from "react";
import {Link, Navigate} from 'react-router-dom';
import {Container, Button, Card} from 'react-bootstrap';
import {FaRegWindowClose} from 'react-icons/fa';
import UsersAccount from "./users_account";
import axios from 'axios'
import PersonalPage from "./personale_page";

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
    handleClick = async (e) => {
        e.preventDefault();
        try {
            const data = this.state.post[0].id;
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const res = await axios.get(`http://localhost:5000/api/profile/user/${data}`, config)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('Session_id',`${data}`);
            })
        } catch (error) {
            console.log(error.response.data);
        }
    }
    render(){
        const session = localStorage.getItem('Session_id');
        console.log(this.state.post);
        return(
            <>
            { session && (<Navigate to={`/api/profile/${session}`} replace={true} />) }
                <Container fluid="fluid" className=" px-0 d-flex flex-column flex-sm-column flex-md-row ">
                    {   
                    this.state.post.map(el=>  
                            <Card id="" className="card-banner mx-3 p-0 ">
                            <Card.Header className="d-flex align-items-center" as="h5">
                                    {el.name}
                                    <Button onClick={this.active} className="margin-inline-start" variant="light">
                                        <FaRegWindowClose/>
                                    </Button>
                                </Card.Header>
                                <Card.Body className="">
                                <Card.Title>{el.email}</Card.Title>
                                <Card.Text>to make changes go to your profile</Card.Text>
                                <Button className='button-hm' variant="primary"  size="sm" as={Link} onClick={this.handleClick}>
                                    Profile
                                </Button>
                            </Card.Body>
                        </Card>
                        ) 
                    }
                    {this.state.users && <UsersAccount {...this.state}/>}

                </Container>   
            </>
        );
    }
}
