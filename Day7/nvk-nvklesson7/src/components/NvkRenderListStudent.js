import React, { Component } from 'react';

class NvkRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            NvkStudents:[
                {tcvId:"SV001",NvkName:"Trịnh Văn Chung", NvkAge:45, NvkClass:"K23CNT1"},
                {tcvId:"SV002",NvkName:"Nguyễn Quang A", NvkAge:22, NvkClass:"K23CNT1"},
                {tcvId:"SV003",NvkName:"Nguyễn Quang B", NvkAge:21, NvkClass:"K23CNT1"},
                {tcvId:"SV004",NvkName:"Nguyễn Quang C", NvkAge:23, NvkClass:"K23CNT1"},
            ],
        }
    }
    
    render() {
        // render data
        const NvkElement = this.state.NvkStudents.map((NvkItem, index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{NvkItem.tcvId}</td>
                    <td>{NvkItem.NvkName}</td>
                    <td>{NvkItem.NvkAge}</td>
                    <td>{NvkItem.NvkClass}</td>
                    <td>
                        <button className='btn btn-primary mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div className='card'>
                <div className='card-header'>
                    <h2>Danh sách sinh viên</h2>
                </div>
                <div className='card-body'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>NvkID</th>
                                <th>NvkName</th>
                                <th>NvkAge</th>
                                <th>NvkClass</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {NvkElement}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default NvkRenderListStudent;