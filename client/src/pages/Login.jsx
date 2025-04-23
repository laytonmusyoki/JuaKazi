import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login, reset, setCredentials } from '../features/auth/userSlice'
import MediumLoader from '../components/MediumLoader'
import { useNavigate } from 'react-router-dom'

function Login() {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [showpwd,setShowpwd]=useState(false)
  const { isLoading,isError,isSuccess,message }=useSelector((state)=>state.user)

  const [form, setForm] = useState({
    username: '',
    password: '',
  })

    useEffect(()=>{  
        if(isError){
            // toast.error(message)
            dispatch(reset())
        }
        if(isSuccess){
            toast.success("Login successful");
            dispatch(reset())
        }
      },[isLoading,isError,isSuccess,message])

  const HandleChange=(e)=>{
    setForm((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
    }))
}

const ShowPassword=()=>{
    setShowpwd((prev)=>!prev)
}

const HandleSubmit=async(e)=>{
    e.preventDefault()
    if(form.username === '' || form.password === ''){
        toast.error('Please fill all fields')
        return
    }
    if(form.password.length < 6){
        toast.error('Password must be at least 6 characters')
        return
    }
    else{
        try{
            const res=await dispatch(login(form)).unwrap()
            dispatch(setCredentials(res))
            const role = res?.user?.user_type
            if (role === 'seeker') {
            navigate('/seeker/dashboard')
            } else if (role === 'provider') {
            navigate('/provider/dashboard')
            } else {
            toast.error('Invalid user type')
            }
        }
        catch(err){
            toast.error(err)
        }
    }
}



  return (
    <>
    <div className='h-screen w-full grid grid-cols-1 lg:grid-cols-2'>
        <div className='bg-primary hidden lg:block h-full p-2 lg:p-[100px] text-white'>
        <h1 className='text-5xl lg:text-7xl font-extrabold'>Welcome Back</h1>
        <p className='text-lg text-left'>Login to continue and connect with your community.</p>
            <div className='max-h-[200px] flex justify-start'>
                <img src="./images/car.png" className='h-full' alt=""/>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <div className='w-[95%] md:w-[80%]  mx-auto md:p-10 p-1'>
                <div className='shadow-xl rounded-md fle h-auto w-full p-3 md:p-6'>
                    <h1 className='uppercase text-lg md:text-2xl text-left font-extrabold'>Login to your account !!</h1>
                    <div className='mt-4'>
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
                                <input type={showpwd?'text':'password'}
                                className='w-full h-[45px] pl-2 border rounded-md border-blue-500 placeholder:text-sm placeholder:font-semibold text-md font-medium text-blue-700 outline-none'
                                placeholder='Enter your password'
                                name='password'
                                value={form.password}
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
                                <button className='w-full bg-primary text-white border-none outline-none h-[50px] rounded-md'> {isLoading ? <MediumLoader/> : 'Login'} </button>
                            </div>
                        </form>
                        <p className='pt-3 text-gray-600'>Don't have an account? <a href="/register" className='text-primary'>Register</a></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
