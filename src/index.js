import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar';
import ImageGrid from './ImageGrid';
import PlayerCards from './Components/PlayerCards';


import data from "./data/card_data"
const cards = data.map(item => {
  return(
    <PlayerCards
     player = {item.player} 
     rating = {item.rating}
     count_of_people = {item.count_of_people} 
     price = {item.price}
    />
  )
})
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='index_main_div'>
    <Navbar />
    <div className='ALL_CONTENTS'>
      
      <ImageGrid />
    </div>
    <div className = "main_cards">
      {cards}
    </div>
    
  </div>
);

