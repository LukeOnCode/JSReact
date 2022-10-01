import React, { Component } from "react";
import Navbar from "./navbar";

export default class PageLayout extends Component{

    render(){
        return(
            <div className="bg-blue-400">
                <Navbar/>
            </div>
        );
    }
}
