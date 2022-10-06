import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Container, Button} from 'react-bootstrap';
import {BsFillChatQuoteFill} from 'react-icons/bs'
import {AiFillRightSquare, AiFillApi, AiFillBug} from 'react-icons/ai';


export default class Landing extends Component{
    render(){
        return(
        <>
            <Container fluid="fluid" className="px-0 d-flex flex-column flex-sm-column flex-md-row vh-90">
                <div className="bg-primary vh-90">
                    <div className="vh-10">
                        <h1 className="pt-4 text-white"> Stay in touch with other devs ! </h1>
                    </div>
                    <div className="py-3 rounded-2 bg-light vh-65 w-100 d-flex flex-row flex-wrap justify-content-center" >
  
                        <div className="w-40 se-card mx-2  px-4 py-4 bg-primary rounded-4 fit-content">
                            <div className="icon-cn">
                                <i className='icon-ld' ><BsFillChatQuoteFill/></i>
                                <h1 className="mt-3 landing-h1 text-white">Message!</h1>
                            </div>
                        </div>
                        
                        <div className="w-40 se-card mx-2 px-4 py-4 bg-primary rounded-4 fit-content">
                            <div className="icon-cn">
                                <i className='icon-ld' ><AiFillRightSquare/></i>
                                <h1 className="mt-3 landing-h1 text-white">Code!</h1>
                            </div>
                        </div>
                        
                        <div className="w-40 se-card mx-2 px-4 py-4 bg-primary rounded-4 fit-content">
                            <div className="icon-cn">
                                <i className='icon-ld' ><AiFillApi/></i>
                                <h1 className="mt-3 landing-h1 text-white">Connect!</h1>
                            </div>
                        </div>
                        
                        <div className="w-40 se-card mx-2 px-4 py-4 bg-primary rounded-4 fit-content">
                            <div className="icon-cn">
                                <i className='icon-ld' ><AiFillBug/></i>
                                <h1 className="mt-3 landing-h1 text-white">Repair!</h1>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 d-flex flex-column flex-sm-column justify-content-center justify-content-sm-center vh-15 bg-primary w-100">
                            <Button className='button-ld' variant="outline-light"  size="sm" as={Link} to="/login">
                                login
                            </Button>

                            <Button className='button-ld' variant="outline-light"  size="sm" as={Link} to="/registration">
                                registration
                            </Button>
                    </div>
                </div>
            </Container>
        </>
        );
    }
}
