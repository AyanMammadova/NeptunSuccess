import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

function CheckOut() {
  return (
    <>
      <div className='flex p-[20px]'>
        <div className='flex justify-between items-center pb-[20px]'>
            <Link to={'/'} className='text-[#444] text-[14px] font-bold'>Ana səhifə</Link>
            <IoIosArrowForward />
        </div>
        <div className='flex justify-between items-center pb-[20px]'>
            <Link to={'/basket'} className='text-[#444] text-[14px] font-bold'>Səbət</Link>
            <IoIosArrowForward  />
        </div>
        <div className='flex justify-between items-center pb-[20px]'>
            <Link to={'/checkout'} className='text-[#444] text-[14px] font-bold'>Sifariş rəsmiləşdirmə</Link>
            <IoIosArrowForward  />
        </div>
      </div>
      öde pulunu
      <div className='min-h-[50vh]'></div>
      
    </>
  )
}

export default CheckOut
