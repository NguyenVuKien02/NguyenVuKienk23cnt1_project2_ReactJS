import React, { Component } from 'react'
import NvkFuncEvent1 from './components/NvkFuncEvent1'
import NvkClassCompEvent1 from './components/NvkClassCompEvent1'
import NvkFuncEventProps from './components/NvkFuncEventProps'
import NvkClassCompEventProps from './components/NvkClassCompEventProps'
import NvkClassCompEventState from './components/NvkClassCompEventState'
import NvkClassCompEventPostData from './components/NvkClassCompEventPostData'

export default class NvkApp extends Component {
  constructor(props){
    super(props);
    this.state = {
        nvkNoiDung:"chua co gi",
    }
}
  //hàm xử lí sự kiện khi component con chuyển dữ liệu lên 
  nvkHandleDataToApp = (content) =>{
    alert(content);
  }
  render() {
    return (
      <div className='container border mt-3'>
          <h1 className='text-center alert alert-info my-2'>K23CNT1 - Nguyễn Vũ Kiên - Event and Form </h1>
          <hr/>
          <div>
              <h2>Function component event</h2>
              <NvkFuncEvent1 />
          </div>
          <hr/>
          <div>
              <h2>Class component event</h2>
              <NvkClassCompEvent1 />
          </div>
          <hr/>
          <div>
              <h2>Function component event; props</h2>
              <NvkFuncEventProps nvkRenderName="Nguyễn Vũ Kiên" />
          </div>
          <hr/>
          <div>
              <h2>Class component event; props</h2>
              <NvkClassCompEventProps nvkRenderTitle="Welcome" />
          </div>
          <hr/>
          <div>
              <h2>Class component event; state</h2>
              <NvkClassCompEventState />
          </div>
          <hr/>
          <div>
              <h1>{this.state.nvkNoiDung}</h1>
              <h2>Class component event; Post Data to App</h2>
              <NvkClassCompEventPostData onNvkDatatoApp={this.nvkHandleDataToApp} />
          </div>
      </div>
    )
  }
}
