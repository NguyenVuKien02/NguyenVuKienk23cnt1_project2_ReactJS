import React, { Component } from 'react';
import NvkLoginControl from './NvkLoginControl';

class NvkRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    NvkHandleLogin = (ev)=>{
        ev.preventDefault();
        this.setState({
            isLoggedIn:true
        })
    }
    // Hàm xử lý sự kiện logout
    NvkHandleLogout = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:false
        })
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <NvkLoginControl isLoggedIn={this.state.isLoggedIn} />

                {
                    this.state.isLoggedIn ? 
                        <button className='btn btn-danger' onClick={this.NvkHandleLogout} >Logout</button> 
                        : <button className='btn btn-primary' onClick={this.NvkHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default NvkRenderCondition;