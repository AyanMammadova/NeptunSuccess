import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
// import { getCategories, getDiscounted, getProducts } from '../services/api'

export const DATA=createContext(null)

function DataContext({children}) {
    const [categoryData,setCategoryData]=useState(null)
    const [productData, setProductData] = useState(null)
    const [discountData, setDiscountData] = useState(null)
    

    useEffect(() => {
        getProducts()
        getCategories()
        getDiscounted()
    }, [])
    function getProducts(){
      axios.get("https://neptunbk.vercel.app/products?limit=20")
      .then(res=>setProductData(res.data.products))
    }
    function getCategories(){
      axios.get("https://neptunbk.vercel.app/categories")
      .then(res=>setCategoryData(res.data))
    }
    function getDiscounted(){
      axios.get("https://neptunbk.vercel.app/products/discounted")
      .then(res=>setDiscountData(res.data.products))
    }
    // async function getDiscounted(){
    //     const res= await axios.get("https://neptunbk.vercel.app/products/discounted")
    //     return res.data.products
    // }
    
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
