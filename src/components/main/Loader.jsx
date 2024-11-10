import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Loader() {
  return (
    <div  className='w-[180px] animate-pulse'>
      <Link >
        <div className="bg-white text-center rounded-2xl h-[100%] py-[20px] px-[20px]">
          <img
            className="rounded-3xl max-w-[250px] m-auto h-[80px] inline-block w-[100px]"
           
          />
          <p className="text-[10px] font-[600]"></p>
          <p className="xl:text-[18px] h-[20px] my-[10px] bg-gray-300">  </p>
          <div className="flex justify-center items-center h-[40px] bg-gray-300">
            
          </div>
          <button className="text-white py-[3px] px-[15px] rounded-2xl bg-gray-300">
           
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Loader
