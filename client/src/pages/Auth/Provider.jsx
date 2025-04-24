import React, { use, useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../../features/auth/userSlice'
import MediumLoader from '../../components/MediumLoader'
import { toast } from 'react-toastify'

function Provider() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const { isLoading,isError,isSuccess,message }=useSelector((state)=>state.user)
    const [showpwd,setShowpwd]=useState(false)
        const [form,setForm]=useState({
            username:'',
            email:'',
            password:'',
            phone:'',
            confirm:'',
            location:'',
            experience:'',
            service:'',
            user_type:'provider'
        })
    
        const HandleChange=(e)=>{
            setForm((prev)=>({
                ...prev,
                [e.target.name]:e.target.value
            }))
        }


         useEffect(()=>{  
                if(isError){
                    toast.error(message)
                }
                if(isSuccess){
                    toast.success('Registration successful')
                    navigate('/login')
                }
            },[isError,isSuccess,message,navigate])


        const HandleSubmit=(e)=>{
            e.preventDefault()
            if(form.password !== form.confirm){
                toast.error('Password do not match')
                return
            }
            if(form.username === '' || form.email === '' || form.password === '' || form.confirm === '' || form.location === '' || form.experience === ''){
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
                    location:form.location,
                    phone:form.phone,
                    experience:form.experience,
                    service:form.service,
                    user_type:form.user_type
                }
                dispatch(register(userData))
            }
        }
    
        const ShowPassword=()=>{
            setShowpwd((prev)=>!prev)
        }
    return (
      <div>
        <form onSubmit={HandleSubmit} >
            <div className='grid col-span-1 md:grid-cols-2 gap-1 w-full'>
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
                <input type="text"
                className='w-full h-[45px] pl-2 border rounded-md border-blue-500 placeholder:text-sm placeholder:font-semibold text-md font-medium text-blue-700 outline-none'
                placeholder='Enter your location'
                name='location'
                value={form.location}
                onChange={HandleChange}
                />
            </div>
            <div className='mt-2'>
            <select
                name="service"
                value={form.service}
                onChange={HandleChange}
                className='w-full h-[45px] pl-2 border rounded-md border-blue-500 placeholder:text-sm placeholder:font-semibold text-md font-medium text-blue-700 outline-none'
                >
                <option value="">Select service</option>
                {['Mechanics','Laundry','Electrician'].map((skill) => (
                    <option key={skill} value={skill}>{skill}</option>
                ))}
                </select>
            </div>
            <div className='mt-2'>
                <input type="number"
                className='w-full h-[45px] pl-2 border rounded-md border-blue-500 placeholder:text-sm placeholder:font-semibold text-md font-medium text-blue-700 outline-none'
                placeholder='Years of experience'
                name='experience'
                value={form.experience}
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
            </div>
            <div className='mt-4 flex flex-row gap-2'>
                <input type="checkbox"
                onClick={ShowPassword}
                />
                <p>Show password</p>
            </div>
            <div className='mt-4 flex flex-row gap-2'>
                <button className='w-full bg-primary text-white border-none outline-none h-[50px] rounded-md'>{isLoading ? <MediumLoader/> : 'Register'}</button>
            </div>
        </form>
      </div>
    )
  }
  
export default Provider
