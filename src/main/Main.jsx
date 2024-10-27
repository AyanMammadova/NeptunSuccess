import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Main() {
  return (
    <main className='bg-[#F2F2F2]'>
      <div className='lg:ml-[350px] 2xl:ml-[400px]'>
        <div className='pt-[20px] w-[90%] mx-[auto]'>
          <Swiper
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
            modules={[Autoplay, Pagination, Navigation]}
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
      <div className='w-[90%] m-[auto]  gap-[20px] justify-end 2xl:justify-between  pb-[20px] flex '>
        <div className='relative'>
          <p className='absolute  bg-[#312f2fb3] test:text-[.9em] sm:text-[1.5em] p-[10px] sm:p-[20px] text-white rounded-br-2xl '>Kategoriya: <br />Səhər yeməyi</p>
          <img className='h-[100%]  object-contain rounded-2xl' src="https://neptun.az/image/catalog/bannerler/xususi-teklif/meyve-terevez.jpg" alt="" />
        </div>
        <div className='relative'>
          <p className='absolute bg-[#312f2fb3] test:text-[.9em] sm:text-[1.5em] p-[10px] sm:p-[20px] text-white rounded-br-2xl '>Kategoriya: <br />Səhər yeməyi</p>
          <img className='h-[100%] object-contain rounded-2xl' src="https://neptun.az/image/catalog/bannerler/xususi-teklif/siyniyyat.jpg" alt="" />
        </div>
        <div className='relative lg:block  hidden'>
          <p className='absolute bg-[#312f2fb3] test:text-[.9em] sm:text-[1.5em] p-[10px] sm:p-[20px] text-white rounded-br-2xl '>Kategoriya: <br />Səhər yeməyi</p>
          <img className='h-[100%] object-contain rounded-2xl ' src="https://neptun.az/image/catalog/YEN%C4%B0/MEHSUL/11.05.2020/cerez.jpg" alt="" />
        </div>
      </div>
      <div className='w-[87%] mx-auto py-[50px]'>
        <div className='flex justify-between items-center mb-[20px]'>
          <div>Endirimli məhsullar</div>
          <div className='text-[#FF8300]'>Hamısına bax</div>
        </div>
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
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href='#'>
              <div className='productSlide bg-white text-center rounded-2xl py-[25px] px-[20px] '>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/OZMO20GREQQGERCEKSOKOLAD-1000x1000.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>OZMO 20GR EQQ GERCEK SOKOLAD</p>
                <div className='flex items-center justify-center gap-5'>
                  <div>
                    <button className='endirim text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>-18%</button>
                  </div>
                  <div>
                    <del className='text-[16px] text-gray-400'>2.00 ₼</del>
                    <p className='text-[22px]'>1.65 ₼</p>
                  </div>
                </div>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href='#'>
              <div className='productSlide bg-white text-center rounded-2xl py-[25px] px-[20px] '>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/OZMO20GREQQGERCEKSOKOLAD-1000x1000.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>OZMO 20GR EQQ GERCEK SOKOLAD</p>
                <div className='flex items-center justify-center gap-5'>
                  <div>
                    <button className='endirim text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>-18%</button>
                  </div>
                  <div>
                    <del className='text-[16px] text-gray-400'>2.00 ₼</del>
                    <p className='text-[22px]'>1.65 ₼</p>
                  </div>
                </div>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href='#'>
              <div className='productSlide bg-white text-center rounded-2xl py-[25px] px-[20px] '>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/OZMO20GREQQGERCEKSOKOLAD-1000x1000.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>OZMO 20GR EQQ GERCEK SOKOLAD</p>
                <div className='flex items-center justify-center gap-5'>
                  <div>
                    <button className='endirim text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>-18%</button>
                  </div>
                  <div>
                    <del className='text-[16px] text-gray-400'>2.00 ₼</del>
                    <p className='text-[22px]'>1.65 ₼</p>
                  </div>
                </div>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href='#'>
              <div className='productSlide bg-white text-center rounded-2xl py-[25px] px-[20px] '>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/OZMO20GREQQGERCEKSOKOLAD-1000x1000.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>OZMO 20GR EQQ GERCEK SOKOLAD</p>
                <div className='flex items-center justify-center gap-5'>
                  <div>
                    <button className='endirim text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>-18%</button>
                  </div>
                  <div>
                    <del className='text-[16px] text-gray-400'>2.00 ₼</del>
                    <p className='text-[22px]'>1.65 ₼</p>
                  </div>
                </div>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href='#'>
              <div className='productSlide bg-white text-center rounded-2xl py-[25px] px-[20px] '>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/OZMO20GREQQGERCEKSOKOLAD-1000x1000.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>OZMO 20GR EQQ GERCEK SOKOLAD</p>
                <div className='flex items-center justify-center gap-5'>
                  <div>
                    <button className='endirim text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>-18%</button>
                  </div>
                  <div>
                    <del className='text-[16px] text-gray-400'>2.00 ₼</del>
                    <p className='text-[22px]'>1.65 ₼</p>
                  </div>
                </div>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href='#'>
              <div className='productSlide bg-white text-center rounded-2xl py-[25px] px-[20px] '>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/OZMO20GREQQGERCEKSOKOLAD-1000x1000.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>OZMO 20GR EQQ GERCEK SOKOLAD</p>
                <div className='flex items-center justify-center gap-5'>
                  <div>
                    <button className='endirim text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>-18%</button>
                  </div>
                  <div>
                    <del className='text-[16px] text-gray-400'>2.00 ₼</del>
                    <p className='text-[22px]'>1.65 ₼</p>
                  </div>
                </div>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href='#'>
              <div className='productSlide bg-white text-center rounded-2xl py-[25px] px-[20px] '>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/OZMO20GREQQGERCEKSOKOLAD-1000x1000.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>OZMO 20GR EQQ GERCEK SOKOLAD</p>
                <div className='flex items-center justify-center gap-5'>
                  <div>
                    <button className='endirim text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>-18%</button>
                  </div>
                  <div>
                    <del className='text-[16px] text-gray-400'>2.00 ₼</del>
                    <p className='text-[22px]'>1.65 ₼</p>
                  </div>
                </div>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href='#'>
              <div className='productSlide bg-white text-center rounded-2xl py-[25px] px-[20px] '>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/OZMO20GREQQGERCEKSOKOLAD-1000x1000.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>OZMO 20GR EQQ GERCEK SOKOLAD</p>
                <div className='flex items-center justify-center gap-5'>
                  <div>
                    <button className='endirim text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>-18%</button>
                  </div>
                  <div>
                    <del className='text-[16px] text-gray-400'>2.00 ₼</del>
                    <p className='text-[22px]'>1.65 ₼</p>
                  </div>
                </div>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='w-[87%] mx-auto py-[50px] mt-[50px]'>
        <div className='flex justify-between items-center mb-[20px]'>
          <div>Ən çox satılanlar</div>
          <div className='text-[#FF8300]'>Hamısına bax</div>
        </div>
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
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href="#">
              <div className='bg-white text-center rounded-2xl py-[25px] px-[20px]'>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/NEPISCHEVIEPRODUKTI/LICHNAYAGIGIENA/MILO/ProstiyeMila/021111-460x460.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>DOVE 100GR SABUN COCONUT MILK</p>
                <p className='text-[22px]'>2.35₼</p>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href="#">
              <div className='bg-white text-center rounded-2xl py-[25px] px-[20px]'>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/NEPISCHEVIEPRODUKTI/LICHNAYAGIGIENA/MILO/ProstiyeMila/021111-460x460.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>DOVE 100GR SABUN COCONUT MILK</p>
                <p className='text-[22px]'>2.35₼</p>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href="#">
              <div className='bg-white text-center rounded-2xl py-[25px] px-[20px]'>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/NEPISCHEVIEPRODUKTI/LICHNAYAGIGIENA/MILO/ProstiyeMila/021111-460x460.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>DOVE 100GR SABUN COCONUT MILK</p>
                <p className='text-[22px]'>2.35₼</p>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href="#">
              <div className='bg-white text-center rounded-2xl py-[25px] px-[20px]'>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/NEPISCHEVIEPRODUKTI/LICHNAYAGIGIENA/MILO/ProstiyeMila/021111-460x460.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>DOVE 100GR SABUN COCONUT MILK</p>
                <p className='text-[22px]'>2.35₼</p>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href="#">
              <div className='bg-white text-center rounded-2xl py-[25px] px-[20px]'>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/NEPISCHEVIEPRODUKTI/LICHNAYAGIGIENA/MILO/ProstiyeMila/021111-460x460.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>DOVE 100GR SABUN COCONUT MILK</p>
                <p className='text-[22px]'>2.35₼</p>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href="#">
              <div className='bg-white text-center rounded-2xl py-[25px] px-[20px]'>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/NEPISCHEVIEPRODUKTI/LICHNAYAGIGIENA/MILO/ProstiyeMila/021111-460x460.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>DOVE 100GR SABUN COCONUT MILK</p>
                <p className='text-[22px]'>2.35₼</p>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href="#">
              <div className='bg-white text-center rounded-2xl py-[25px] px-[20px]'>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/NEPISCHEVIEPRODUKTI/LICHNAYAGIGIENA/MILO/ProstiyeMila/021111-460x460.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>DOVE 100GR SABUN COCONUT MILK</p>
                <p className='text-[22px]'>2.35₼</p>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='text-[30px] absolute hover:text-[#FF8300] top-2 right-2'>
              <CiHeart />
            </div>
            <a href="#">
              <div className='bg-white text-center rounded-2xl py-[25px] px-[20px]'>
                <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/NEPISCHEVIEPRODUKTI/LICHNAYAGIGIENA/MILO/ProstiyeMila/021111-460x460.webp?v=9" alt="" />
                <p className='text-[.7em] font-[700]'>DOVE 100GR SABUN COCONUT MILK</p>
                <p className='text-[22px]'>2.35₼</p>
                <div className='flex justify-center items-center '>
                  <FaMinus className='text-[#FF8300] cursor-pointer' />
                  <span className='p-[10px] text-[12px]'>1 ədəd</span>
                  <FaPlus className='text-[#FF8300] cursor-pointer' />
                </div>
                <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>


      <div className='w-[87%] flex flex-row justify-evenly gap-[50px] flex-wrap mx-auto py-[50px]'>
        <img className='w-[289px]' src="https://neptun.az/image/catalog/bannerler/freshmaker.png" alt="" />
        <img className='w-[289px]' src="https://neptun.az/image/catalog/bannerler/payman.png" alt="" />
        <img className='w-[289px]' src="https://neptun.az/image/catalog/bannerler/joyful.png" alt="" />
        <img className='w-[289px]' src="https://neptun.az/image/catalog/bannerler/pfanner.png" alt="" />
      </div>

    </main >

  )
}

export default Main
