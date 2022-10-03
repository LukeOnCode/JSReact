import React, {Component} from "react";

export default class Navbar extends Component{
    render(){
        return(
            
            <div className="Navbar">
                <h1>
                    <a href="index.html">ToIndex</a>
                </h1>
                <ul>
                    <li><a href="profiles.html">dev</a></li>
                    <li><a href="register.html">dev</a></li>
                    <li><a href="login.html">dev</a></li>
                </ul>
            </div>
        );
    }
}
