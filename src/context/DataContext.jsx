import React, { createContext, useEffect, useState } from 'react'
import { getCategories, getDiscounted, getProducts, getPopulyar } from '../services/api'

export const DATA=createContext(null)

function DataContext({children}) {
    const [categoryData,setCategoryData]=useState(null)
    const [productData, setProductData] = useState(null)
    const [discountData, setDiscountData] = useState(null)
    const [populyarData, setPopulyarData] = useState(null)

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

    }}
    >
      {children}
    </DATA.Provider>
  )
}

export default DataContext
