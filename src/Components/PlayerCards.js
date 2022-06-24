import React from "react";
import "../index.css"

export default function PlayerCards(props){
    return(
        <div className = "PlayerCards">
            <img className = "PlayerCards_player" src = {props.player}/>
            <div className = "PlayerCard_info">
                <img className = "star" src = "/images/red_star.ico"/>
                <p style = {{"margin-left" : "5px"}}>{props.rating}({props.count_of_people}) • Online</p>
                
            </div>
            <p className="lessons">Football Lessons</p>
            <p className="PlayerCard_price">From <strong>${props.price} </strong>/ Person</p>
        </div>
    )
}


 