import React, { useContext } from 'react'
import { BASKET } from '../../context/BasketContext'

function ModalPage() {
    const {basket}=useContext(BASKET)
  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-gray-300">
                        <tr className="text-left">
                            <th className="p-3">Şəkil</th>
                            <th className="p-3">Məhsulun adı</th>
                            <th className="p-3">Model</th>
                            <th className="p-3">Say</th>
                            <th className="p-3 text-right">Qiyməti</th>
                            <th className="p-3">Məbləğ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            basket && basket.map((item,i)=>{
                                return <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <img className='h-[50px]' src={item.img} alt="" />
                                </td>
                                <td className="p-3">
                                    <p>{item.name}</p>
                                </td>
                                <td className="p-3">
                                    <p>14012022</p>
                                </td>
                                <td className="p-3">
                                    <p>{item.count}</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>{item.price.toFixed(2)}</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                        <span></span>
                                    </span>
                                </td>
                            </tr>
                            
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default ModalPage
