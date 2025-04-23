import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

function ProviderAuth() {
    const role=useSelector((state)=>(state.user.user.user_type))
        return (
            <>
            {role === 'provider' ? <Outlet/> : <Navigate to='/seeker/dashboard' />}
            </>
        )
}

export default ProviderAuth
