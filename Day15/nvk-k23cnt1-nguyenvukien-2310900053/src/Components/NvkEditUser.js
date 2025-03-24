import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function NvkEditUser() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        nvk_name: "",
        nvk_email: "",
        nvk_phone: "",
        NvkActive: false,
        NvkLocked: false,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const NvkApiOnline = "https://67e0ab467635238f9aae073d.mockapi.io/nvk-k23cnt1-2310900053/nvk_users";

    // Lấy dữ liệu user theo ID
    useEffect(() => {
        if (!id) {
            setError("ID không hợp lệ!");
            setLoading(false);
            return;
        }

        axios.get(`${NvkApiOnline}/${id}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                setError("Lỗi khi tải dữ liệu user");
                console.error(error);
            })
            .finally(() => setLoading(false));
    }, [id]);

    // Xử lý thay đổi input
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setUser(prevState => {
            if (name === "NvkActive") {
                return { ...prevState, NvkActive: checked, NvkLocked: !checked }; // Nếu chọn Hoạt động, bỏ chọn Khóa
            } else if (name === "NvkLocked") {
                return { ...prevState, NvkLocked: checked, NvkActive: !checked }; // Nếu chọn Khóa, bỏ chọn Hoạt động
            }
            return { ...prevState, [name]: type === "checkbox" ? checked : value };
        });
    };

    // Gửi dữ liệu cập nhật
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.put(`${NvkApiOnline}/${id}`, user)
            .then(() => {
                //alert("Cập nhật thành công!");
                navigate("/ListUsers");
            })
            .catch(error => {
                setError("Lỗi khi cập nhật user");
                console.error(error);
            })
            .finally(() => setLoading(false));
    };

    if (loading) {
        return <div className="text-center">Đang tải dữ liệu...</div>;
    }

    if (error) {
        return <div className="text-danger text-center">{error}</div>;
    }

    return (
        <div className="container mt-4">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-header bg-warning text-white text-center">
                    <h3>Cập Nhật User</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nvk_name"
                                value={user.nvk_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="nvk_email"
                                value={user.nvk_email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nvk_phone"
                                value={user.nvk_phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="NvkActive"
                                checked={user.NvkActive}
                                onChange={handleChange}
                            />
                            <label className="form-check-label">Hoạt động</label>
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="NvkLocked"
                                checked={user.NvkLocked}
                                onChange={handleChange}
                            />
                            <label className="form-check-label">Khóa</label>
                        </div>
                        <button type="submit" className="btn btn-success" disabled={loading}>
                            {loading ? "Đang lưu..." : "Lưu thay đổi"}
                        </button>
                        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/ListUsers")}>
                            Hủy
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}