import React, { Component } from 'react';
import NvkRenderCondition from './components/NvkRenderCondition';
import NvkRenderList from './components/NvkRenderList';
import NvkRenderListStudent from './components/NvkRenderListStudent';

class NvkApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
          <h1>Nguyễn Vũ Kiên - Lesson07 - Render condition - Render List Key</h1>
          <NvkRenderCondition />

          <NvkRenderList />

          <NvkRenderListStudent />
      </div>
    );
  }
}

export default NvkApp;