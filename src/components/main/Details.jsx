import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { getProByCat } from '../../services/api'


function Details() {
  const [productsbyCategory,setProductsbyCategory]=useState(null)
  const {subid}=useParams()
  useEffect(()=>{
    getProByCat(subid).then(res => {
      setProductsbyCategory(res)
    })
  },[subid])

 
  return (
    <>
      <div className='flex flex-col justify-between mx-auto gap-[10px] w-[90%] my-[40px] lg:flex-row'>
          <div className='flex'>
            <div className=''>
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
              <div className='mt-[20px] bg-white w-[350px] border rounded-[10px] p-[10px]'>
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
        <div className='flex flex-col'>
          <p className='bg-[gray] py-[10px]'>sen sadece burani yazassan qardasim bi de tam responsiv edessen</p>
          <Pagination probycat={productsbyCategory}/>
        </div>
      </div>
    </>
  )
}

export default Details
