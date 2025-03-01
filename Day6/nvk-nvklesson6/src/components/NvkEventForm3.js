import React, { Component } from 'react';

class NvkEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            NvkGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    NvkHandleChange = (event)=>{
        this.setState({
            NvkGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    NvkHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.NvkGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='NvkGioiTinh'  id='NvkNam' className='mx-2'
                            value="Nam" checked={this.state.NvkGioiTinh === 'Nam'} onChange={this.NvkHandleChange}/> 
                            <label htmlFor='NvkNam'>Nam</label>  
                        <input type='radio' name='NvkGioiTinh'  id='NvkNu' className='mx-2'
                            value="Nữ" checked={this.state.NvkGioiTinh === 'Nữ'} onChange={this.NvkHandleChange}/> 
                            <label htmlFor='NvkNu'>Nữ</label>  
                        <input type='radio' name='NvkGioiTinh' id='NvkKhac' className='mx-2'
                            value="Khác" checked={this.state.NvkGioiTinh === 'Khác'} onChange={this.NvkHandleChange}/> 
                            <label htmlFor='NvkKhac'>Khác</label>
                    </div>
                    <button onClick={this.NvkHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NvkEventForm3;