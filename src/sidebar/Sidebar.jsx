import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniBars4 } from "react-icons/hi2";
function Sidebar() {
  return (
    <div className='relative bg-white w-[270px]'>
        <div className='rounded-t-lg h-[10px] bg-[#FF8300] lg:block hidden'> </div>
        <p className='lg:flex hidden font-[600]  p-[10px] gap-[15px] text-[#FF8300]'><HiMiniBars4  className='text-[1.5em] '/> Kategoriyalar</p>
        <ul className='text-black'>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/Meyv%C9%99-v%C9%99-t%C9%99r%C9%99v%C9%99z.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>Meyvə, tərəvəz, quru meyvə</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/%C9%99t-v%C9%99-toyuq%20m%C9%99hsullar%C4%B1.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>Ət, toyuq, dəniz məhsulları</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/Qastronom.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>Qastronom</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/%C9%99rzaq%20m%C9%99hsullar%C4%B1.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>Ərzaq məhsulları</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/%C5%9Eirniyyat-%C3%A7ay-v%C9%99%20q%C9%99hv%C9%99.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>Şirniyyat, çay, kofe, diabetik</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/%C4%B0%C3%A7kil%C9%99r.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>İçkilər</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/S%C3%BCd-m%C9%99hsullar%C4%B1.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>Süd məhsulları</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/U%C5%9Faq-m%C9%99hsullar%C4%B1.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>Uşaq məhsulları</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/Yuyucu-vasit%C9%99l%C9%99r.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>Yuyucu, təmizlik məhsulları</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/Kosmetik-v%C9%99-gigiyenik.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>Kosmetik və gigyenik</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/M%C9%99i%C5%9F%C9%99t-m%C9%99tb%C9%99x-v%C9%99-tekstil.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>Məişət, mətbəx, tekstil</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/Konselyariya.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>Konselyariya</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/Heyvan-yeml%C9%99ri.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>Heyvan məhsulları</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/neptun-icon.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>Yalnız Neptunda</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
        <li className='relative flex justify-between text-[.8em] font-[600] p-[10px] items-center hover:bg-[#FED9BE] group'>
            <div className='flex items-center'>
                <img src='https://neptun.az/image/catalog/icon-menu/elektronika-v%C9%99-mebel.svg' className='text-[#FF8300] text-[1.8em] pr-[10px]' />
                <span>Elektronika & Mebel</span>
            </div>
            <IoIosArrowForward />
            <div className='absolute left-full top-0 hidden group-hover:flex flex-col bg-white p-2 shadow-lg space-x-2 w-[250px] border-x-2 border-l-[#FF8300] border-r-[gray] transition-all ease-in-out duration-600'>
                <div className='flex'>
                    <span className='text-black p-[15px]'>Meyvə</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Tərəvəz</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Göyərti</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-black p-[10px]'>Quru meyvələr</span>
                </div>
            </div>
        </li>
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
