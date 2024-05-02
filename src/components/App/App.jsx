import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import CheckoutTable from '../CheckoutTable/CheckoutTable';


       
function App() {

  return (
    <main> 
    <Header/>
    <CheckoutTable/>
    </main>
    
  
  );
}

export default App;
