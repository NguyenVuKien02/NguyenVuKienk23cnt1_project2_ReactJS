import React, { useState } from 'react'

export default function NvkUseStateListObject() {
    const listStudent=[
        {nvkId:"SV001",nvkStudentName:"Nguyễn Vũ Kiên",nvkAge:20,nvkClass:"K23CNT1"},
        {nvkId:"SV002",nvkStudentName:"frieren",nvkAge:1000,nvkClass:"K23CNT1"},
        {nvkId:"SV003",nvkStudentName:"Tần Thủy Hoàng",nvkAge:55,nvkClass:"K23CNT1"},
        {nvkId:"SV004",nvkStudentName:"Nguyễn Nhật Nam",nvkAge:20,nvkClass:"K23CNT1"},
      ];
      //Tạo state vs hook
      const [NvkStudents,setNvkStudents] = useState(listStudent);
      //render data
      let NvkElement = NvkStudents.map((NvkItem, index)=>{
  return (
        <tr>
            <td>{index+1}</td>
            <td>{NvkItem.nvkId}</td>
            <td>{NvkItem.nvkStudentName}</td>
            <td>{NvkItem.nvkAge}</td>
            <td>{NvkItem.nvkClass}</td>
            <td>
                <button>Sửa</button>
                <button>Xóa</button>
            </td>
        </tr>
  )
})
return (
    <div className="container mt-4">
        <h2>Danh sách sinh viên</h2>
        <table className="table table-bordered table-striped">
            <thead className="table-striped">
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
)
}
