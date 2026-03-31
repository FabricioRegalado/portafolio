import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const savedTheme = localStorage.getItem('theme');
const shouldUseDark = savedTheme ? savedTheme === 'dark' : false;
document.documentElement.classList.toggle('dark', shouldUseDark);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
