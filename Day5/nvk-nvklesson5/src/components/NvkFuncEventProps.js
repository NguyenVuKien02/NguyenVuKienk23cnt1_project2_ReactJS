import React from 'react'

export default function NvkFuncEventProps(props) {
    //Hàm xử lí sự kiện
    const nvkHandleButtonClick1 = () =>{
        alert("Dữ liệu từ prop:" + props.nvkRenderName)
    }
    const nvkHandleButtonClick2 = (param) =>{
        //Lấy dữ liệu từ prop
        alert("Dữ liệu từ prop (Button 2 click):" + props.nvkRenderName)
        //Dữ liệu từ tham số
        console.log("Hi:",param);
    }
  return (
    <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1'
            onClick={nvkHandleButtonClick1}>Button 1</button>

        <button className='btn btn-success mx-1'
            onClick={()=>nvkHandleButtonClick2("Button 2")}>Button 2</button>
    </div>
  )
}
