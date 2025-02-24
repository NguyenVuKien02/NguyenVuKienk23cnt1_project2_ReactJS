import React, { Component } from 'react'

export default class NvkClassCompEvent1 extends Component {
    //Hàm xử lí sự kiện
    nvkEventHandleClick1 = () =>{
        alert("Button 1 clicked");
    }
    nvkEventHandleClick2 = (name) =>{
        alert("Button 2 clicked; Name="+name);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1' onClick={this.nvkEventHandleClick1}>
            button 1
        </button>
        <button className='btn btn-success mx-1' onClick={()=>this.nvkEventHandleClick2("Kien")}>
            button 2
        </button>
      </div>
    )
  }
}
