import React, { useEffect, useState } from 'react'
import { BsArrowRight } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoCart } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade, FreeMode } from 'swiper/modules';
import axios from 'axios';
function Main() {
  const [productData, setProductData] = useState([])
  const [discountData, setDiscountData] = useState([])

  useEffect(() => {
    axios("https://neptunbk.vercel.app/products?limit=20&page=4")
    .then(res=>setProductData(res.data.products))
  }, [])
  useEffect(() => {
    axios("https://neptunbk.vercel.app/products/discounted")
    .then(res=>setDiscountData(res.data.products))
  }, [])
  

  return (
    <main className='bg-[#F2F2F2]'>
      <div className='lg:ml-[350px] 2xl:ml-[400px]'>
        <div className='pt-[20px] w-[90%] mx-[auto]'>
          <Swiper
            effect="fade"
            speed={1000}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            className="mySwiper"
          >
            <SwiperSlide><img className='w-[100%] object-contain' src="https://neptun.az/image/cache/webp/catalog/09.18.2024/banner-17-29-oktyabr-kataloq-1130x413.webp?v=9" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w - [100 %] object - contain' src="https://neptun.az/image/cache/webp/catalog/2.2024/esas-1130x413.webp?v=9" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w - [100 %] object - contain' src="https://neptun.az/image/cache/webp/catalog/2.2024/heftesonu-banner-cover2-1130x413.webp?v=9" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w - [100 %] object - contain' src="https://neptun.az/image/cache/webp/catalog/08.09.2024/mainbanner65afaaf3ef334cb2f90f3816-1130x413.webp?v=9" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w - [100 %] object - contain' src="https://neptun.az/image/cache/webp/catalog/09.18.2024/banner-17-29-oktyabr-kataloq-1130x413.webp?v=9" alt="" /></SwiperSlide>
          </Swiper >

          <div className='flex gap-[10px] justify-between w-[90%]  pb-[50px] mx-[auto]  mt-[20px]'>
            <div className='bg-white'>
              <div className="relative inline-block">
                <img className="cursor-pointer" src="https://neptun.az/image/cache/catalog/26.04.24/50-azn-50-bonus-1143x7272-370x225.png?v=9" />
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <button className='p-[10px] flex justify-between w-[100%] '><span className='hover:text-[#FF8300] text-[.9em] font-[500]'>50 50 Bonus</span> <BsArrowRight className='text-[1.8em]' /> </button>
            </div>
            <div className='bg-white'>
              <div className="relative inline-block">
                <img className="cursor-pointer" src="https://neptun.az/image/cache/catalog/2.2024/nes-cake-banner-sayt-370x225.jpg?v=9" />
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <button className='p-[10px] flex justify-between w-[100%] '><span className='hover:text-[#FF8300] text-[.8em] font-[500]'>Neptunda dadlı endirimlər</span> <BsArrowRight className='text-[1.8em]' /> </button>
            </div>
            <div className='bg-white hidden md:block'>
              <div className="relative inline-block">
                <img className="cursor-pointer" src="https://neptun.az/image/cache/catalog/08.09.2024/heftesonu-banner2-19-20-oktyabr-tess-cay-perwoll-370x225.jpg?v=9" />
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <button className='p-[10px] flex justify-between w-[100%] '><span className='hover:text-[#FF8300] text-[.8em] font-[500]'>Həftəsonu Endirmləri Neptun</span> <BsArrowRight className='text-[1.8em]' /> </button>
            </div>
          </div>
          <div className='hidden lg:flex 2xl:hidden gap-[10px] justify-between w-[90%]  pb-[50px] mx-[auto] '>
            <div className='bg-white'>
              <div className="relative inline-block">
                <img className="cursor-pointer" src="https://neptun.az/image/cache/catalog/26.04.24/50-azn-50-bonus-1143x7272-370x225.png?v=9" />
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <button className='p-[10px] flex justify-between w-[100%] '><span className='hover:text-[#FF8300] text-[.9em] font-[500]'>50 50 Bonus</span> <BsArrowRight className='text-[1.8em]' /> </button>
            </div>
            <div className='bg-white'>
              <div className="relative inline-block">
                <img className="cursor-pointer" src="https://neptun.az/image/cache/catalog/2.2024/nes-cake-banner-sayt-370x225.jpg?v=9" />
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <button className='p-[10px] flex justify-between w-[100%] '><span className='hover:text-[#FF8300] text-[.8em] font-[500]'>Neptunda dadlı endirimlər</span> <BsArrowRight className='text-[1.8em]' /> </button>
            </div>
            <div className='bg-white hidden md:block'>
              <div className="relative inline-block">
                <img className="cursor-pointer" src="https://neptun.az/image/cache/catalog/08.09.2024/heftesonu-banner2-19-20-oktyabr-tess-cay-perwoll-370x225.jpg?v=9" />
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <button className='p-[10px] flex justify-between w-[100%] '><span className='hover:text-[#FF8300] text-[.8em] font-[500]'>Həftəsonu Endirmləri Neptun</span> <BsArrowRight className='text-[1.8em]' /> </button>
            </div>
          </div>
        </div >
      </div>
      <p className='text-right w-[95%] text-[#FF8300] cursor-pointer'>Hamısına bax</p>
      <div className='w-[90%] m-[auto] mt-[30px]  gap-[20px] lg:flex 2xl:justify-between items-center  pb-[20px] '>
        <div className='hidden md:block lg:w-[30%] w-[100%] rounded-lg'>
          <Swiper id='reklamswiper'
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 40,
              }
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper2"
          >
            {
              Array(10).fill('hello').map((item,i) =>
                <SwiperSlide key={i} className='relative'>
                  <div className='relative h-[100%] rounded-lg'>
                    <p className='absolute  bg-[#312f2fb3] test:text-[.9em] sm:text-[1.5em] p-[10px] sm:p-[20px] text-white rounded-br-2xl '>Kategoriya: <br />Səhər yeməyi</p>
                    <img className='h-[100%]  object-contain rounded-2xl' src="https://neptun.az/image/catalog/bannerler/xususi-teklif/meyve-terevez.jpg" alt="" />
                  </div>
                </SwiperSlide>)
            }
          </Swiper>
        </div>
        <div className='my-[30px] lg:w-[70%] w-[100%]'>
          <Swiper 
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper2"
          >
            {
              productData?.map((item, i) => (
                <SwiperSlide className="relative" key={i}>
                  <div className="text-[30px] absolute hover:text-[#FF8300] top-2 right-2">
                    <CiHeart />
                  </div>
                  <a href="#">
                    <div className="bg-white text-center rounded-2xl h-[100%] py-[20px] px-[20px]">
                      <img
                        className="rounded-3xl max-w-[250px] m-auto inline-block w-[100px]"
                        src={item.img}
                        alt={item.name}
                      />
                      <p className="text-[10px] font-[600]">{item.name}</p>
                      <p className="xl:text-[18px]">{item.price.toFixed(2)}₼</p>
                      <div className="flex justify-center items-center">
                        <FaMinus className="text-[#FF8300] cursor-pointer" />
                        <span className="p-[10px] text-[12px]">1 ədəd</span>
                        <FaPlus className="text-[#FF8300] cursor-pointer" />
                      </div>
                      <button className="text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]">
                        Səbətə at
                      </button>
                    </div>
                  </a>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
      <div className='w-[87%] mx-auto py-[50px] '>
        <div className='flex justify-between items-center mb-[20px]'>
          <div>Endirimli məhsullar</div>
          <div className='text-[#FF8300]'>Hamısına bax</div>
        </div>
        <Swiper id='discountswiper'
          slidesPerView={2}
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
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper2"
        >
          {
            discountData.map((item,i) =>
              <SwiperSlide key={i} className=' relative'>
                <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
                  <CiHeart />
                </div>
                <a href='#'>
                  <div className='productSlide bg-white text-center h-[100%] flex flex-col rounded-2xl py-[25px] px-[20px] '>
                    <img className='rounded-3xl inline-block object-contain w-[100px]' src={item.img} alt="" />
                    <p className='text-[10px] font-[700] overflow-hidden text-ellipsis whitespace-nowrap w-[90%] '>{item.name}</p>
                    <div className='flex items-center justify-center gap-5 '>
                      <div>
                        <button className='endirim text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>{item.discount}%</button>
                      </div>
                      <div>
                        <del className='text-[14px] text-gray-400'>{item.price.toFixed(2)}₼</del>
                        <p className='xl:text-[18px]'>{item.totalPrice.toFixed(2)}₼</p>
                      </div>
                    </div>
                    <div className='flex justify-center items-center '>
                      <FaMinus className='text-[#FF8300] cursor-pointer' />
                      <span className='p-[10px] text-[12px]'>1ədəd</span>
                      <FaPlus className='text-[#FF8300] cursor-pointer' />
                    </div>
                    <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300] hidden lg:block'>Səbətə at</button>
                    <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300] m-[auto] lg:hidden'><IoCart /></button>
                  </div>
                </a>
                {/* <a href="#">
                  <div className="bg-white text-center rounded-2xl h-[100%] py-[20px] px-[20px]">
                    <img
                      className="rounded-3xl max-w-[250px] m-auto inline-block w-[100px]"
                      src={item.img}
                      alt={item.name}
                    />
                    <p className="text-[10px] font-[600]">{item.name}</p>
                    <p className="xl:text-[18px]">{item.price}₼</p>
                    <div className="flex justify-center items-center">
                      <FaMinus className="text-[#FF8300] cursor-pointer" />
                      <span className="p-[10px] text-[12px]">1 ədəd</span>
                      <FaPlus className="text-[#FF8300] cursor-pointer" />
                    </div>
                    <button className="text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]">
                      Səbətə at
                    </button>
                  </div>
                </a> */}
              </SwiperSlide>)
          }

        </Swiper>
      </div>
      <div className='w-[87%] mx-auto py-[50px] mt-[50px]'>
        <div className='flex justify-between items-center mb-[20px]'>
          <div>Ən çox satılanlar</div>
          <div className='text-[#FF8300]'>Hamısına bax</div>
        </div>
        <Swiper id='topselling'
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          // centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper2"
        >
          {
            productData?.map((item, i) => (
              <SwiperSlide className="relative" key={i}>
                <div className="text-[30px] absolute hover:text-[#FF8300] top-2 right-2">
                  <CiHeart />
                </div>
                <a href="#">
                  <div className="bg-white text-center rounded-2xl h-[100%] py-[20px] px-[20px]">
                    <img
                      className="rounded-3xl max-w-[250px] m-auto inline-block w-[100px]"
                      src={item.img}
                      alt={item.name}
                    />
                    <p className="text-[10px] font-[600]  overflow-hidden text-ellipsis whitespace-nowrap w-[90%] ">{item.name}</p>
                    <p className="xl:text-[18px]">{item.price.toFixed(2)}₼</p>
                    <div className="flex justify-center items-center">
                      <FaMinus className="text-[#FF8300] cursor-pointer" />
                      <span className="p-[10px] text-[12px]">1ədəd</span>
                      <FaPlus className="text-[#FF8300] cursor-pointer" />
                    </div>
                    <button className="text-white py-[3px] px-[15px] text-[.7em] rounded-2xl bg-[#FF8300]">
                      Səbətə at
                    </button>
                  </div>
                </a>
              </SwiperSlide>
            ))

          }


        </Swiper>
      </div>


      <div className='w-[87%] flex flex-row justify-evenly gap-[50px] flex-wrap mx-auto py-[50px]'>
        <img className='bp600:w-[40%] bp900:w-[20%]' src="https://neptun.az/image/catalog/bannerler/freshmaker.png" alt="" />
        <img className='bp600:w-[40%] bp900:w-[20%]' src="https://neptun.az/image/catalog/bannerler/payman.png" alt="" />
        <img className='bp600:w-[40%] bp900:w-[20%]' src="https://neptun.az/image/catalog/bannerler/joyful.png" alt="" />
        <img className='bp600:w-[40%] bp900:w-[20%]' src="https://neptun.az/image/catalog/bannerler/pfanner.png" alt="" />
      </div>

    </main >

  )
}

export default Main
