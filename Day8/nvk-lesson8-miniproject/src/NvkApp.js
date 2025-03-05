import React, { Component } from 'react'
import NvkControl from './components/NvkControl'
import NvkStudentList from './components/NvkStudentList'
import NvkForm from './components/NvkForm'

export default class NvkApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      nvkStudents:[
        {nvkId:"SV001",nvkStudentName:"Nguyễn Vũ Kiên",nvkAge:20,nvkGender:"Nam",nvkBirthday:"02/10/2005",nvkBirthPlace:"HN", nvkAddress:"Hà Nội"},
        {nvkId:"SV002",nvkStudentName:"frieren",nvkAge:1000,nvkGender:"Nữ",nvkBirthday:"25/05/1179",nvkBirthPlace:"HCM", nvkAddress:"Nhật Bản"},
        {nvkId:"SV003",nvkStudentName:"Tần Thủy Hoàng",nvkAge:55,nvkGender:"Nam",nvkBirthday:"25/05/1079",nvkBirthPlace:"DN", nvkAddress:"Trung Quốc"},
        {nvkId:"SV004",nvkStudentName:"Nguyễn Nhật Nam",nvkAge:20,nvkGender:"Nam",nvkBirthday:"03/12/2008",nvkBirthPlace:"HN", nvkAddress:"Hà Nội"},
      ],
      nvkStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  nvkHandleView = (nvkStudent)=>{
    this.setState({
      nvkStudent:nvkStudent,
    })
  }
  render() {
    // log
    console.log("View Student:", this.state.nvkStudent);
    return (
      <div>
          <h1 className="text-center">Nguyễn Vũ Kiên - K23CNT1 - Mini project </h1>
          <div className="row">
  <div className="col-lg-7 grid-margin stretch-card">
    <div className="card">
          {/* header */}
          <NvkControl />
          {/* Danh sách sinh viên  */}
          <NvkStudentList renderNvkStudents={this.state.nvkStudents} onNvkHandleView={this.nvkHandleView}/>
    </div>
  </div>
  <div className="col-5 grid-margin">
    {/* Form */}
    <NvkForm renderNvkStudent = {this.state.nvkStudent}/>
  </div>
</div>

      </div>
    )
  }
}
