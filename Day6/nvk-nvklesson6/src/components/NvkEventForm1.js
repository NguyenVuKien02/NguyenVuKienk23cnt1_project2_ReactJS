import React, { Component } from 'react';

class NvkEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            NvkStudentName:'Vũ Kiên',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (NvkStudentName) thay đổi
    NvkHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            NvkStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    NvkHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.NvkStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form  onSubmit={this.NvkHandleSubmit}>
                    <label htmlFor='NvkStudentName'>
                        <input type='text' name='NvkStudentName' id='NvkStudentName' 
                            value={this.state.NvkStudentName}
                            onChange={this.NvkHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
        );
    }
}

export default NvkEventForm1;