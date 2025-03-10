import React, { Component } from 'react'
import NvkuseState from './component/NvkuseState'
import NvkUseStateListObject from './component/NvkUseStateListObject'
import NvkUseEffect from './component/NvkUseEffect'

export default class NvkApp extends Component {
  render() {
    return (
      <div className="container boder mt-3">
        <h1 >React hook </h1>
        <hr/>
        <NvkuseState />

        <NvkUseStateListObject />

        <NvkUseEffect />
      </div>
    )
  }
}
