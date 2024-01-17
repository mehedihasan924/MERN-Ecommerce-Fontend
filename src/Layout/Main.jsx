import React from 'react'
import Navber from '../Component/Navber/Navber'
import Footer from '../Component/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
      <div>
          <Navber></Navber>
            <Outlet></Outlet>
          <Footer></Footer>
    </div>
  )
}

export default Main