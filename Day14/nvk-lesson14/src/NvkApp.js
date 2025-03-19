import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NvkNavBar from './components/NvkNavBar';
import './App.css';

export default function NvkApp() {
  return (
    <BrowserRouter>
      <div className='container border my-3 p-3'>
        <h1 className='text-center'>Nguyễn Vũ Kiên - Mini Project</h1>
        <NvkNavBar />        
      </div>
    </BrowserRouter>
  );
}
