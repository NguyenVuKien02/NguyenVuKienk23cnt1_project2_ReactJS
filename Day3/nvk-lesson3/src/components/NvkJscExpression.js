import React from 'react';

export default function NvkJsxExpression() {
  // biến
  const name = "Nguyễn Vũ Kiên";

  // Biến đối tượng
  const user = {
    firstName: "Kiên",
    lastName: "Nguyễn"
  };

  // hàm
  const fullName = (user) => {
    return user.firstName + " " + user.lastName ;
  };

  // element
  const element = (
    <div>
      {/* Biểu thức jsx */}
      <h2>{fullName(user)}</h2>
      <hr />
      <h3>Welcome to, {name}</h3>
    </div>
  );

  //hàm
  const sayWelcome =(name)=>{
    if(name){
      return <h3> Welcome to {name}</h3>
    }
    else{
      return <h3> Welcome to Fit-NTU-K23CNT1</h3>
    }
  }

  return(
    <div>
      <h1>Nvk - JsxExpression</h1>
      {/*Sử dụng biến element*/}
      {element}
      <hr/>
      {sayWelcome()}
      <hr/>
      {sayWelcome("Nguyễn Vũ Kiên")}
    </div>
  )
}
