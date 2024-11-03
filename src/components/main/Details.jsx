import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { getProByCat } from '../../services/api'
import { PiSquaresFourFill } from 'react-icons/pi'
import { BsList } from 'react-icons/bs'
import { FaArrowsRotate } from 'react-icons/fa6'


function Details() {
  const [productsbyCategory, setProductsbyCategory] = useState(null)
  const [pageId, setPageId] = useState(1)

  const { subid } = useParams()
  useEffect(() => {
    getProByCat(subid, pageId).then(res => {
      setProductsbyCategory(res)
    })
  }, [subid, pageId])

  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => setIsOpen(!isOpen)


  return (
    <>
      <div className={`fixed inset-0 bg-black transition-opacity ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>
      <div className={`fixed left-0 top-0 w-64 bg-white h-full shadow-md transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className=" bg-white p-[20px] flex flex-col">
          <button className='text-end mb-[20px] text-[#FF8300]' onClick={toggleSidebar}>X</button>
          <div className='w-full'>
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
            <input className='mb-[20px] rangeInput w-full appearance-none pt-[20px]' type='range' min={0} max={40} step={0.1} />
            <hr />
          </div>
          <button className='mt-[20px] text-center h-[30px] px-[15px] bg-[#FF8300] text-white border rounded-[24px] text-[11px] font-bold'>
            Hamısını sıfırla
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-between items-start mx-auto w-[90%] my-[40px] lg:flex-row'>
        <div className='flex w-full lg:w-[35%] flex-col items-start lg:items-center'>
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
          <div className='mt-[20px] block lg:hidden'>
            <button onClick={toggleSidebar} className='bg-[#FF8300] py-[5px] px-[20px] ml-[20px]'>
              <BsList className='text-[25px] text-white' />
            </button>
          </div>
          <div className='mt-[20px] hidden lg:block'>
            <div className='mt-[20px] bg-white w-[350px] border rounded-[10px] p-[20px] flex flex-col items-center'>
              <div className='w-full'>
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
                <input className='mb-[20px] rangeInput w-full appearance-none pt-[20px]' type='range' min={0} max={40} step={0.1} />
                <hr />
              </div>
              <button className='mt-[20px] text-center h-[30px] px-[15px] bg-[#FF8300] text-white border rounded-[24px] text-[11px] font-bold'>
                Hamısını sıfırla
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:w-[60%] mt-[10px] lg:mt-[55px] gap-4'>
          <div className='flex justify-between items-center px-[20px]'>
            <div className='hidden lg:flex gap-3 items-center'>
              <PiSquaresFourFill className='text-[#FF8300] text-[30px]' />
              <BsList className='text-[30px]' />
            </div>
            <div className='flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-3 w-full lg:w-min'>
              <div className='flex gap-3 items-center w-full lg:w-auto'>
                <p className='text-[11px] font-bold'>Sırala:</p>
                <select className='w-full lg:w-[200px] h-[40px] text-[12px] font-bold border rounded-[24px] px-[15px] py-[9px]'>
                  <option>Əsas</option>
                </select>
              </div>
              <div className='flex gap-3 items-center w-full lg:w-auto'>
                <p className='text-[11px] font-bold'>Göstər:</p>
                <select className='w-full lg:w-[73px] h-[40px] text-[12px] font-bold border rounded-[24px] px-[15px] py-[9px]'>
                  <option>12</option>
                </select>
              </div>
              <button className='flex items-center justify-center gap-1 w-full lg:w-[105px] h-[40px] p-[11px] bg-[#FF8300] text-white border rounded-[24px] text-[11px] font-bold'>
                <FaArrowsRotate className='text-[13px]' />Müqayisə et
              </button>
            </div>
          </div>
          <div className='w-full'>
            <Pagination probycat={productsbyCategory} />
          </div>
        </div>

      </div>
    </>
  )
}

export default Details
