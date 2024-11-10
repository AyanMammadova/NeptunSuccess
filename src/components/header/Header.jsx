import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { SlRefresh } from "react-icons/sl";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import Sidebar from '../sidebar/Sidebar';
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Modal from './Modal';


function Header() {
    const menudatam = [
        {
          "id": 1,
          "menuName": "Ana səhifə",
          "submenu": []
        },
        {
          "id": 2,
          "menuName": "Haqqımızda",
          "submenu": [
            {
              "id": 1,
              "menuName": "Siyasətimiz",
              "slug": "haqqımızda/siyasətimiz"
            },
            {
              "id": 2,
              "menuName": "Yeniliklər",
              "slug": "haqqımızda/yeniliklər"
            }
          ]
        },
        {
          "id": 3,
          "menuName": "Aksiyalar",
          "submenu": [
            {
              "id": 1,
              "menuName": "Kampaniyalar",
              "slug": "aksiyalar/kampaniyalar"
            },
            {
              "id": 2,
              "menuName": "Neptun bonus kart",
              "slug": "aksiyalar/neptun-bonus-kart"
            },
            {
              "id": 3,
              "menuName": "Elektron kataloq",
              "slug": "aksiyalar/elektron-kataloq"
            }
          ]
        },
        {
          "id": 4,
          "menuName": "Supermarketlər",
          "submenu": [
            {
              "id": 1,
              "menuName": "Mağazalarımız",
              "slug": "supermarketlər/mağazalarımız"
            },
            {
              "id": 2,
              "menuName": "İrad və təkliflər",
              "slug": "supermarketlər/irad-və-təkliflər"
            },
            {
              "id": 3,
              "menuName": "Alıcıların nəzərinə",
              "slug": "supermarketlər/alıcıların-nəzərinə"
            },
            {
              "id": 4,
              "menuName": "Partnyorluq",
              "slug": "supermarketlər/partnyorluq"
            },
            {
              "id": 5,
              "menuName": "Tərəfdaşlar",
              "slug": "supermarketlər/tərəfdaşlar"
            },
            {
              "id": 6,
              "menuName": "Supermarketdə reklam",
              "slug": "supermarketlər/supermarketdə-reklam"
            }
          ]
        },
        {
          "id": 5,
          "menuName": "Karyera",
          "submenu": [
            {
              "id": 1,
              "menuName": "Işə qəbul proseduru",
              "slug": "karyera/işə-qəbul-proseduru"
            },
            {
              "id": 2,
              "menuName": "Vakansiyalar",
              "slug": "karyera/vakansiyalar"
            },
            {
              "id": 3,
              "menuName": "CV yerləşdirin",
              "slug": "karyera/cv-yerləşdirin"
            }
          ]
        },
        {
          "id": 6,
          "menuName": "Əlaqə",
          "submenu": []
        }
      ];
    const [showcategorymenu,setShowcategorymenu]=useState(false)
    const [showmenu,setShowmenu]=useState(false)
    const [menuData,setMenudata]=useState(menudatam.map(item=>({...item,showdrops:false})))
    const [isfilled,setIsfilled]=useState('')
    const [fixed,setFixed]=useState(false)
    const [modal,setModal]=useState(false)
    function handlesidemenu(){
      handlecategorymenu()
        setShowmenu(!showmenu)
        setShowcategorymenu(false)
    }
    function handlecategorymenu(){
        setShowcategorymenu(!showcategorymenu)
    }
    function changedropstatus(index){
        const newMenuData=menuData.map((item,i)=>
          i==index ? {...item,showdrops:!item.showdrops} :item
        )
        setMenudata(newMenuData)
    }

    onscroll = function () {
      if (window.scrollY >= 750) {
          setFixed(true)
      } else {
        setFixed(false)
      }
  };

    return (
        <header  className='relative'>
            <div>
              <section id='slidingmenu'>
                  <div className={`w-[90%] z-50 relative ${showmenu ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} xl:hidden transition-all duration-500`}>
                      <ul className='flex flex-col  h-[100vh] border-r-2 shadow-2xl p-[40px] w-[80%] sm:w-[50%]  bg-white fixed z-50 text-[1em] font-[400] '>
                          <IoCloseCircleOutline onClick={()=>handlesidemenu()}  className='absolute right-[10px]  top-[10px] cursor-pointer text-[1.5em]'/>
                          {menuData.map((item,i)=>{
                            return <li key={i} className='relative  cursor-pointer group'>
                                      <Link  className={`border-b-2 ${item.showdrops ? 'border-orange-400' : ''} m-[20px] w-[100%] hover:text-[#FF8300] flex items-center justify-between py-[5px]`}>
                                        {item.menuName} 
                                        {item.showdrops ?
                                        <FaMinusSquare  onClick={()=>changedropstatus(i)} className={` text-[#FF8300] ${item.submenu.length>1 ? 'block' : 'hidden'}`} /> :
                                        <FaPlusSquare  onClick={()=>changedropstatus(i)} className={`text-[#FF8300] ${item.submenu.length>1 ? 'block' : 'hidden'}`} /> 
                                        }
                                        </Link>
                                            
                                        { item.showdrops ? (
                                            <>
                                                <ul className='flex flex-col'>
                                                    {
                                                    item.submenu.map((subitem,subi)=>(
                                                        <Link  className='px-[40px] py-[10px]' key={subi}>{subitem.menuName}</Link>
                                                    ))
                                                    }
                                                </ul> 
                                            </>
                                        ) :'' }               
                                    </li>
                            })
                          }  
                      </ul>
                  </div>
              </section>
              <section id='headersection1' className={` bg-white flex  items-center `}>
                  <div className='bp600:w-[87%] w-[95%] m-[auto] flex justify-between'>
                      <div className='flex items-center justify-between sm:justify-start  w-[100%]'>
                          <Link to={'/'}>
                            <img src="../img/logo.png" className='object-contain bp600:mr-[40px] h-[50px] bp600:h-[100px]' alt="" />
                          </Link>
                          <div className='relative w-[150px] bp600:w-[300px] bp600:mr-[30px] xl:w-[500px] border-[1px] rounded-3xl border-[#FF8300] h-[35px] bp600:h-[44px] flex items-center  justify-between' >
                              <FaSearch  className='text-[orange] absolute left-[5px] hidden bp600:block'/>
                              <input  type="text" className='absolute w-[50px] left-[10px] bp600:left-[30px] ' placeholder='axtar..'/>
                              <button className='bg-[#FF8300] text-white py-[11px] px-[10px] absolute right-0 top-0 rounded-3xl hidden bp600:block'>Axtar</button>
                              <button className='bg-[#FF8300] text-white py-[9px] px-[10px] absolute right-0 top-0 rounded-3xl bp600:hidden'><FaSearch/></button>
                          </div>
                      </div>
                      <div id='mobilemenu' className='hidden xl:hidden mx-[5px] md:block pt-[20px]'>
                          <button onClick={()=>handlesidemenu()} data-dropdown-toggle="dropdown" className="text-white bg-[#FF8300] hover:bg-[#a58767] mt-[13px]  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center " type="button">
                          <TiThMenu />
                          </button>
                      </div>

                      <div className=' hidden xl:flex items-center '>
                          <div className='flex'>
                              <img className='object-contain p-[3px] ' src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAANCAYAAACkTj4ZAAAAr0lEQVQokWNkqN76n4EKgIkahjAMSoMYtynZnMMQBUkwMzPKhPkIMDIxMj5du/393x8/8YYl41VhDawKxJsrGH5ev8XwYdk6Bg59LQYmdnaGb6fOY6iDAZxe47YyYfiwYgOYLZgQwSDeWMbAyMKMoQ4GWDBEoODrsTMMAhEBYBe9X7AC7KL/f/5iqIN7bZuKDu4wCg0SYGRkZHi6fuMHgmHE0O2OVwGxYLgmSAYGBgCo1DI/FBxbhAAAAABJRU5ErkJggg==" alt="" />
                              <p className='font-mono text-[.9em] mr-[20px]'>AZE</p>
                          </div>
                          <div>
                              <img src="data:img/png;base64,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" alt="" />
                          </div>
                      </div>
                  </div>

              </section>
              <section id='headersection2' className={`${fixed ? 'fixed w-full  z-50' : ''} top-0 bg-[#FF8300] flex text-white  justify-between items-center shadow-lg shadow-gray-400 `}>
                  <div className={`w-[87%] m-[auto] flex h-[50px]  justify-between`}>
                      <div className='-m-[10px] '>
                          <div onClick={()=>handlecategorymenu()}>
                              <BiMenuAltLeft className='block lg:hidden text-[2em] bp600:text-[3em] mt-[15px] bp600:mt-[10px] cursor-pointer' />
                          </div>                 
                          <div className={`hidden lg:block  `}>
                              <Sidebar/>
                          </div>
                      </div>
                      <div id='slidingcategory'  className={`absolute top-[150px] left-[0px] ${fixed ? 'top-[49px]' : ''} z-40 h-full w-[40%] lg:hidden
                          ${showcategorymenu ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
                          
                          xl:hidden transition-all duration-500`}>
                          <Sidebar/>

                      </div>
                      <div id='menu' className='hidden xl:flex'>
                          <ul className='flex items-center h-[50px] gap-[25px] z-50 text-[.8em] font-[500]'>
                              {
                                  menuData.map((item,i)=>{
                                      return <li key={i} className='relative flex items-center h-[50px] cursor-pointer hover:text-[#EEEEEE] group'>
                                                  <Link to={'/'}>{item.menuName}</Link>
                                                      {
                                                          item.submenu.length>0 && (
                                                              <>
                                                                  <IoMdArrowDropdown />
                                                                  <div  className='absolute top-full hidden group-hover:flex flex-col bg-white p-2 space-x-2 w-[250px] rounded-b-lg transition-all ease-in-out duration-600 shadow-lg'>
                                                                      {item.submenu.map((subitem,subi)=>(
                                                                      <div key={subi} className='flex'>
                                                                          <Link to={'/'} className='text-black p-[15px]'>{subitem.menuName}</Link>
                                                                      </div>
                                                                      ))}
                                                                  </div>
                                                              </> )
                                                      }                  
                                              </li>
                                  })
                              }
                              
                            
                          </ul>
                      </div>
                      <div className='flex justify-between gap-[20px]'>
                          <div className='flex items-center gap-[8px]'>
                          <p className='flex items-center hover:text-[#EEEEEE] cursor-pointer'><IoLockClosed />Giriş  |</p> 
                          <p className='flex items-center hover:text-[#EEEEEE] cursor-pointer'><span  className='hidden bp600:block'>Hesabım</span> <IoIosArrowDown /></p>
                          </div>
                          <div className='flex p-[0px] items-center gap-[10px]'>
                              <div onMouseEnter={()=>setIsfilled(true)}
                                      onMouseLeave={()=>setIsfilled(false)}>
                                  {isfilled ? <GoHeartFill className='text-[1.5em] cursor-pointer'/>: <GoHeart className='text-[1.5em] cursor-pointer'/>}
                              </div>
                              <SlRefresh className='text-[1.5em] hover:rotate-[180deg] transition-transform duration-500    cursor-pointer'/>
                              <div className='relative'>
                                  <div  onClick={()=>{setModal(!modal)}} >
                                  <MdOutlineShoppingCart  className='text-[1.5em] cursor-pointer'/>
                                  <div className=' absolute bg-[#00FF00] px-[3px] py-0 text-black text-[.8em] -right-[5px] -top-[13px] rounded-lg'>0</div>
                                  
                                  </div>
                                  <div className={`${modal ? 'block' : 'hidden'}`}>
                                    <Modal status={modal}/>
                                  </div>
                              
                              </div>
                              
                              
                          

                          </div>

                      </div>
                      <div id='mobilemenu' className='block md:hidden pt-[10px]'>
                          <button onClick={()=>handlesidemenu()} data-dropdown-toggle="dropdown" className="text-white bg-[#ffffff] hover:bg-[#a58767]   rounded-lg text-sm px-[5px] bp600:px-5  py-2.5 text-center inline-flex items-center " type="button">
                          <TiThMenu  className='text-[#FF8300]'/>
                          </button>
                      </div>
                  </div>
                  
              </section>
              
              
            </div>
        
        </header>
    )
}

export default Header
