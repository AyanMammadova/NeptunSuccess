import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

function Main() {
  return (
    <main className='bg-[#dbd7d7]'>
      <div className='lg:ml-[350px] 2xl:ml-[400px]'>
        <img className=' pt-[20px] object-contain w-[90%] mx-[auto]' src="https://neptun.az/image/cache/webp/catalog/08.09.2024/mainbanner65afaaf3ef334cb2f90f3816-1130x413.webp?v=9" alt="" />
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
      </div>
      <p className='text-right w-[95%] text-[#FF8300] cursor-pointer'>Hamısına bax</p>
      <div className='w-[90%] h-[350px]  xl: lg:h-[300px] xl:h-[400px] m-[auto] mt-[200px] lg:mt-[200px] xl:mt-[50px] justify-evenly pb-[20px] flex '>
        <div className='relative '>
          <p className='absolute bg-[#312f2fb3] text-[1.5em] p-[20px] text-white rounded-br-2xl '>Kategoriya: <br />Səhər yeməyi</p>
          <img className='h-[100%] rounded-2xl' src="https://neptun.az/image/catalog/bannerler/xususi-teklif/meyve-terevez.jpg" alt="" />
        </div>
        <div className='relative '>
          <p className='absolute bg-[#312f2fb3] text-[1.5em] p-[20px] text-white rounded-br-2xl '>Kategoriya: <br />Səhər yeməyi</p>
          <img className='h-[100%] rounded-2xl' src="https://neptun.az/image/catalog/bannerler/xususi-teklif/siyniyyat.jpg" alt="" />
        </div>
        <div className='relative lg:block  hidden'>
          <p className='absolute bg-[#312f2fb3] text-[1.5em] p-[20px] text-white rounded-br-2xl '>Kategoriya: <br />Səhər yeməyi</p>
          <img className='h-[100%] rounded-2xl ' src="https://neptun.az/image/catalog/YEN%C4%B0/MEHSUL/11.05.2020/cerez.jpg" alt="" />
        </div>
      </div>
      <div className='w-[85%] mx-auto py-[50px]'>
        <div className='flex justify-between items-center mb-[20px]'>
          <div>Endirimli məhsullar</div>
          <div className='text-[#FF8300]'>Hamısına bax</div>
        </div>
        <div className='flex gap-[30px] ml-[30px] flex-wrap lg:flex-nowrap'>
          <div className='bg-white text-center rounded-2xl py-[25px] px-[10px] '>
            <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/OZMO20GREQQGERCEKSOKOLAD-1000x1000.webp?v=9" alt="" />
            <p className='text-[.7em] font-[700]'>OZMO 20GR EQQ GERCEK SOKOLAD</p>
            <div className='flex items-center justify-center gap-5'>
              <div>
                <button className='text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>-18%</button>
              </div>
              <div>
                <del className='text-[16px] text-gray-400'>2.00 ₼</del>
                <p className='text-[22px]'>1.65 ₼</p>
              </div>
            </div>
            <div className='flex justify-center items-center '>
              <FaMinus className='text-[#FF8300] cursor-pointer' />
              <span className='px-[10px]'>1 eded</span>
              <FaPlus className='text-[#FF8300] cursor-pointer' />
            </div>
            <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
          </div>
          <div className='bg-white text-center rounded-2xl py-[25px] px-[10px]'>
            <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/OZMO20GREQQGERCEKSOKOLAD-1000x1000.webp?v=9" alt="" />
            <p className='text-[.7em] font-[700]'>OZMO 20GR EQQ GERCEK SOKOLAD</p>
            <div className='flex items-center justify-center gap-5'>
              <div>
                <button className='text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>-18%</button>
              </div>
              <div>
                <del className='text-[16px] text-gray-400'>2.00 ₼</del>
                <p className='text-[22px]'>1.65 ₼</p>
              </div>
            </div>
            <div className='flex justify-center items-center '>
              <FaMinus className='text-[#FF8300] cursor-pointer' />
              <span className='px-[10px]'>1 eded</span>
              <FaPlus className='text-[#FF8300] cursor-pointer' />
            </div>
            <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
          </div>
          <div className='bg-white text-center rounded-2xl py-[25px] px-[10px]'>
            <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/OZMO20GREQQGERCEKSOKOLAD-1000x1000.webp?v=9" alt="" />
            <p className='text-[.7em] font-[700]'>OZMO 20GR EQQ GERCEK SOKOLAD</p>
            <div className='flex items-center justify-center gap-5'>
              <div>
                <button className='text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>-18%</button>
              </div>
              <div>
                <del className='text-[16px] text-gray-400'>2.00 ₼</del>
                <p className='text-[22px]'>1.65 ₼</p>
              </div>
            </div>
            <div className='flex justify-center items-center '>
              <FaMinus className='text-[#FF8300] cursor-pointer' />
              <span className='px-[10px]'>1 eded</span>
              <FaPlus className='text-[#FF8300] cursor-pointer' />
            </div>
            <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
          </div>
          <div className='bg-white text-center rounded-2xl py-[25px] px-[10px]'>
            <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/OZMO20GREQQGERCEKSOKOLAD-1000x1000.webp?v=9" alt="" />
            <p className='text-[.7em] font-[700]'>OZMO 20GR EQQ GERCEK SOKOLAD</p>
            <div className='flex items-center justify-center gap-5'>
              <div>
                <button className='text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>-18%</button>
              </div>
              <div>
                <del className='text-[16px] text-gray-400'>2.00 ₼</del>
                <p className='text-[22px]'>1.65 ₼</p>
              </div>
            </div>
            <div className='flex justify-center items-center '>
              <FaMinus className='text-[#FF8300] cursor-pointer' />
              <span className='px-[10px]'>1 eded</span>
              <FaPlus className='text-[#FF8300] cursor-pointer' />
            </div>
            <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
          </div>
          <div className='bg-white text-center rounded-2xl py-[25px] px-[10px]'>
            <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/OZMO20GREQQGERCEKSOKOLAD-1000x1000.webp?v=9" alt="" />
            <p className='text-[.7em] font-[700]'>OZMO 20GR EQQ GERCEK SOKOLAD</p>
            <div className='flex items-center justify-center gap-5'>
              <div>
                <button className='text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>-18%</button>
              </div>
              <div>
                <del className='text-[16px] text-gray-400'>2.00 ₼</del>
                <p className='text-[22px]'>1.65 ₼</p>
              </div>
            </div>
            <div className='flex justify-center items-center '>
              <FaMinus className='text-[#FF8300] cursor-pointer' />
              <span className='px-[10px]'>1 eded</span>
              <FaPlus className='text-[#FF8300] cursor-pointer' />
            </div>
            <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
          </div>
          <div className='bg-white text-center rounded-2xl py-[25px] px-[10px]'>
            <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/OZMO20GREQQGERCEKSOKOLAD-1000x1000.webp?v=9" alt="" />
            <p className='text-[.7em] font-[700]'>OZMO 20GR EQQ GERCEK SOKOLAD</p>
            <div className='flex items-center justify-center gap-5'>
              <div>
                <button className='text-[12px] border rounded-full py-[8px] px-[3px] bg-[#FFD9C0]'>-18%</button>
              </div>
              <div>
                <del className='text-[16px] text-gray-400'>2.00 ₼</del>
                <p className='text-[22px]'>1.65 ₼</p>
              </div>
            </div>
            <div className='flex justify-center items-center '>
              <FaMinus className='text-[#FF8300] cursor-pointer' />
              <span className='px-[10px]'>1 eded</span>
              <FaPlus className='text-[#FF8300] cursor-pointer' />
            </div>
            <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
          </div>
        </div>
      </div>
      <div className='w-[85%] mx-auto py-[50px] mt-[50px]'>
        <div className='flex justify-between items-center mb-[20px]'>
          <div>Ən çox satılanlar</div>
          <div className='text-[#FF8300]'>Hamısına bax</div>
        </div>
        <div className='flex gap-[30px] ml-[30px] flex-wrap lg:flex-nowrap'>
          <div className='bg-white text-center rounded-2xl py-[25px] px-[10px] px-[15px]'>
            <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/NEPISCHEVIEPRODUKTI/LICHNAYAGIGIENA/MILO/ProstiyeMila/021111-460x460.webp?v=9" alt="" />
            <p className='text-[.7em] font-[700]'>DOVE 100GR SABUN COCONUT MILK</p>
            <p className='text-[22px]'>2.35₼</p>
            <div className='flex justify-center items-center '>
              <FaMinus className='text-[#FF8300] cursor-pointer' />
              <span className='px-[10px]'>1 eded</span>
              <FaPlus className='text-[#FF8300] cursor-pointer' />
            </div>
            <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
          </div>
          <div className='bg-white text-center rounded-2xl py-[25px] px-[10px]'>
            <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/NEPISCHEVIEPRODUKTI/LICHNAYAGIGIENA/MILO/ProstiyeMila/021111-460x460.webp?v=9" alt="" />
            <p className='text-[.7em] font-[700]'>DOVE 100GR SABUN COCONUT MILK</p>
            <p className='text-[22px]'>2.35₼</p>
            <div className='flex justify-center items-center '>
              <FaMinus className='text-[#FF8300] cursor-pointer' />
              <span className='px-[10px]'>1 eded</span>
              <FaPlus className='text-[#FF8300] cursor-pointer' />
            </div>
            <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
          </div>
          <div className='bg-white text-center rounded-2xl py-[25px] px-[10px]'>
            <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/NEPISCHEVIEPRODUKTI/LICHNAYAGIGIENA/MILO/ProstiyeMila/021111-460x460.webp?v=9" alt="" />
            <p className='text-[.7em] font-[700]'>DOVE 100GR SABUN COCONUT MILK</p>
            <p className='text-[22px]'>2.35₼</p>
            <div className='flex justify-center items-center '>
              <FaMinus className='text-[#FF8300] cursor-pointer' />
              <span className='px-[10px]'>1 eded</span>
              <FaPlus className='text-[#FF8300] cursor-pointer' />
            </div>
            <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
          </div>
          <div className='bg-white text-center rounded-2xl py-[25px] px-[10px]'>
            <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/NEPISCHEVIEPRODUKTI/LICHNAYAGIGIENA/MILO/ProstiyeMila/021111-460x460.webp?v=9" alt="" />
            <p className='text-[.7em] font-[700]'>DOVE 100GR SABUN COCONUT MILK</p>
            <p className='text-[22px]'>2.35₼</p>
            <div className='flex justify-center items-center '>
              <FaMinus className='text-[#FF8300] cursor-pointer' />
              <span className='px-[10px]'>1 eded</span>
              <FaPlus className='text-[#FF8300] cursor-pointer' />
            </div>
            <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
          </div>
          <div className='bg-white text-center rounded-2xl py-[25px] px-[10px]'>
            <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/NEPISCHEVIEPRODUKTI/LICHNAYAGIGIENA/MILO/ProstiyeMila/021111-460x460.webp?v=9" alt="" />
            <p className='text-[.7em] font-[700]'>DOVE 100GR SABUN COCONUT MILK</p>
            <p className='text-[22px]'>2.35₼</p>
            <div className='flex justify-center items-center '>
              <FaMinus className='text-[#FF8300] cursor-pointer' />
              <span className='px-[10px]'>1 eded</span>
              <FaPlus className='text-[#FF8300] cursor-pointer' />
            </div>
            <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
          </div>
          <div className='bg-white text-center rounded-2xl py-[25px] px-[10px]'>
            <img className='rounded-3xl inline-block w-[100px]' src="https://neptun.az/image/cache/webp/catalog/NEPISCHEVIEPRODUKTI/LICHNAYAGIGIENA/MILO/ProstiyeMila/021111-460x460.webp?v=9" alt="" />
            <p className='text-[.7em] font-[700]'>DOVE 100GR SABUN COCONUT MILK</p>
            <p className='text-[22px]'>2.35₼</p>
            <div className='flex justify-center items-center '>
              <FaMinus className='text-[#FF8300] cursor-pointer' />
              <span className='px-[10px]'>1 eded</span>
              <FaPlus className='text-[#FF8300] cursor-pointer' />
            </div>
            <button className='text-white py-[3px] px-[15px] rounded-2xl bg-[#FF8300]'>Səbətə at</button>
          </div>
        </div>
      </div>

    </main>

  )
}

export default Main
