import React from 'react'
import AdminSidebar from '../component/Admin/AdminSideBar/AdminSideBar'
import { Outlet } from 'react-router-dom'
import ProtectedRoute from '../utils/ProtectedRoute'

const AdminRootLayout = () => {
  return (
    <>
     <ProtectedRoute allowedRoles={['admin']}>
     <AdminSidebar />
      <main style={{backgroundColor: "#E2E7F0"}}>
        <Outlet />
      </main>
     </ProtectedRoute>
    
    
    </>
    
  )
}

export default AdminRootLayout