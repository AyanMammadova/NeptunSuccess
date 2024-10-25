import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniBars4 } from "react-icons/hi2";
function Sidebar() {
    const [data,setData]=useState([])


    useEffect( ()=>{
        fetch('https://neptunbk.vercel.app/categories')
        .then(res=>res.json())
        .then(datamiz=>{
            setData(datamiz)
        })
        .catch(error => console.error('Error fetching data:', error));
    },[])
    const iconData=[
        'https://neptun.az/image/catalog/icon-menu/Meyv%C9%99-v%C9%99-t%C9%99r%C9%99v%C9%99z.svg',
        'https://neptun.az/image/catalog/icon-menu/%C9%99t-v%C9%99-toyuq%20m%C9%99hsullar%C4%B1.svg',
        'https://neptun.az/image/catalog/icon-menu/Qastronom.svg',
        'https://neptun.az/image/catalog/icon-menu/%C9%99rzaq%20m%C9%99hsullar%C4%B1.svg',
        'https://neptun.az/image/catalog/icon-menu/%C5%9Eirniyyat-%C3%A7ay-v%C9%99%20q%C9%99hv%C9%99.svg',
        'https://neptun.az/image/catalog/icon-menu/%C4%B0%C3%A7kil%C9%99r.svg',
        'https://neptun.az/image/catalog/icon-menu/S%C3%BCd-m%C9%99hsullar%C4%B1.svg',
        'https://neptun.az/image/catalog/icon-menu/U%C5%9Faq-m%C9%99hsullar%C4%B1.svg',
        'https://neptun.az/image/catalog/icon-menu/Yuyucu-vasit%C9%99l%C9%99r.svg',
        'https://neptun.az/image/catalog/icon-menu/Kosmetik-v%C9%99-gigiyenik.svg',
        'https://neptun.az/image/catalog/icon-menu/M%C9%99i%C5%9F%C9%99t-m%C9%99tb%C9%99x-v%C9%99-tekstil.svg',
        'https://neptun.az/image/catalog/icon-menu/Konselyariya.svg',
        'https://neptun.az/image/catalog/icon-menu/Heyvan-yeml%C9%99ri.svg',
        'https://neptun.az/image/catalog/icon-menu/neptun-icon.svg  ',
        'https://neptun.az/image/catalog/icon-menu/neptun-icon.svg',
        'https://neptun.az/image/catalog/icon-menu/elektronika-v%C9%99-mebel.svg',]

    console.log(data)
    return (
        <div className='relative bg-white w-[270px]'>
            <div className='rounded-t-lg h-[10px] bg-[#FF8300] lg:block hidden'> </div>
            <p className='lg:flex hidden font-[600]  p-[10px] gap-[15px] text-[#FF8300]'><HiMiniBars4  className='text-[1.5em] '/> Kategoriyalar</p>
            <ul className='text-black'>
                {
                    data.map((item,i)=>{
                        return <li key={i} className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
                            <div className='flex items-center'>
                                <img key={i} src={iconData[i]} className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                                <span>{item.categoryName}</span>
                            </div>
                            <IoIosArrowForward />
                            {item.subcategory ? 
                             <div className='absolute left-full top-0 z-50 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                                    {
                                        item.subcategory?.map((subitem,subi)=>(
                                            <div key={subi} className='flex'>
                                                    <span  className='text-black p-[15px]'>{subitem.categoryName}</span>
                                            </div>
                                        ))
                                    }
                            </div> : ''
                            }
                           
                        </li>
                    })
                }
            
            
            
            <li className='relative flex justify-between text-white bg-[#FF8300] text-[.8em] font-[600] p-[10px] items-center'>
                <div className='flex items-center'>
                    <img src='https://neptun.az/image/catalog/icon-menu/Aksiyalar.svg' className='text-[1.8em] pr-[10px]' />
                    <span>Kampaniyalar</span>
                </div>
            
            </li>
            

            </ul>

        </div>
    )
}

export default Sidebar
