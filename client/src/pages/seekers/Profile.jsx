import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import api from '../../utils/axiosInstance'
import Modal from './Modal'

function Profile() {
    const [profile,setProfile]=useState({})
    const [loading,setLoading]=useState(true)
    const [openModal,setOpenModal]=useState(false)
    

    useEffect(()=>{
        const getProfile=async()=>{
            try{
                const res=await api.get('seeker/profile/')
                const {username,email,phone,user_type} =res.data
                setProfile({
                    user:username,
                    email:email,
                    phone:phone,
                    user_type:user_type,
                    image:'https://via.placeholder.com/150'
                })
            }
            catch(err){
                console.log(err)
            }
            finally{
                setLoading(false)
            }
        }

        getProfile()
    },[])


    if(loading){
        return(
            <Layout>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className=" p-6 text-center">
                        <img
                            className="w-32 h-32 object-contain rounded-full mx-auto mb-4 border animate-pulse border-dotted bg-gray-400"
                        />
                        <h1 className="text-xl font-bold animate-pulse bg-gray-300 p-10 mb-4"></h1>
                        <p className="text-sm bg-gray-300 animate-pulse capitalize mt-10 p-4"></p>
                    </div>

                    <div className="md:col-span-2 p-6 space-y-6 relative">
                        <div className="float-right  animate-pulse  bg-gray-300 w-16 px-4 py-2">
                        </div>

                        <div className='bg-gray-300 animate-pulse p-10 mt-1'>
                        </div>
                        <div className='bg-gray-300 animate-pulse p-10 mt-1'>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }


  return (
    <Layout>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Profile Info */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <img
            src={profile.image}
            className="w-32 h-32 object-contain rounded-full mx-auto mb-4 border border-dotted border-blue-700"
          />
          <h1 className="text-xl font-bold text-blue-700">{profile?.user}</h1>
          <p className="text-sm text-gray-500 capitalize">{profile?.user_type}</p>
        </div>

        {/* Details Section */}
        <div className="md:col-span-2 bg-white shadow-md rounded-xl p-6 space-y-6 relative">
          {/* Edit Button */}
          <div className="absolute top-4 right-4" onClick={()=>setOpenModal(true)}>
            <Link
              to=""
              className="flex items-center gap-2 text-blue-700 hover:text-blue-900 text-sm font-semibold border border-blue-700 px-3 py-1 rounded-full"
            >
              <FaEdit /> Edit Profile
            </Link>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold text-blue-700 mb-2">Contact Details</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><span className="font-semibold">Email:</span> {profile.email}</li>
              <li><span className="font-semibold">Phone:</span> { profile.phone } </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-blue-700 mb-2">About Me</h2>
            <p className="text-sm text-gray-700">
              Hello! I'm <strong>{profile.user}</strong>, a service profile on JuaKazi.
              I'm here to connect with skilled professionals near me for things like electrical work,
              plumbing, car repairs, and more. I value quality, trust, and reliability.
            </p>
          </div>
        </div>
        {/* Modal */}
        {
            openModal && 
            <Modal isOpen={openModal}  onClose={()=>{setOpenModal(false)}}>
                <div>
                    <form action="">
                        <h1 className="text-2xl font-bold text-blue-700 mb-4">Edit Profile</h1>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-semibold text-gray-700">Username</label>
                            <input type="text" id="username" value={profile.user} className="w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                            <input type="email" id="email" value={profile.email} className="w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone</label>
                            <input type="tel" id="phone" value={profile.phone} className="w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div className='flex items-center justify-between'>
                            <button type="button" onClick={()=>setOpenModal(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">Cancel</button>
                            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">Save Changes</button>
                        </div>
                    </form>
                </div>
            </Modal>
        }
      </div>
    </Layout>
  )
}

export default Profile
