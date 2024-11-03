import React, { useContext, useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniBars4 } from "react-icons/hi2";
import { DATA } from '../../context/DataContext';
import { Link } from 'react-router-dom';
function Sidebar() {
    const [showCategory,setShowCategory]=useState(true)
    const {categoryData}=useContext(DATA)
    const [open, setOpen] = useState(true)

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
        'https://neptun.az/image/catalog/icon-menu/elektronika-v%C9%99-mebel.svg'
    ]
    console.log(showCategory)
    return (
        <div className='relative z-10 bg-white rounded-lg  w-[270px]' >
            <div className='rounded-t-lg h-[10px] bg-[#FF8300] lg:block hidden'> </div>
            <p  className={`lg:flex hidden font-[600] h-[50px]  p-[10px] gap-[15px] text-[#FF8300] cursor-pointer`} 
                onClick={() => setShowCategory(!showCategory)}>
                <HiMiniBars4   className='text-[1.5em] '/> Kategoriyalar
            </p>  
            <div className={`rounded-b-lg h-[10px] bg-[#FF8300] hidden  z-10  ${showCategory ? 'hidden' : 'block'}`}> </div>  
            
            <ul className={`text-black  ${showCategory ? 'block' : 'hidden'} z-50 bg-white`} >
                {
                    categoryData && categoryData.map((item,i)=>{
                        return <a key={i}
                                className={` ${item.subcategory.length>0 ? 'cursor-text' : 'cursor-auto'}`}
                                onClick={(event) => 
                                    {if (item.subcategory.length > 0) {event.preventDefault()};
                                    }}
                        >
                         <li  className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
                            <div className='flex items-center'>
                                <img key={i} src={iconData[i]} className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                                <span>{item.categoryName}</span>
                            </div>
                            <IoIosArrowForward  className={` ${item.subcategory.length>0 ? 'block' : 'hidden'}`}/>
                            { item.subcategory.length>0 && 
                             <div className='absolute left-[150px] sm:left-full top-0 z-50 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                                    {
                                        item.subcategory?.map((subitem,subi)=>(
                                            <Link to={`/${subitem.slug}/${subitem.id}`} key={subi}  className={` ${item.subcategory.length>0 ? 'block' : 'hidden'}`}>
                                                <div  className='flex'>
                                                        <span  className='text-black p-[15px] hover:text-[orange] hover:underline cursor-pointer'>{subitem.categoryName}</span>
                                                </div>
                                            </Link>
                                        ))
                                    }
                            </div> 
                            }
                           
                        </li>
                        </a>
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
