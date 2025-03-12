import React from "react";

const NvkAccountList = ({ NvkAccounts }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3 text-danger">Danh sách tài khoản</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-light  text-center">
            <tr>
              <th>STT</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {NvkAccounts.map((NvkItem, index) => (
              <tr key={NvkItem.NvkId} className="text-center">
                <td>{index + 1}</td>
                <td>{NvkItem.NvkId}</td>
                <td>{NvkItem.NvkName}</td>
                <td>{NvkItem.NvkEmail}</td>
                <td>{NvkItem.NvkAmount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NvkAccountList;