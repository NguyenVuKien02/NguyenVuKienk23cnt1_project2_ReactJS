import React, { useEffect, useState} from 'react'

export default function NvkUseEffect() {
  const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect (callback)");
    })
    useEffect(()=>{
      console.log("useEffect(callback,[]); chỉ 1 lần duy nhất");
    },[])

    useEffect(()=>{
      console.log('count has changed:',count);
    },)
  return (
    <div className='alert alert-danger'> 
        <h2>useEffect</h2>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}
