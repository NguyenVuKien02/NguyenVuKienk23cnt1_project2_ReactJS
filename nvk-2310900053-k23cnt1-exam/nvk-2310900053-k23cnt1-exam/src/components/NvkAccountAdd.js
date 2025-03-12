import React, { useState } from "react";

const NvkAccountAdd = ({ addAccount }) => {
  const [NvkId, setNvkID] =useState("");  
  const [NvkName, setNvkName] = useState("");
  const [NvkEmail, setNvkEmail] = useState("");
  const [NvkAmount, setNvkAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAccount({
      NvkId,
      NvkName,
      NvkEmail,
      NvkAmount: Number(NvkAmount),
    });
    setNvkID("");
    setNvkName("");
    setNvkEmail("");
    setNvkAmount("");
  };

  return (
    <div className="container mt-3">
      <h3 className="text-center text-success">Thêm tài khoản</h3>
      <form onSubmit={handleSubmit} className="card p-3 shadow">
      <div className="mb-3">
          <label className="form-label">Id</label>
          <input type="text" className="form-control" placeholder="Nhập Id" value={NvkId} onChange={(e) => setNvkID(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Nhập Name" value={NvkName} onChange={(e) => setNvkName(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Nhập email" value={NvkEmail} onChange={(e) => setNvkEmail(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input type="number" className="form-control" placeholder="Nhập Amount" value={NvkAmount} onChange={(e) => setNvkAmount(e.target.value)} required />
        </div>

        <button type="submit" className="btn btn-primary w-100">Thêm tài khoản</button>
      </form>
    </div>
  );
};

export default NvkAccountAdd;