import React from 'react'
import NvkReadApiLocal from './Components/NvkReadApiLocal'
import NvkReadMockAPI from './Components/NvkReadMockAPI'
import NvkCreateMockAPI from './Components/NvkCreateMockAPI'

export default function NvkApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1>ReactJS-api</h1>
        <hr/>
        <NvkReadApiLocal />
        <hr/>
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        <NvkReadMockAPI />
        
        <NvkCreateMockAPI />
    </div>
  )
}
