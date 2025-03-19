import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NvkCreateUserApi() {
    const [nvk_name, setNvkFullName] = useState('');
    const [nvk_email, setNvkEmail] = useState('');
    const [nvk_phone, setNvkPhone] = useState('');
    const [NvkActive, setNvkActive] = useState(true);
    
    const navigate = useNavigate(); 
    const NvkCreateUserApi = "https://67da17cd35c87309f52aee2a.mockapi.io/K23CNT1-NguyenVuKien/nvk-users";

    const NvkHandleSubmit = (event) => {
        event.preventDefault();
        let NvkNewUser = { nvk_name, nvk_email, nvk_phone, NvkActive };
        
        axios
            .post(NvkCreateUserApi, NvkNewUser)
            .then((Nvk_response) => {
                console.log("User created:", Nvk_response.data);
                navigate('/ListUsers'); 
            })
            .catch((error) => {
                console.error("Error creating user:", error);
            });
    };

    return (
        <div className='container mt-4'>
            <div className='card shadow-lg p-4 bg-light rounded-4'>
                {/* Header với kiểu giống ảnh */}
                <div className="card-header bg-success bg-opacity-25 text-dark fw-bold rounded-2 text-center">
                    <h3>Thêm mới thông tin User</h3>
                </div>

                <div className="card-body">
                    <form>
                        <div className='mb-3'>
                            <label htmlFor="nvk_name" className="form-label fw-bold">Full Name</label>
                            <input type='text' id="nvk_name" className="form-control"
                                value={nvk_name} onChange={(ev) => setNvkFullName(ev.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="nvk_email" className="form-label fw-bold">Email</label>
                            <input type='email' id="nvk_email" className="form-control"
                                value={nvk_email} onChange={(ev) => setNvkEmail(ev.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="nvk_phone" className="form-label fw-bold">Phone</label>
                            <input type='tel' id="nvk_phone" className="form-control"
                                value={nvk_phone} onChange={(ev) => setNvkPhone(ev.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label className="form-label fw-bold">Active</label><br />
                            <div className="form-check form-check-inline">
                                <input type='radio' name='NvkActive' id="NvkActive_hd" value={'true'}
                                    className="form-check-input"
                                    onChange={(ev) => setNvkActive(ev.target.value === 'true')} />
                                <label htmlFor="NvkActive_hd" className="form-check-label text-primary"> Hoạt động</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type='radio' name='NvkActive' id="NvkActive_kh" value={'false'}
                                    className="form-check-input"
                                    onChange={(ev) => setNvkActive(ev.target.value === 'false')} />
                                <label htmlFor="NvkActive_kh" className="form-check-label text-danger"> Khóa</label>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between">
                            <button className="btn btn-success px-4" onClick={NvkHandleSubmit}>Create</button>
                            <button className="btn btn-danger px-4" onClick={() => navigate('/ListUsers')}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
