import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Container, Button} from 'react-bootstrap';


export default class Landing extends Component{
    render(){
        return(
            <Container fluid="fluid" className="px-0 d-flex flex-column">
                <Container fluid="lg" className="px-0 d-flex justify-content-center flex-column flex-wrap align-content-center align-item-center">
                    <div className="pt-5 bg-primary" style={{heigth:'calc(100% -600px)'}}> 
                        <h1 className="fs-2 ms-2 text-white"> Find your best developer </h1>
                        <div className="py-3 rounded-2 bg-light w-100 d-flex flex-row flex-wrap justify-content-center" >
                            <div className="mx-2 my-2 px-4 py-4 bg-primary rounded-4">
                                <div>
                                    <img src="" alt="" width="100px" height="100px" />
                                    <h1 className="text-white">Join us!</h1>
                                </div>
                            </div>
                            <div className="mx-2 my-1 px-4 py-4 bg-primary rounded-4">
                                <div>
                                    <img src="" alt="" width="100px" height="100px" />
                                    <h1 className="text-white">Join us!</h1>
                                </div>
                            </div>
                            <div className="mx-2 my-1 px-4 py-4 bg-primary rounded-4">
                                <div>
                                    <img src="" alt="" width="100px" height="100px" />
                                    <h1 className="text-white">Join us!</h1>
                                </div>
                            </div>
                            <div className="mx-2 my-1 px-4 py-4 bg-primary rounded-4">
                                <div>
                                    <img src="" alt="" width="100px" height="100px" />
                                    <h1 className="text-white">Join us!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center bg-primary">
                        <div className="mx-5 my-4 d-flex flex-row justify-content-center">
                            <Button variant="outline-light" style={{width: '100px' }} size="sm" as={Link} to="/login">
                                login
                            </Button>

                            <Button variant="outline-light" style={{ width: '100px'}} size="sm" as={Link} to="/registration">
                                registration
                            </Button>
                        </div>
                    </div>
                </Container>
            
            </Container>
            
        );
    }
}
