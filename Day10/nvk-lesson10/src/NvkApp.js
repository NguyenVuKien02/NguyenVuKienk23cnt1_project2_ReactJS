import React from 'react'
import NvkUseState from './components/NvkUseState'
import NvkUseEffect from './components/NvkUseEffect'

export default function NvkApp() {
  return (
    <div className='container border my-2'>
        <h1>Demo React Hook</h1>
        <hr/>
        <NvkUseState />
        <hr/>
        <NvkUseEffect />
        
    </div>
  )
}