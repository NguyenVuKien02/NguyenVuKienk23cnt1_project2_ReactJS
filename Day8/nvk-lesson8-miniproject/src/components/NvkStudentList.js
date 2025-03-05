import React, { Component } from 'react'
import NvkStudent from './NvkStudent'

export default class NvkStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xem
    nvkHandleView = (nvkStudent)=>{
        // Chuyển dữ liệu lên nvkApp
        this.props.onNvkHandleView(nvkStudent);
    }

  render() {
    // lấy dữ liệu trong props từ NvkApp chuyển xuống
    let {renderNvkStudents} = this.props;
    console.log("List:",renderNvkStudents);
    
    // chuyển dữ liệu vào NvkStudent để hiển thị
    let nvkElementStudent = renderNvkStudents.map((nvkItem,index)=>{
        return <NvkStudent key={index} renderNvkStudent={nvkItem} onNvkHandleView={this.nvkHandleView} />
    })
    return (
        <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {nvkElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
