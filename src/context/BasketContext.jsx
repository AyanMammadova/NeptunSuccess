import React, { createContext, useState } from 'react'
import { Cookies } from 'react-cookie'


export const BASKET=createContext(null)
function BasketContext({children}) {
    
    const cooki=new Cookies()
    const [basket,setBasket]=useState(cooki.get('basket') || [])
    function addToBasket(id,img,name,count,price,discount){
        // console.log(id,img,name,count,price,discount)
        setBasket([...basket,{id,img,name,count,price,discount}])
        console.log(basket)
        cooki.set('basket',basket)
    }
    return (
        <div>
        <BASKET.Provider
        value={{basket,setBasket,addToBasket}}
        >
            {children}
        </BASKET.Provider>
        </div>
    )
}

export default BasketContext
