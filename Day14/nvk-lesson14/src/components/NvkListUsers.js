import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function NvkListUsers() {
    // Khởi tạo state 
    const [NvkListUser, setNvkListUser] = useState([]);

    // API
    const NvkApiOnline = "https://67da17cd35c87309f52aee2a.mockapi.io/K23CNT1-NguyenVuKien/nvk-users";

    // Đọc dữ liệu từ API bằng axios
    useEffect(() => {
        axios.get(NvkApiOnline)
            .then((Nvk_response) => {
                setNvkListUser(Nvk_response.data);
            })
            .catch((error) => {
                console.log("Lỗi phát sinh");
            });
    }, []);

    // Hàm xử lý xóa user
    const handleDeleteUser = (userId) => {
        const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa user này?");
        if (isConfirmed) {
            axios.delete(`${NvkApiOnline}/${userId}`)
                .then(() => {
                    setNvkListUser(NvkListUser.filter(user => user.id !== userId)); // Cập nhật danh sách
                })
                .catch(error => {
                    console.error("Lỗi khi xóa user", error);
                });
        }
    };

    const navigate = useNavigate();

    // View data
    const NvkElementUser = NvkListUser.map((Nvk_item, index) => {
        return (
            <tr key={Nvk_item.id} className="align-middle">
                <td className="fw-bold">{Nvk_item.id}</td>
                <td>{Nvk_item.nvk_name}</td>
                <td>{Nvk_item.nvk_email}</td>
                <td>{Nvk_item.nvk_phone}</td>
                <td>
                    <span className={`badge ${Nvk_item.NvkActive ? 'bg-success' : 'bg-secondary'}`}>
                        {Nvk_item.NvkActive ? 'Hoạt động' : 'Khóa'}
                    </span>
                </td>
                <td>
                    <button className="btn btn-primary btn-sm me-2" onClick={() => navigate(`/EditUser/${Nvk_item.id}`)}>Sửa</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteUser(Nvk_item.id)}>Xóa</button>
                </td>
            </tr>
        );
    });

    return (
        <div className='container mt-4'>
            <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
                <div className="card-body">
                    <table className='table table-bordered table-striped table-hover text-center'>
                        <thead className="table-light">
                            <tr>
                                <th>User ID</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Active</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {NvkElementUser}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
