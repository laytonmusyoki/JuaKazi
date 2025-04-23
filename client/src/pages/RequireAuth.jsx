import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const RequireAuth=()=>{
    const token=useSelector((state)=>state.user.access)
    return token ? <Outlet/> : <Navigate to='/login' />
}

export default RequireAuth
