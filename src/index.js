import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar';
import ImageGrid from './Components/ImageGrid';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='ALL_CONTENTS'>
      <Navbar />
      <ImageGrid />
  </div>
);

