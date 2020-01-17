import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Game from './games-parts/Game';
import ShoppingList from './Samples/ShoppingList';
// ========================================

ReactDOM.render(
  <div>
    <Game />,
    <ShoppingList name="Shiva Sai"/>
  </div>,
  document.getElementById('root')
);
