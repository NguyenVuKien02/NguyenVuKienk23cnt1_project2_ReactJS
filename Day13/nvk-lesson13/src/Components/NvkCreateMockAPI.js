// Thêm mới dữ liệu 
import React, { useState } from 'react'
import axios from 'axios'
export default function NvkCreateMockAPI() {
    // khởi tạo state
    const [NvkFullName,setNvkFullName] = useState('')
    const [NvkAge,setNvkAge] = useState(0)
    const [NvkActive,setNvkActive] = useState(true)

    // api post
    const NvkCreateUserApi = "https://67d980ed00348dd3e2ab6024.mockapi.io/K23CNT1_NguyenVuKien/Nvk_users";

    // khi submit form
    const NvkHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("NvkActive:",NvkActive);
        let NvkNewUser = {NvkFullName,NvkAge,NvkActive};
        console.log(NvkNewUser);

        // ghi dữ liệu vào api
        axios
            .post(NvkCreateUserApi, NvkNewUser)
            .then((Nvk_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="NvkFullName">Full Name</label>
                <input type='text' name='NvkFullName' id="NvkFullName" 
                    value={NvkFullName}
                    onChange={(ev)=>setNvkFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="NvkAge">Age</label>
                <input type='number' name='NvkAge' id="NvkAge" 
                    value={NvkAge}
                    onChange={(ev)=>setNvkAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="NvkActive">Active</label>
                <input type='radio' name='NvkActive' id="NvkActive_hd" value={'true'} 
                    onChange={(ev)=>setNvkActive(ev.target.value)} />
                    <label for="NvkActive_hd"> Hoạt động</label>
                <input type='radio' name='NvkActive' id="NvkActive_kh" value={'false'} 
                    onChange={(ev)=>setNvkActive(ev.target.value)}/>
                    <label for="NvkActive_kh"> Khóa</label>
            </div>
            <button onClick={NvkHandleSubmit}>Create</button>
        </form>
    </div>
  )
}