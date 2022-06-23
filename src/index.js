import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar';
import ImageGrid from './ImageGrid';
import PlayerCards from './Components/PlayerCards';
import Gavi from "./images/Gavi.jpg"
import Messi from "./images/messi.jpg"
import Neymar from "./images/Neymar.jpg"
import Pedri from "./images/Pedri.jpg.webp"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='ALL_CONTENTS'>
      <Navbar />
      <ImageGrid />
      <div className = "PlayerRatings">
        <PlayerCards player = {Messi} rating = {5} count_of_people = {7} price = {100}/>
        <PlayerCards player = {Gavi} rating = {5} count_of_people = {4} price = {60}/>
        <PlayerCards player = {Neymar} rating = {4} count_of_people = {9} price = {80}/>
        <PlayerCards player = {Pedri} rating = {5} count_of_people = {8} price = {90}/>
      </div>
  </div>
);

