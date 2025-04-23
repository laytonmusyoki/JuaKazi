import React from 'react'
import { useSelector } from 'react-redux'


function Dashboard() {
    const user=useSelector((state)=>(state.user.user))
  return (
    <>
      <div className='max-w-[95%] mx-auto w-full'>
        <h1 className='font-extrabold text-gray-500 text-center'>Welcome, {user.username}</h1>
        <p className='text-gray-500 text-xl text-center'>Coming soon...</p>
      </div>
    </>
  )
}

export default Dashboard
