import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { createRoot } from 'react-dom';
// import reportWebVitals from './reportWebVitals';
// import {  BrowserRouter,Routes,Route,Link } from 'react-router-dom';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(<App />);
fetch('/api/products')
  .then(response => response.json())
  .then(data => {
    // process the data from the backend
  })
  .catch(error => {
    console.error(error);
  });





