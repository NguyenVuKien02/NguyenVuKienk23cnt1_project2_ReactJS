import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NvkNavBar from './Components/NvkNavBar';

export default function NvkApp() {
  return (
    <BrowserRouter>
      <div>
        <NvkNavBar />        
      </div>
    </BrowserRouter>
  );
}