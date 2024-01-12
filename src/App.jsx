import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeaderWeb from '/components/HeaderWeb'
import Choice from '/components/Choice'
import './App.css'
import { Link } from 'react-router-dom';


const App = () => {
  
  return (
    <>
    <div >
    <h1>
    Koclock store
    </h1>
    </div>
      <Choice/>
     <HeaderWeb/>
    </>
  );
};


export default App
