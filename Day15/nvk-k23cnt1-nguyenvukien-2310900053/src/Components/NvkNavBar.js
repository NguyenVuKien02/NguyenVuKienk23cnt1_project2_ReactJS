import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NvkHome from './NvkHome';
import NvkListUsers from './NvkListUsers';
import NvkCreateUser from './NvkCreateUser';
import NvkEditUser from './NvkEditUser';
import './NvkNavBar.css';

export default function NvkNavBar() {
  return (
    <>
      <nav className="nvk-navbar">
        <img className="nvk-logo" 
        src=""
        alt='logo' 
        width="20"
        height="20" />
        <div className="nvk-menu-container">
            <ul className="nvk-menu" >
            <li><Link to="/Home">Trang chủ</Link></li>
            <li><Link to="/ListUsers">Danh sách User</Link></li>
            <li><Link to="/CreateUser">Thêm mới User</Link></li>
            </ul>
        </div>
      </nav>
      
      {/* Bọc Routes trong div có margin-top để tránh navbar che mất */}
      <div className="nvk-content">
        <Routes>
          <Route path="/Home" element={<NvkHome />} />
          <Route path="/ListUsers" element={<NvkListUsers />} />
          <Route path="/CreateUser" element={<NvkCreateUser />} />
          <Route path="/EditUser/:id" element={<NvkEditUser />} />
        </Routes>
      </div>
    </>
  );
}
