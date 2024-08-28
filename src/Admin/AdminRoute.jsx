import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminRoute = () => {
  return (
    <div>
      <div>header for admin</div>
      <div><Outlet/></div>
    </div>
  )
}

export default AdminRoute