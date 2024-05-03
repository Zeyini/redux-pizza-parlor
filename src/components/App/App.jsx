import React from 'react';
import axios from 'axios';
import './App.css';
import CustomerForm from './CustomerForm';
import SelectPizza from '../SelectPizza/SelectPizza';

function App() {

  return (
    <>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <SelectPizza />
      <CustomerForm />
     
      <p>Pizza is great.</p>
      
  
    </div>
     <img id="image1" src='images/pizza_photo.png' />
     </>
  );
}

export default App;
