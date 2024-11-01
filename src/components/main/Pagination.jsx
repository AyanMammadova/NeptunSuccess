import React, { useContext } from 'react'
import { DATA } from '../../context/DataContext'
import { FaMinus, FaPlus } from 'react-icons/fa'

function Pagination() {
  const {productData}=useContext(DATA)
  return (
    <div className='flex mt-[40px] justify-between w-[80%] mx-[auto] min-h-[100vh] z-30'>
      <div>
        <div className='flex justify-around flex-wrap lg:ml-[350px] 2xl:ml-[400px] gap-[30px]'>
          {
            productData && productData.map((item,i)=>{
              return <>
                    <div key={i} className='w-[180px]'>
                      <a href="#">
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
                      </a>
                    </div>
              </>
            })
          }
        </div>


        <div className="flex justify-center space-x-1 dark:text-gray-800">
          <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600">1</button>
          <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100" title="Page 2">2</button>
          <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100" title="Page 3">3</button>
          <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100" title="Page 4">4</button>
          <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pagination
