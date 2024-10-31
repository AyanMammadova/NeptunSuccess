import React, { createContext, useEffect, useState } from 'react'
import { getCategories, getDiscounted, getProducts } from '../services/api'

export const DATA=createContext(null)

function DataContext({children}) {
    const [categoryData,setCategoryData]=useState(null)
    const [productData, setProductData] = useState(null)
    const [discountData, setDiscountData] = useState(null)
    

    useEffect(() => {
        getProducts().then(res=>setProductData(res))
        getCategories().then(res=>setCategoryData(res))
        getDiscounted().then(res=>setDiscountData(res))
    }, [])
    console.log(categoryData)
   
    
  return (
    <DATA.Provider 
    value={{
        categoryData,setCategoryData,
        discountData,setDiscountData,
        productData,setProductData

    }}
    >
      {children}
    </DATA.Provider>
  )
}

export default DataContext
