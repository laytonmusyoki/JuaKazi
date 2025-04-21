import React, { useState } from 'react'
import Seeker from './Seeker'
import Provider from './Provider'
import { setCredentials } from '../features/auth/userSlice'


function Register() {
    const [showpwd,setShowpwd]=useState(false)
    const [toggleService,setToggleService]=useState(true)
    const [form,setForm]=useState({
        username:'',
        email:'',
        password:'',
        confirm:'',
    })

    const HandleChange=(e)=>{
        setForm((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const ShowPassword=()=>{
        setShowpwd((prev)=>!prev)
    }

  return (
    <>
      <div className='h-auto md:max-h-[100vh] mx-auto overflow-y-hidden w-full grid grid-cols-1 lg:grid-cols-2'>
        <div className='bg-primary hidden lg:block h-full p-2 lg:p-[100px] text-white'>
            <h1 className='text-5xl lg:text-7xl font-extrabold'>Welcome to <br/> JuaKazi</h1>
            <p className='text-lg text-left'>Join as a service seeker or provider <br/> and connect with your local community. Mechanics, electricians, and more.</p>
            <div className='max-h-[200px] flex justify-start'>
                <img src="./images/car.png" className='h-full' alt=""/>
            </div>
        </div>
        <div>
            <div className='w-[95%] md:w-[80%] mx-auto md:p-10 p-1'>
                <div className='shadow-xl rounded-md h-auto w-full p-3 md:p-6'>
                    <h1 className='uppercase text-lg md:text-2xl text-left font-extrabold'>Create your account today</h1>
                    <div className='flex items-center gap-4 mt-4 justify-between'>
                        <button onClick={()=>{setToggleService(true)}} className={toggleService ?'py-2 px-1 sm:px-4 bg-primary text-white rounded-md cursor-pointer w-full':'py-2 px-1 sm:px-4 bg-gray-300 text-black rounded-md cursor-pointer w-full'}>Service Seaker</button>
                        <button onClick={()=>{setToggleService(false)}} className={! toggleService?'py-2 px-1 sm:px-4 bg-primary text-white rounded-md cursor-pointer w-full':'py-2 px-1 sm:px-4 bg-gray-300 text-black rounded-md cursor-pointer w-full'}>Service Provider</button>
                    </div>
                    <div className='mt-4'>
                        {
                            toggleService?
                            <Seeker/>
                            :
                            <Provider/>
                            
                        }
                        
                        <p className='pt-3 text-gray-600'>Already have an account? <a href="" className='text-primary'>Login</a></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Register
