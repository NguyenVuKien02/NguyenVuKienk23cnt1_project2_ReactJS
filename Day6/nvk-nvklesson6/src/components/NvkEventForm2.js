import React, { Component } from 'react';

class NvkEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            NvkCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    NvkHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            NvkCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    NvkHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.NvkCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='NvkCourse' id='NvkCourse' 
                            value={this.state.NvkCourse}
                            onChange={this.NvkHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.NvkHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default NvkEventForm2;