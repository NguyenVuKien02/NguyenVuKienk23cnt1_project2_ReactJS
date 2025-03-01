import React, { Component } from 'react';

class NvkEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            NvkName:'Kiên',
            NvkAge:20,
            NvkGender:'Female',
            NvkCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    NvkHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    NvkHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.NvkName + "\n" + this.state.NvkAge);

        // Chuyển dữ liệu trên form lên App component (NvkApp);
        this.props.onNvkHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='NvkName'>Student Name:</label>
                        <input type='text' name='NvkName' id='NvkName' 
                            value={this.state.NvkName}
                            onChange={this.NvkHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='NvkAge'>Student Age:</label>
                        <input type='text' name='NvkAge' id='NvkAge' 
                            value={this.state.NvkAge}
                            onChange={this.NvkHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='NvkGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='NvkGender' id='NvkMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.NvkGender === 'Male'}
                                onChange={this.NvkHandleChange} />
                            <label htmlFor='NvkMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='NvkGender' id='NvkFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.NvkGender === 'Female'}
                                onChange={this.NvkHandleChange} />
                            <label htmlFor='NvkFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='NvkGender' id='NvkNone' className='mx-2'
                                value={'None'}
                                checked={this.state.NvkGender === 'None'}
                                onChange={this.NvkHandleChange} />
                            <label htmlFor='NvkNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='NvkCourse'>
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
                    </div>
                    <button onClick={this.NvkHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NvkEventForm5;