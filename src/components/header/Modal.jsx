import React, { useContext, useEffect, useState } from 'react'
import { AiTwotoneCloseSquare } from "react-icons/ai";
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BASKET } from '../../context/BasketContext';

function Modal({status,setModal}) {


  const {basket}=useContext(BASKET)
  const {removeFromBasket}=useContext(BASKET)
  const {totalAllAmount}=useContext(BASKET)
  return (
    <div
    className={`inset-0 absolute border-t-[6px] border-orange-600 top-[50px] md:-left-[300px] -left-[200px] w-[280px] bp500:w-[320px] bg-black bg-opacity-20 z-50 `}>
      <div className="max-w-sm  w-full bg-white  shadow-lg p-1 relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl">
          <AiTwotoneCloseSquare onClick={()=>{setModal(false)}} />
        </button>
        <div className="overflow-y-scroll max-h-[300px]  mt-[40px] scrollable-table">
        <table className="w-full border-collapse">
          <tbody>
            {
              basket && basket.map((item, i) => (
                <tr key={i} className="border-b py-4 mb-4">
                  <td className="flex gap-[5px] items-center">
                    <img src={item.img} alt="Product" className="h-[40px] rounded-md mr-[2px]" />
                    <div className='w-[90%]'>
                      <p className="text-xs text-black">{item.name}</p>
                    </div>
                  </td>

                  <td className="text-center w-[20%]">
                    <p className="text-sm text-black">{item.count}x</p>
                    <p className="text-sm font-semibold text-black">{item.price.toFixed(2)}</p>
                  </td>

                  <td>
                    <p className='text-black'>{(item.count * item.price).toFixed(2)}₼</p>
                  </td>

                  <td>
                    <button 
                    onClick={()=>{removeFromBasket(item.id)}}
                    className="text-gray-500 cursor-pointer hover:text-[#DE7200] text-lg">
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

        </div>
        
        

        <div className="flex text-black justify-between items-center font-semibold text-lg mb-4">
          <p>Ümumi məbləğ:</p>
          <p>{totalAllAmount.toFixed(2)}</p>
        </div>

        <div className="flex justify-between">
          <Link to={'/basket'}>
            <button onClick={()=>setModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded-md">Səbət</button>
          </Link>
          <Link to={'/checkout'}>
            <button onClick={()=>setModal(false)} className="bg-[#FF8300] text-white px-4 py-2 rounded-md">Sifarişi rəsmiləşdir</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Modal
