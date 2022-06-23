import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainContent from './Components/MainContent';
import ImageGrid from './Components/ImageGrid';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='ALL_CONTENTS'>
      <MainContent />
      <ImageGrid />
  </div>
);

