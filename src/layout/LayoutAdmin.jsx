import React from 'react'
import { Outlet } from 'react-router-dom'

function LayoutAdmin() {
  return (
    <div>LayoutAdmin
        <Outlet />
    </div>
  )
}

export default LayoutAdmin