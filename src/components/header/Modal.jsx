import React, { useContext, useEffect, useState } from 'react'
import { AiTwotoneCloseSquare } from "react-icons/ai";
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BASKET } from '../../context/BasketContext';

function Modal({status}) {
  const [m,setM]=useState(status)

  useEffect(()=>{
    setM(status)
  },[status])

  const {basket}=useContext(BASKET)
  console.log(m)
  const totalAmount = basket.reduce((total, item) => total + item.count * item.price, 0)
  return (
    <div
    className={`${m ? 'block' : 'hidden'}  inset-0 absolute border-t-[6px] border-orange-600 top-[50px] md:-left-[300px] -left-[200px] w-[320px] bg-black bg-opacity-20 z-50 `}>
      <div className="max-w-sm  w-full bg-white  shadow-lg p-4 relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl">
          <AiTwotoneCloseSquare onClick={()=>{setM(!m)}} />
        </button>
        <div className="overflow-y-scroll max-h-[300px] mt-[40px] scrollable-table">
          <table className="w-full border-collapse ">
            {
              basket && basket.map((item,i)=>{
                return (<tr>
                <div key={i} className="flex gap-[6px] items-center  border-b pb-4 mb-4">
                  <div className="flex items-center">
                    <img src={item.img} alt="Product" className=" h-[40px] rounded-md mr-4" />
                    <div className='w-[45%]'>
                      <p className="text-xs  text-black">{item.name}</p>
                    </div>
                  </div>
                  
                  <div className="text-center w-[20%]">
                    <p className="text-sm text-black">{item.count}x</p>
                    <p className="text-sm font-semibold text-black">{item.price.toFixed(2)}</p>
                  </div>
                  
                  <div>
                    <p className='text-black'>{(item.count*item.price).toFixed(2)}₼</p>
                  </div>
                  
                  <button className="text-gray-500 hover:text-red-500 text-lg">
                    <FiTrash2 />
                  </button>
                </div>
                </tr>)
              })
            }
          </table>
        </div>
        
        

        <div className="flex text-black justify-between items-center font-semibold text-lg mb-4">
          <p>Ümumi məbləğ:</p>
          <p>{totalAmount.toFixed(2)}</p>
        </div>

        <div className="flex justify-between">
          <Link to={'/basket'}>
            <button onClick={()=>{setM(!status)}} className="bg-gray-500 text-white px-4 py-2 rounded-md">Səbət</button>
          </Link>
          <Link>
            <button onClick={()=>{setM(!status)}} className="bg-[#FF8300] text-white px-4 py-2 rounded-md">Sifarişi rəsmiləşdir</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Modal
