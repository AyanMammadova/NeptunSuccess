import React from 'react'
import { useParams } from 'react-router-dom'
import Pagination from './Pagination'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'


function Details({ data }) {

  const { slug } = useParams()

  const product = data && data.find(item => item.slug == slug)
  console.log(product);
  console.log(slug)
  return (
    <div className='flex my-[40px] w-[80%] mx-auto'>
      <div className='w-[40%]'>
        <div>
          <ul className='text-[#6c6c6c] text-[13px] font-bold flex gap-2 items-center'>
            <li className='flex items-center'>
              <a href='#'> Ana Səhifə</a>
            </li>
            <li className='flex items-center'><MdKeyboardArrowRight />
              <a href='#'> Meyvə, tərəvəz, quru meyvə </a>
            </li>
            <li className='flex items-center'><MdKeyboardArrowRight />
              <a href='#'> Meyvə</a>
            </li>
          </ul>
        </div>
        <div className='mt-[20px] bg-white w-[290px] border rounded-[10px] p-[10px]'>
          <p className='text-[#222] text-[11px] font-bold pb-[10px]'>Filtr</p>
          <div className='flex justify-between items-center pb-[20px]'>
            <p className='text-[#444] text-[11px] font-bold'>Alt kateqoriya</p>
            <MdKeyboardArrowDown />
          </div>
          <hr />
          <div className='flex justify-between items-center pt-[10px] pb-[20px]'>
            <p className='text-[#444] text-[11px] font-bold'>Markası</p>
            <MdKeyboardArrowDown />
          </div>
          <hr />
          <div className='flex justify-between items-center pt-[10px] pb-[20px]'>
            <p className='text-[#444] text-[11px] font-bold'>Qiymət</p>
            <MdKeyboardArrowDown />
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-[12px]'>0.00 ₼</p>
            <p className='text-[12px]'>40.00 ₼</p>
          </div>
          <input className='rangeInput w-full appearance-none pt-[20px]' type='range' min={0} max={40} step={0.1}/>
        </div>
      </div>
      
    </div>
  )
}

export default Details
