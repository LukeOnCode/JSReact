import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Container, Button} from 'react-bootstrap';
import {BsFillChatQuoteFill} from 'react-icons/bs'

export default class Landing extends Component{
    render(){
        return(
            <Container fluid="fluid" className="px-0 d-flex flex-column flex-sm-column flex-md-row vh-90">
                    <div className="pt-5 bg-primary vh-90"> 
                        <h1 className="fs-2 ms-2 text-white"> Find your best developer </h1>
                        <div className="py-3 rounded-2 bg-light vh-70 w-100 d-flex flex-row flex-wrap justify-content-center" >
                            <div className="mx-2 my-5 px-4 py-4 bg-primary rounded-4 fit-content">
                                <div>
                                    <i className='icon-ld' ><BsFillChatQuoteFill/></i>
                                    <h1 className="text-white">Join us!</h1>
                                </div>
                            </div>
                            <div className="mx-2 my-5 px-4 py-4 bg-primary rounded-4 fit-content">
                                <div>
                                    <i className='icon-ld' ><BsFillChatQuoteFill/></i>
                                    <h1 className="text-white">Join us!</h1>
                                </div>
                            </div>
                            <div className="mx-2 my-5 px-4 py-4 bg-primary rounded-4 fit-content">
                                <div>
                                    <i className='icon-ld' ><BsFillChatQuoteFill/></i>
                                    <h1 className="text-white">Join us!</h1>
                                </div>
                            </div>
                            <div className="mx-2 my-5 px-4 py-4 bg-primary rounded-4 fit-content">
                                <div>
                                    <i className='icon-ld' ><BsFillChatQuoteFill/></i>
                                    <h1 className="text-white">Join us!</h1>
                                </div>
                            </div>
                            <div className="px-3 d-flex flex-column flex-sm-column justify-content-center justify-content-sm-center vh-10 bg-primary w-100">
                            <Button className='mb-2' variant="outline-light"  size="sm" as={Link} to="/login">
                                login
                            </Button>

                            <Button variant="outline-light"  size="sm" as={Link} to="/registration">
                                registration
                            </Button>
                        </div>
                        </div>
                    </div>
            </Container>
        );
    }
}
