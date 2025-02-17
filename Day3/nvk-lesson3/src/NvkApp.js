import React from 'react';
import NvkJsxExpression from './components/NvkJscExpression';
import NvkFuncComp from './components/NvkFuncComp';
import NvkClassComp from './components/NvkClassComp';

function NvkApp() {
  return (
    <div className="container boder mt-3 bg-white">
      <h1>React JS lesson 3 - Nguyễn Vũ Kiên</h1>
      <NvkJsxExpression />
      <hr/>
      {/*sử dụng fuction component */}
      <NvkFuncComp />
      <hr/>
      {/*Sử dụng class components */}
      <NvkClassComp />
    </div>
  );
}

export default NvkApp;