import React from "react";
import "../index.css"
import star from "../images/red_star.ico"
export default function PlayerCards(props){
    return(
        <div className = "PlayerCards">
            <img className = "PlayerCards_player" src = {props.player}/>
            <div className = "PlayerCard_info">
                <img className = "star" src = {star}/>
                <p style = {{"margin-left" : "5px"}}>{props.rating}({props.count_of_people}) • Online</p>
                
            </div>
            <p className="lessons">Football Lessons</p>
            <p className="PlayerCard_price">From <strong>${props.price} </strong>/ Person</p>
        </div>
    )
}