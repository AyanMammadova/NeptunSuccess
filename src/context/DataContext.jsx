import React, { createContext, useEffect, useState } from 'react'
import { getCategories, getDiscounted, getProducts, getPopulyar } from '../services/api'

export const DATA=createContext(null)

function DataContext({children}) {
    const [categoryData,setCategoryData]=useState(null)
    const [productData, setProductData] = useState(null)
    const [discountData, setDiscountData] = useState(null)
    const [populyarData, setPopulyarData] = useState(null)

    const reklamData=[
      'https://neptun.az/image/cache/webp/catalog/09.18.2024/banner-17-29-oktyabr-kataloq-1130x413.webp?v=9',
      'https://neptun.az/image/cache/webp/catalog/2.2024/esas-1130x413.webp?v=9',
      'https://neptun.az/image/cache/webp/catalog/2.2024/heftesonu-banner-cover2-1130x413.webp?v=9',
      'https://neptun.az/image/cache/webp/catalog/08.09.2024/mainbanner65afaaf3ef334cb2f90f3816-1130x413.webp?v=9',
      'https://neptun.az/image/cache/webp/catalog/09.18.2024/banner-17-29-oktyabr-kataloq-1130x413.webp?v=9'
    ]
    useEffect(() => {
        getProducts().then(res=>setProductData(res))
        getCategories().then(res=>setCategoryData(res))
        getDiscounted().then(res=>setDiscountData(res))
        getPopulyar().then(res=>setPopulyarData(res))
        
    }, [])
   
    
  return (
    <DATA.Provider 
    value={{
        categoryData,setCategoryData,
        discountData,setDiscountData,
        productData,setProductData,
        populyarData,setPopulyarData,
        reklamData

    }}
    >
      {children}
    </DATA.Provider>
  )
}

export default DataContext
