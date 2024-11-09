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
  return (
    <div
    className={`${m ? 'block' : 'hidden'}  inset-0 absolute border-t-[6px] border-orange-600 top-[50px] md:-left-[300px] -left-[200px] min-w-[290px] bg-black bg-opacity-20 z-50 `}>
      <div className="max-w-sm  w-full bg-white  shadow-lg p-4 relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl">
          <AiTwotoneCloseSquare onClick={()=>{setM(!status)}} />
        </button>
        <div className='max-h-[300px] overflow-y-scroll mt-[40px]'>
          {
            basket && basket.map((item,i)=>{
              return (<div key={i} className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="flex items-center">
                  <img src={item.img} alt="Product" className="w-14 h-14 rounded-md mr-4" />
                  <div>
                    <p className="text-sm font-semibold text-black">{item.name}</p>
                    <p className="text-xs text-gray-500">KAUNASSKAYA PL/Q</p>
                  </div>
                </div>
                <div className="text-center ">
                  <p className="text-sm text-black">{item.count}x</p>
                  <p className="text-sm font-semibold text-black">{item.price.toFixed(2)}₼</p>
                </div>
                <button className="text-gray-500 hover:text-red-500 text-lg">
                  <FiTrash2 />
                </button>
              </div>)
            })
          }
        </div>
        

        <div className="flex justify-between items-center font-semibold text-lg mb-4">
          <p>Ümumi məbləğ:</p>
          <p>1.95₼</p>
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
