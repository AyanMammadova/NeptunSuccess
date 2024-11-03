import { FaMinus, FaPlus } from 'react-icons/fa'
import { useState } from 'react'

function Pagination({ probycat }) {
  // const proby=probycat
  console.log(probycat)

  const [productData, setProductData] = useState(null)
  const [pageId, setPageId] = useState(1)

  return (
    <div className='flex mt-[40px] justify-between mx-[auto] min-h-[100vh] z-30'>
      <div>
        <div className='flex justify-around flex-wrap  gap-[30px]'>
          {
            probycat && probycat.map((item, id) => {
              return <>
                <div key={id} className='w-[180px]'>
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


        <div className="flex justify-center space-x-1 mt-[30px]">
          <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {
            Array(productData && productData.totalPages).fill("").map((_, i) => (
              <button onClick={() => {
                setPageId(i + 1)
              }} type="button" title={`Page ${i + 1}`} className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md text-[#ff8300] bg-white border-[#ff8300]">{i + 1}</button>
            ))
          }

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
