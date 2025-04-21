import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { register, reset } from '../features/auth/userSlice'
import Loading from '../components/Loading'
import MediumLoader from '../components/MediumLoader'


function Seeker() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const { isLoading,isError,isSuccess,message }=useSelector((state)=>state.user)
    useEffect(()=>{  
        if(isError){
            toast.error(message)
        }
        if(isSuccess){
            toast.success('Registration successful')
            dispatch(reset())
            navigate('/login')
        }
    },[isLoading,isError,isSuccess,message,navigate])
    
    const [showpwd,setShowpwd]=useState(false)
        const [form,setForm]=useState({
            username:'',
            email:'',
            password:'',
            confirm:'',
            phone:'',
            user_type:'seeker'
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

        const HandleSubmit=(e)=>{
            e.preventDefault()
            if(form.password !== form.confirm){
                toast.error('Password do not match')
                return
            }
            if(form.username === '' || form.email === '' || form.password === '' || form.confirm === ''){
                toast.error('Please fill all fields')
                return
            }
            if(form.password.length < 6){
                toast.error('Password must be at least 6 characters')
                return
            }
            else{
                const userData={
                    username:form.username,
                    email:form.email,
                    password:form.password,
                    phone:form.phone,
                    user_type:form.user_type
                }
                dispatch(register(userData))
            }
        }

        if(isLoading){
            
        }

    return (
      <div>
        {/* <Loading/> */}
        <form onSubmit={HandleSubmit}>
            <div className='mt-2'>
                <input type="text"
                className='w-full h-[45px] pl-2 border rounded-md border-blue-500 placeholder:text-sm placeholder:font-semibold text-md font-medium text-blue-700 outline-none'
                placeholder='Enter your username'
                name='username'
                value={form.username}
                onChange={HandleChange}
                />
            </div>
            <div className='mt-2'>
                <input type="email"
                className='w-full h-[45px] pl-2 border rounded-md border-blue-500 placeholder:text-sm placeholder:font-semibold text-md font-medium text-blue-700 outline-none'
                placeholder='Enter your email'
                name='email'
                value={form.email}
                onChange={HandleChange}
                />
            </div>
            <div className='mt-2'>
                <input type="text"
                className='w-full h-[45px] pl-2 border rounded-md border-blue-500 placeholder:text-sm placeholder:font-semibold text-md font-medium text-blue-700 outline-none'
                placeholder='Enter your phone'
                name='phone'
                value={form.phone}
                onChange={HandleChange}
                />
            </div>
            <div className='mt-2'>
                <input type={showpwd?'text':'password'}
                className='w-full h-[45px] pl-2 border rounded-md border-blue-500 placeholder:text-sm placeholder:font-semibold text-md font-medium text-blue-700 outline-none'
                placeholder='Enter your password'
                name='password'
                value={form.password}
                onChange={HandleChange}
                />
            </div>
            <div className='mt-2'>
                <input type={showpwd?'text':'password'}
                className='w-full h-[45px] pl-2 border rounded-md border-blue-500 placeholder:text-sm placeholder:font-semibold text-md font-medium text-blue-700 outline-none'
                placeholder='Confirm your password'
                name='confirm'
                value={form.confirm}
                onChange={HandleChange}
                />
            </div>
            <div className='mt-4 flex flex-row gap-2'>
                <input type="checkbox"
                onClick={ShowPassword}
                />
                <p>Show password</p>
            </div>
            <div className='mt-4 flex flex-row gap-2'>
                <button className='w-full bg-primary text-white border-none outline-none h-[50px] rounded-md'> {isLoading ? <MediumLoader/> : 'Register'} </button>
            </div>
        </form>
      </div>
    )
  }
  

export default Seeker
