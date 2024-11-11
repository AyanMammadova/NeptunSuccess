import React, { useContext, useState } from 'react'
import { BASKET } from '../../context/BasketContext'
import { BiRefresh } from 'react-icons/bi'
import { TiDelete } from 'react-icons/ti'
import { Helmet } from 'react-helmet'
import { IoIosArrowForward, IoMdArrowDropdown } from 'react-icons/io'
import { Link } from 'react-router-dom'

function ModalPage() {
    const [coupon, setCoupon] = useState(false)
    const { removeFromBasket } = useContext(BASKET)
    const { basket } = useContext(BASKET)
    const { totalAllAmount } = useContext(BASKET)
    const [number, setNumber] = useState(1)
    function handleRefresh(num) {
        setNumber(num)
    }

    return (
        <>
            <Helmet>
                <title>Səbət</title>
            </Helmet>
            <div className='flex p-[20px]'>
                <div className='flex justify-between items-center pb-[20px]'>
                    <Link to={'/'} className='text-[#444] text-[14px] font-bold'>Ana səhifə</Link>
                    <IoIosArrowForward />
                </div>
                <div className='flex justify-between items-center pb-[20px]'>
                    <Link to={'/basket'} className='text-[#444] text-[14px] font-bold'>Səbət</Link>
                </div>
            </div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Səbət</h2>
                <div className="overflow-x-auto scrollable-table scrollbar-thin">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-[#DEDEDE]">
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
                                basket && basket.map((item, i) => {
                                    return <tr key={i} className=" *:border *:border-[#DEDEDE] border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                        <td className="">
                                            <img className='h-[50px]' src={item.img} alt="" />
                                        </td>
                                        <td className="p-3">
                                            <p>{item.name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>14012022</p>
                                        </td>
                                        <td className="p-3 flex items-center  gap-[5px]">
                                            <input className=' py-[8px] rounded-3xl w-[70px] text-center'
                                                type="number"
                                                onChange={(e) => { handleRefresh(e.target.value) }}
                                                value={item.count} />
                                            <button className='py-[4px] text-[2em] text-white bg-[#DE7200] rounded-3xl w-[70px]'>
                                                <BiRefresh className='m-[auto]' />
                                            </button>
                                            <button
                                                onClick={() => { removeFromBasket(item.id) }}
                                                className='py-[4px] text-[2em] text-white bg-[#D9534F] rounded-3xl w-[70px]'>
                                                <TiDelete className='m-[auto]' />
                                            </button>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>{item.price.toFixed(2)}</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <span className="px-3 py-1 font-semibold rounded-md  ">
                                                <span>{item.totalAmount.toFixed(2)}</span>
                                            </span>
                                        </td>
                                    </tr>

                                })
                            }

                        </tbody>
                    </table>

                </div>
            </div>

            <p className='text-[2em] pl-[20px]'>Daha nə etmək istəyirsiz?</p>
            <div className='w-[96%] border border-gray-300 bg-white flex items-center ml-[20px] p-[6px] text-[1.2em]'>
                <span onClick={() => { setCoupon(!coupon) }} className='hover:text-[#FF8300] flex items-center cursor-pointer'>
                    <span>
                        Kuponu istifadə et!
                    </span>
                    <IoMdArrowDropdown />
                </span>
            </div>
            <div className={`${coupon ? 'block' : 'hidden'} w-[96%] border border-gray-300 justify-between bg-white flex items-center ml-[20px] p-[6px] text-[1.2em]`}>
                <div className='flex items-center justify-between w-[40%] flex-wrap *:p-[10px]'>
                    <p className='text-[.8em] font-bold pt-[6px]'>Kupon kodu <br /> daxil et </p>
                    <input type="text" className='text-[.7em]' placeholder='Kupon kodu yaz daha' />
                </div>
                <div>
                    <button className='text-[.9em] bg-[#FF8300] p-[5px] rounded-2xl text-white mr-[10px]' >Kuponu işlət</button>
                </div>
            </div>

            <div className='w-[97%] m-[auto] flex justify-between'>
                <div></div>
                <table className=" border-collapse my-6 border border-gray-300">
                    <thead className="bg-gray-100">

                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-2 text-center">Məbləğ :</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{totalAllAmount}</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 text-center">Ümumi Məbləğ :</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{totalAllAmount}   </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex w-[96%] m-[auto] flex-wrap justify-between my-[20px]'>
                <Link to={'/'}>
                    <button className=' bg-[#FF8300] p-[5px] rounded-2xl text-white mr-[10px]'>Alış-verişə davam et</button>
                </Link>
                <Link to={'/checkout'}>
                    <button className='bg-[#FF8300] p-[5px] rounded-2xl text-white mr-[10px]'>Sifarişi rəsmiləşdir</button>
                </Link>

            </div>

        </>
    )
}

export default ModalPage
