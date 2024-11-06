import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import { getProByCat } from '../../services/api'
import { PiSquaresFourFill } from 'react-icons/pi'
import { BsList } from 'react-icons/bs'
import { FaArrowsRotate } from 'react-icons/fa6'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Pagination } from 'antd'
import Loader from './Loader'
// import { Pagination } from 'swiper/modules'


function Details() {
  const [productsbyCategory, setProductsbyCategory] = useState(null)
  const { subslug, subname, subid } = useParams()
  const [pageId, setPageId] = useState(1)

  useEffect(() => {
    getProByCat(subid, pageId).then(res => {
      setProductsbyCategory(res)
    })
  }, [subid, pageId])
  // console.log(pageId)  

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
                  <Link to={'/'}> Ana Səhifə</Link>
                </li>
                <li className='flex items-center capitalize'><MdKeyboardArrowRight />
                  <a href='#'> {subslug} </a>
                </li>
                <li className='flex items-center capitalize'><MdKeyboardArrowRight />
                  <a href='#'>{subname}</a>
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
          <div className='flex flex-col lg:w-[80%] mt-[10px] lg:mt-[55px] gap-4'>
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



            <div className="flex flex-col justify-center items-center space-x-1 mt-[30px]">
              <div className='flex bp400:justify-center  justify-around flex-wrap gap-[20px]'>
                {
                  productsbyCategory  ? productsbyCategory.products.map((item, id) => (
                  <div key={item.id || id} className='w-[180px]'>
                    <Link to={`/${item.name}/${item.id}`}>
                      <div className="bg-white text-center rounded-2xl h-[100%] py-[20px] px-[20px]">
                        <img
                          className="rounded-3xl max-w-[250px] m-auto inline-block w-[100px]"
                          src={item.img}
                          alt={item.name}
                        />
                        <p className="text-[10px] font-[600]">{item.name}</p>
                        <p className="xl:text-[18px]">{item.price.toFixed(2)}₼</p>
                        <div className="flex justify-center items-center">
                          <FaMinus className="text-[#FF8300] cursor-pointer" />
                          <span className="p-[10px] text-[12px]">1 ədəd</span>
                          <FaPlus className="text-[#FF8300] cursor-pointer" />
                        </div>
                        <button className="text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]">
                          Səbətə at
                        </button>
                      </div>
                    </Link>
                  </div>
                ))
                :
                  Array(10).fill('skdbcj').map((_,i)=> <Loader key={i}/>)
                  
                }
              </div>
              <div className='flex gap-2 mt-[30px]'>
                <button
                  title="previous"
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
                >
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <div className="flex flex-wrap items-center justify-center max-w-[280px] mx-auto space-x-1">
                  {Array(productsbyCategory && productsbyCategory.totalPages)
                    .fill("")
                    .map((_, i) => {
                      const isCurrentPage = i + 1 === pageId;
                      const isEdgePage = i === 0 || i === productsbyCategory.totalPages - 1;
                      const isNearCurrentPage = Math.abs(i + 1 - pageId) <= 1;

                      if (isEdgePage || isNearCurrentPage) {
                        return (
                          <button
                            key={i}
                            onClick={() => setPageId(i + 1)}
                            type="button"
                            title={`Page ${i + 1}`}
                            className={`inline-flex items-center justify-center sm:w-8 sm:h-8 w-6 h-6 text-sm font-semibold border rounded shadow-md ${
                              isCurrentPage ? "bg-[#ff8300] text-white" : "bg-white text-[#ff8300]"
                            }`}
                          >
                            {i + 1}
                          </button>
                        );
                      }
                      if (i === 1 && pageId > 3) {
                        return <span key="prev-ellipsis" className="px-2 sm:px-2">...</span>;
                      }
                      if (i === productsbyCategory.totalPages - 2 && pageId < productsbyCategory.totalPages - 2) {
                        return <span key="next-ellipsis" className="px-2 sm:px-2">...</span>;
                      }
                      return null;
                    })}
                </div>


                <button
                  title="next"
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
                >
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
    </>
  )
}

export default Details