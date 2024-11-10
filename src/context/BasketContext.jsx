import React, { createContext, useEffect, useState } from 'react'
import { Cookies } from 'react-cookie'

export const BASKET=createContext(null)
function BasketContext({children}) {
    const cooki=new Cookies()
    const [basket,setBasket]=useState(cooki.get('basket') || [])
    
    function addToBasket(id,img,name,count,price,discount){
        setBasket([...basket,{id,img,name,count,price,discount}])
        
    }
    // function removeFromBasket(id){
    //     const newBasket=basket.filter((item=>item.id!=id))
    //     setBasket(newBasket)
    //     console.log(newBasket)
    // }

    useEffect(()=>{
        cooki.set('basket',basket)
    },[basket])
    return (
        <div>
            <BASKET.Provider
            value={{basket,setBasket,addToBasket}}>
                {children}
            </BASKET.Provider>
        </div>
    )
}

export default BasketContext
