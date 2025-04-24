import React from 'react'
import { MdClose } from 'react-icons/md'

function Modal({isOpen, onClose, children}) {
  if (!isOpen) return null
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/50'>
      <div className='bg-white p-6 rounded-md shadow-lg max-w-md w-full mx-3'>
        <div className='flex justify-end'>
            <MdClose onClick={onClose} className='cursor-pointer' size={20}/>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
