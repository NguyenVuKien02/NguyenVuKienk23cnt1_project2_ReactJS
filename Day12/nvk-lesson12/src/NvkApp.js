import React from 'react'
import {Link, Route, Routes, BrowserRouter} from 'react-router-dom'
import NvkHome from './Components/NvkHome'
import NvkContact from './Components/NvkContact'
import NvkAbout from './Components/NvkAbout'
import NvkTintuc from './Components/NvkTintuc'
import NvkLienhe from './Components/NvkLienhe'

export default function NvkApp() {
  return (
    <BrowserRouter>
    <div className='container boder my-3'>
        <h1 className="text-center">React Router demo</h1>
        <hr/>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">Giới thiệu</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">Sản phẩm</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Tintuc">Tin tức</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Lienhe">Liên hệ</Link>
                </li>
              </ul>
            </nav>
            <div className='alert alert-danger'>
              <Routes>
                <Route path="/" element={<NvkHome/>} />
                <Route path="/About" element={<NvkAbout/>} />
                <Route path="/Contact" element={<NvkContact/>} />
                <Route path="/Tintuc" element={<NvkTintuc/>} />
                <Route path="/Lienhe" element={<NvkLienhe/>} />
              </Routes>
            </div>
          </div>
    </div>
    </BrowserRouter>
  )
}
