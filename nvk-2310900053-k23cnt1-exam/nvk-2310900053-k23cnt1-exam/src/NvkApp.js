import React, { useState } from "react";
import NvkAccountAdd from "./components/NvkAccountAdd";
import NvkAccountList from "./components/NvkAccountList";

const NvkApp = () => {
  const [NvkAccounts, setNvkAccounts] = useState([
    { NvkId: "2310900053", NvkName: "Nguyen Vu Kien", NvkEmail: "Nvk1@gmail.com", NvkAmount:11 },
    { NvkId: "002", NvkName: "Nguyen Vu B", NvkEmail: "nvb2@example.com", NvkAmount: 2 },
    { NvkId: "003", NvkName: "Nguyen Vu C", NvkEmail: "nvc3@example.com", NvkAmount: 30},
  ]);

  const addNvkAccount = (newAccount) => {
    setNvkAccounts([newAccount, ...NvkAccounts]); // Thêm tài khoản mới lên đầu danh sách
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">Quản lý tài khoản</h1>
      <div className="row">
        {/* Cột danh sách tài khoản */}
        <div className="col-lg-7">
          <NvkAccountList NvkAccounts={NvkAccounts} />
        </div>

        {/* Cột thêm tài khoản */}
        <div className="col-lg-5">
          <NvkAccountAdd addAccount={addNvkAccount} />
        </div>
      </div>
    </div>
  );
};

export default NvkApp;
