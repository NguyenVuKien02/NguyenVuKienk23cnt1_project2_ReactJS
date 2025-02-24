import React, { Component } from 'react'

export default class NvkClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvkFullName:"Nguyễn Vũ Kiên",
            nvkAge:20,
        }
    }
    //Hàm xử lí sự kiện
    nvkEventHandleClick1 = () =>{
        //Lấy dữ liệu trong state
        alert("FullName: " +this.state.nvkFullName + "\n Age: " +this.state.nvkAge);
    }
  render() {
    return (
      <div className='alert alert-danger'>
            <button className='btn btn-primary mx-1'
                onClick={this.nvkEventHandleClick1}>Button 1 - Dữ liệu trong state</button>
            
      </div>
    )
  }
}
