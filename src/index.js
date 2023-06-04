import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import ReactGA from 'react-ga';

// Initialize Google Analytics
ReactGA.initialize('G-09GTV1PCZ7'); // Replace with your own Google Analytics tracking ID

// Track the initial pageview
ReactGA.pageview(window.location.pathname + window.location.search);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);


reportWebVitals();
