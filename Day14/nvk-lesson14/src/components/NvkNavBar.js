import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NvkHome from './NvkHome';
import NvkListUsers from './NvkListUsers';
import NvkCreateUser from './NvkCreateUser';
import NvkEditUser from './NvkEditUser'; // Import trang sửa user
import './NvkNavBar.css';

export default function NvkNavBar() {
  return (
    <div className='container my-3'>
      <nav className="nvk-navbar">
        <ul className="nvk-menu">
          <li><Link to="/Home">🏠 Trang chủ</Link></li>
          <li><Link to="/ListUsers">📜 Danh sách User</Link></li>
          <li><Link to="/CreateUser">➕ Thêm mới User</Link></li>
        </ul>
      </nav>
      <hr />
      <div>
        <Routes>
          <Route path="/Home" element={<NvkHome />} />
          <Route path="/ListUsers" element={<NvkListUsers />} />
          <Route path="/CreateUser" element={<NvkCreateUser />} />
          <Route path="/EditUser/:id" element={<NvkEditUser />} />  {/* Route mới */}
          
        </Routes>
      </div>
    </div>
  );
}
