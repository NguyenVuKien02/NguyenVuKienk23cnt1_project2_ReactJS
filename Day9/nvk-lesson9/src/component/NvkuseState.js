import React, { useState } from 'react';

// function NvkuseState() {
//     // Danh sách ban đầu
//     const lists = ['arr1', 'arr2'];

//     // useState với giá trị số
//     const [count, setCount] = useState(0);

//     // useState với mảng
//     const [list, setList] = useState(lists);

//     // Hàm thêm số ngẫu nhiên vào list
//     function handleList() {
//         setList([...list, parseInt(Math.random() * 1000)]);
//     }
//   return (
//     <div className='alert alert-info'>
//         <h2>Sử dụng useState</h2>
//             <p>You clicked {count} times</p>
//             <p>List: {list.toString()}</p>
            
//             <button onClick={() => setCount(count + 1)}>Click me</button>
//             <button onClick={handleList}>Click me</button>
//     </div>
//   )
// }

// export default NvkuseState



export default function NvkuseState() {
    //tạo state là count và hàm cập nhật state là setcount
    const [count,setCount] = useState(0)
    //Sử lí tăng giá trị count
    const NvkTang=()=>{
        setCount(count+1);
    }
    //State là 1 list
    const Danh_sach = [100,200,300];
    //Khởi tạo state
    const [list,setList] = useState(Danh_sach);
    //sử lí thêm phần tử ngẫu nhiên bào danh sách
     const NvkRandom = ()=>{
         setList(prev =>{
             return [...prev,
                 parseInt(Math.random()*100)
             ]
         })
    //setList([...list, parseInt(Math.random() * 1000)]);
        }
  return (
    <div className='alert alert-info'>
        <div>
            <b>Count: {count} </b>
            <button onClick={NvkTang}>Tăng</button>
            <button onClick={()=>setCount(count-1)}>Giảm</button>
            <button onClick={()=>setCount(0)}>Đặt lại</button>
        </div>
        <div>
            <h3>List: {list.toString()}</h3> 
            <button onClick={NvkRandom}>Add new (random)</button>
        </div>
    </div>
  )
}
