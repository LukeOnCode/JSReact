import React, { Component } from "react";
import Landing from "./landing";
import Navbar from "./navbar";

export default class PageLayout extends Component{

    render(){
        return(
            <div className="Layout">
                <Navbar/>
                <Landing/>
            </div>
        );
    }
}
