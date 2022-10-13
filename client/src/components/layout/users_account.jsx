import React, {Component} from "react";
import {Link, Navigate} from 'react-router-dom';
import {Container,Figure,Image} from 'react-bootstrap';
import {AiFillCaretRight} from 'react-icons/ai';

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
                <Container fluid="fluid" id=""className="p-0 d-flex flex-column flex-sm-column flex-md-row">
                    {
                        Object.keys(this.state.users[0].users).map(
                            (key) =>
                            <div className="px-3 py-2 w-100">
                                <Figure className="px-2 py-2 w-100 d-flex flex-row align-items-end">
                                    <Image 
                                        src={this.state.users[0].users[key].avatar}
                                        alt="profile-img"
                                        rounded="true"
                                        width="60px"
                                        />
                                    <div className="w-100 px-2 d-flex flex-column justify-content-end">
                                        <Figure.Caption as="h2">
                                            {this.state.users[0].users[key].name}
                                        </Figure.Caption>
                                        <Figure.Caption as="h4">
                                            {this.state.users[0].users[key].email}
                                        </Figure.Caption>
                                    </div>
                                    <div className="pb-1">
                                        <AiFillCaretRight/>
                                    </div>
                                </Figure>
                            </div> 
                        )
                    }
                </Container>   
        );
    }
}
