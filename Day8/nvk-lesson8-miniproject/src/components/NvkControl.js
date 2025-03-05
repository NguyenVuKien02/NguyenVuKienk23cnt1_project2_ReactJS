import React, { Component } from 'react'

export default class NvkControl extends Component {
  render() {
    return (
        <div className="card-header">
        <div className="row">
          <div className="col-3 ">
            <button type="button" className="btn btn-primary btn-icon-text " style={{padding: "14px 8px", fontSize: "15px" }}>
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6 ">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
              />
              <button className="btn btn-primary btn-icon-text" style={{padding: "14px 8px", fontSize: "15px" }}>
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control">
              <option value="">Sắp xếp</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}
