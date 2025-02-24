import React, { Component } from 'react'

export default class NvkClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }
    //Hàm xử lí sự kiện
    nvkEventHandleClick = () =>{
        //Chuyển dữ liệu lên app thông qua props
        this.props.onNvkDatatoApp("Dữ liệu từ component con - NvkClassCompEventPostData")
    }
  render() {
    return (
      <div className='alert alert-success'>
            <button className='btn btn-primary mx-1'
                onClick={this.nvkEventHandleClick}>Button 1 - Chuyển sữ liệu lên app</button>
      </div>
    )
  }
}
