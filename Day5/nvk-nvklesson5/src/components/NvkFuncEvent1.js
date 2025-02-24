import React from 'react'

export default function NvkFuncEvent1() {
    //Hàm xử lí sự kiện
    const nvkEventButton1Click = () =>{
        alert("Button 1 - Clicked");
    };
    const nvkEventButton2Click = () =>{
        alert("Button 2 - Clicked");
    };
    const nvkEventButton3Click = (name) =>{
        alert("Name:" + name);
    };
  return (
    <div className='alert alert-info'>
        {/* <button className='btn btn-primary' onClick={nvkEventButton1Click()}>
            button 1
        </button> */}
        <button className='btn btn-primary mx-1' onClick={nvkEventButton2Click}>
            button 2
        </button>
        {/* <button className='btn btn-success' onClick={nvkEventButton3Click("Kiên")}>
            button 3
        </button> */}
        <button className='btn btn-success mx-1' onClick={()=>nvkEventButton3Click("Kiên")}>
            button 3.5
        </button>
    </div>
  )
}
