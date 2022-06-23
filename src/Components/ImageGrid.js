import React from "react"
import "../index.css"
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/12.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import img7 from "../images/7.jpg"
import img8 from "../images/11.jpg"

export default function ImageGrid(){
    return(
        <div className = "MainMainGrid">
            <div className="MainGrid">
                <div className = "ImageGrid1">
                    <img src = {img1}/>
                </div>
                <div className = "ImageGrid2">
                    <img src = {img2}/>
                    <img src = {img3}/>
                </div>
                <div className = "ImageGrid3">
                    <img src = {img4}/>
                    <img src = {img5}/>
                </div>
                <div className = "ImageGrid4">
                    <img src = {img6}/>
                    <img src = {img7}/>
                </div>
                <div className = "ImageGrid5">
                    <img src = {img8}/>
                </div>
            
            </div>
            <div className = "HeroText">
                <h2>Aquí hay una cita que cambiará su lige</h2>
                <p>“Errar Es Humano, pero Más Lo Es Culpar de Ello a Otros” – “To Err Is Human, but It Is Even More So to Blame Others for It”</p>
            </div>
        </div>
    )
}