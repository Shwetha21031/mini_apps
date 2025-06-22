import React from 'react'
import Header from '../../pages/Header/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './rootlayout.scss'

const Rootlayout = () => {
  return (
    <div className="body-wrapper">
      <div className="background-panel">
        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="layout">
          <Header />
          <main>
            <div className="outlet-wrapper">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Rootlayout