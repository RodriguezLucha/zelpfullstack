import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  console.log("Loading react.")
  const root = document.getElementById('root');
  ReactDOM.render(<h1>React is working</h1>, root);
});