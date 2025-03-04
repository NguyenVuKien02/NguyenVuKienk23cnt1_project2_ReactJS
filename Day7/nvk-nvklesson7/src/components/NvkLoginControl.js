import React from 'react'
import NvkLoginComp from './NvkLoginComp'
import NvkLogoutComp from './NvkLogoutComp'

export default function NvkLoginControl(props) {
    const NvkElement = props.isLoggedIn ? <NvkLoginComp /> : <NvkLogoutComp />

    // const NvkLogin = ()=>{
    //     if(props.isLoggedIn)
    //         return <NvkLogoutComp />
    //     else 
    //         return <NvkLoginComp />
    // }

  return (
    <div>
      {NvkElement}
    </div>
  )
}