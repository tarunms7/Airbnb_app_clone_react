import React from "react";
import '../index.css';
import airbnb from "../images/airbnb_logo.png"

export default function MainContent(){
    return(
        <nav className = "nav_header">
            <img className = "airbnb_img" src = {airbnb}/>
        </nav>
    )
}