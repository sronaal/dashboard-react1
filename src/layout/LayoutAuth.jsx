import React from 'react'
import { Outlet } from 'react-router-dom'

function LayoutAuth() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      
        
        <Outlet/>
    </div>
  )
}

export default LayoutAuth