import React from "react"
import "./index.css"

// import image_grid from "/image_grid.png"
// const cards = 
export default function ImageGrid(){
    return(
        <div className = "MainMainGrid">
            <img className = "image_grid" src = "/images/image_grid.png"/>
            <div className = "HeroText">
                <h2>Aquí hay una cita que cambiará su lige</h2>
                <p>“Errar Es Humano, pero Más Lo Es Culpar de Ello a Otros” – “To Err Is Human, but It Is Even More So to Blame Others for It”</p>
            </div> 
        </div>
    )
}

