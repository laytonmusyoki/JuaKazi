import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function SeekerAuth() {
  const role=useSelector((state)=>(state.user.user.user_type))
    return (
        <>
        {role === 'seeker' ? <Outlet/> : <Navigate to='/provider/dashboard' />}
        </>
    )
}

export default SeekerAuth
