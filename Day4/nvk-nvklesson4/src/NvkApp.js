import NvkClassComp from "./component/NvkClassComp";
import NvkfuncComp from "./component/NvkfuncComp";
import NvkfunccompObj from "./component/NvkfunccompObj";

function NvkApp() {
  //object
  const users ={
    fullname: 'kien',
    age:20,
    phone:"6666"
  }
  return (
    <div className="container border mt-3">
      <h1>Demo component</h1>
      <hr/>
        <div className="alert alert-danger">
           <NvkfuncComp name="Kien" address="Vinh Quynh" company="Devmaster" />
           <hr/>
           <NvkfuncComp name="gg" address="Vinh Quynh" company="dd" />

        </div>
        <div className="alert alert-info">
          <NvkfunccompObj renderInfo={users} />
        </div>
        <NvkClassComp />
        {/*Chuyển sữ liệu từ NvkApp xuống NvkClassComp*/}
        <NvkClassComp renderName="K23CNT1" renderUser={users} />
    </div>
  );
}

export default NvkApp;
