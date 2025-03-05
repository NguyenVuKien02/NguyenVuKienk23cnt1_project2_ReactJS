import React, { Component } from 'react'

export default class NvkStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    nvkHandleView = (nvkStudent)=>{
        // Chuyển lên NvkStudentList
        this.props.onNvkHandleView(nvkStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ NvkStudentList
    let {renderNvkStudent, key} = this.props;
    console.log("Student:",renderNvkStudent);
    return (
        <>
        <tr>
        <td>{key}</td>
        <td>{renderNvkStudent.nvkId}</td>
        <td>{renderNvkStudent.nvkStudentName}</td>
        <td>{renderNvkStudent.nvkAge}</td>
        <td>{renderNvkStudent.nvkGender}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text"
              onClick={()=>this.nvkHandleView(renderNvkStudent)}
            >
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text"
            >
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-success btn-icon-text"
            >
              Xóa
            </button>
          </div>
        </td>
      </tr>
      </>
    )
  }
}
