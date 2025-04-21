import React from 'react'

function SmallNavbar({toggleNavbar,HandleSidebar}) {
  return (
    <>
      <div className={toggleNavbar?'w-[90%] py-8 px-4 z-50 fixed h-screen bg-gray-300 left-0 top-0 mx-auto':'hidden transition-all duration-300'}>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-lg md:text-4xl text-white px-2 bg-primary rounded-full'>Jua<span className='rounded-full px-2 bg-black'>Kazi</span></h1>
                </div>
                <div className='flex justify-end font-extrabold text-4xl cursor-pointer' onClick={HandleSidebar}>
                    X
                </div>
            </div>
        </div>
    </>
  )
}

export default SmallNavbar
