import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NvkReadApiLocal() {
    // khởi tạo state
    const [NvkListUser, setNvkListUser] = useState([])
    // đọc dữ liệu từ api local  và set cho NvkListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((NvkResponse)=>{
                setNvkListUser(NvkResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    NvkListUser.map((NvkItem, index)=>{
                        return (
                            <tr>
                                <td>{NvkItem.fullName}</td>
                                <td>{NvkItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}