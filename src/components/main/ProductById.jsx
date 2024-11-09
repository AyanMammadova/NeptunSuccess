import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus, FaRegStar } from 'react-icons/fa'
import { GoHeart, GoHeartFill } from 'react-icons/go'
import { LuCheckSquare } from 'react-icons/lu'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { SlRefresh } from 'react-icons/sl'
import { Link, useParams } from 'react-router-dom'

function ProductById() {
  const {name,proid}=useParams()
  const [isfilled,setIsfilled]=useState('')
  const [product,setProduct]=useState(null)
  useEffect(()=>{
    axios.get(`https://neptunbk.vercel.app/products/${proid}`)
    .then(res=>setProduct(res.data))
  },[])
    
  return (
    <>
    <div className='w-[80%] my-[60px] mx-auto'>
        <div >
            <ul className='text-[#6c6c6c] text-[13px] font-bold flex m-[20px] gap-2 items-center'>
              <li className='flex items-center'>
                <Link to={'/'}> Ana Səhifə</Link>
              </li>
              <li className='flex items-center'><MdKeyboardArrowRight />
                <a href='#'> {name}</a>
              </li>
              
            </ul>
        </div>
        <div className='flex flex-wrap'>
        <div 
          className="relative  z-0 bp1000:w-[480px] w-[99%] h-[300px] mb-[30px] sm:h-[500px] overflow-hidden rounded-xl transition-all duration-300"
          style={{
            backgroundImage: `url(${product?.img})`,
            backgroundSize: "100%", 
            backgroundPosition: "center",
          }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            e.currentTarget.style.backgroundSize = "200%";
            e.currentTarget.style.backgroundPosition = `${x}% ${y}%`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundSize = "100%";
            e.currentTarget.style.backgroundPosition = "center";
          }}
        >
        </div>


          <div className='px-[30px] *:py-[10px] ml-[0]'>
            <b className='text-[1.3em]'>{name}</b>
            <div className='flex gap-[5px] text-[1.8em] text-[#FF8300]'>
              <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
            </div>
            <p className='text-[#6C6C6C]'>
               <a href="">0 şərh</a> | 
               <a href="">Şərh yaz</a>
            </p>
            <p className='w-[200px] flex justify-between'><span>Model:</span><span>008123</span></p>
            <p className='w-[225px] justify-between flex items-center'><span>Mövcudluq:</span><span className='flex items-center gap-[4px]'><LuCheckSquare  />Anbarda</span></p>
            <p className='text-[2em] text-[#FF8300] font-[600]'>{product?.price} ₼</p>
            <div className='flex gap-[20px] items-center '>
                <FaMinus className='text-[#FF8300] cursor-pointer' />
                <span className='p-[10px] text-[12px]'>1ədəd</span>
                <FaPlus className='text-[#FF8300] cursor-pointer' />
            </div>
            <div className='flex gap-[30px]'>
              <button 
              className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300] hidden lg:block'>Səbətə at</button>
              <div className='flex p-[0px] items-center gap-[10px] text-[#FF8300]'>
                  <div onMouseEnter={()=>setIsfilled(true)}
                            onMouseLeave={()=>setIsfilled(false)}>
                        {isfilled ? <GoHeartFill className='text-[1.5em] cursor-pointer'/>: <GoHeart className='text-[1.5em] cursor-pointer'/>}
                    </div>
                    <SlRefresh className='text-[1.5em] hover:rotate-[180deg] transition-transform duration-500    cursor-pointer'/>
                  
              </div>
            </div>
          </div>
        </div>
        <p className='py-[20px] text-[1.3em] font-[600] text-[#FF8300]'>Şərhlər(0)</p>
        <p className='py-[10px] text-[.8em]'>Bu məhsul üçün şərh yazılmayıb.</p>
        
        <form action="">
          <p className='py-[20px] text-[1.2em] font-[600]'>Şərh yaz</p>
          <input type="text" className='w-[100%] rounded-3xl h-[50px] p-[10px] my-[10px]' placeholder='Adınız yazın'/>
          <textarea className='h-[100px] w-[100%] rounded-3xl  p-[10px]' placeholder='Şərh'></textarea>
        </form>
        <p className='text-[.8em] my-[10px]'>Qeyd: HTML etiketləri işləmir!</p>
        <div className='flex gap-[5px] text-[1.8em] text-[#ce9d68] hover:text-[#FF8300] w-[200px]'>
          <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
        </div>
        <input type="text" className='w-[100%] rounded-3xl h-[50px] p-[10px] my-[10px]' placeholder='Aşağıdakı kodu daxil edin**'/>
        <img src="https://neptun.az/index.php?route=extension/captcha/basic_captcha/captcha" alt="" />
        <button className='text-white py-[3px] my-[10px] px-[15px] rounded-2xl bg-[#FF8300] block'>Davam et</button>
             
    </div>
      
    </>
  )
}

export default ProductById
