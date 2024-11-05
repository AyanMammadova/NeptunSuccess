import React, { useContext } from 'react'
import { DATA } from '../../context/DataContext'

import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { IoCart } from 'react-icons/io5';

function Carousel({current}) {
  const [currentData, type] = current
  // console.log(type, currentData);
  return (
    <>
    <Swiper 
          slidesPerView={ 2 }
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2400,
            disableOnInteraction: false,
          }}
          navigation={true}
          // centeredSlides={true}
          breakpoints={type=='product' ? 
            {
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 40 },
                1024: { slidesPerView: 3, spaceBetween: 50 },
            }: 
            {   640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 40 },
                1024: { slidesPerView: 5, spaceBetween: 50 }
            }
          
          }
         
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper2"
        >
          {
            currentData && currentData.map((item,i) =>
              <SwiperSlide key={i} className=' relative'>
                <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
                  <CiHeart />
                </div>
                <Link to={`/${item.name}/${item.id}`}>
                  <div className='productSlide bg-white text-center h-[100%] flex flex-col rounded-2xl py-[25px] px-[20px] '>
                    <img className='rounded-3xl inline-block object-contain w-[100px]' src={item.img} alt="" />
                    <p className='text-[10px] font-[700] overflow-hidden text-ellipsis whitespace-nowrap w-[90%] '>{item.name}</p>
                    {/*  */}
                    <div className={` items-center justify-center gap-5 ${type=='discount' ? 'flex' : 'hidden'}`}>
                      <div className={`${type=='discount' ? 'block' : ''}`}>
                        <button className='endirim text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>{item.discount}%</button>
                      </div>
                      <div>
                        <del className='text-[14px] text-gray-400'>{item.price.toFixed(2)}₼</del>
                        <p className='xl:text-[18px]'>{item.totalPrice.toFixed(2)}₼</p>
                      </div>
                    </div>
                    {/*  */}
                    <p className={`xl:text-[18px] ${type=='discount' ? 'hidden' : 'block'}`}>{item.price.toFixed(2)}₼</p>
                    
                    <div className='flex justify-center items-center '>
                      <FaMinus className='text-[#FF8300] cursor-pointer' />
                      <span className='p-[10px] text-[12px]'>1ədəd</span>
                      <FaPlus className='text-[#FF8300] cursor-pointer' />
                    </div>
                    <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300] hidden lg:block'>Səbətə at</button>
                    <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300] m-[auto] lg:hidden'><IoCart /></button>
                  </div>
                </Link>
                
              </SwiperSlide>)
          } 

        </Swiper>
    </>
  )
}

export default Carousel
