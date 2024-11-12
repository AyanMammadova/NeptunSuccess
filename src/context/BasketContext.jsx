    import React, { createContext, useEffect, useState } from 'react'
    import { Cookies } from 'react-cookie'

    export const BASKET=createContext(null)
    function BasketContext({children}) {
        const cooki=new Cookies()
        const [number,setNumber]=useState(null)
        const [basket,setBasket]=useState(cooki.get('basket') || [])
        const totalAllAmount = basket.reduce((total, item) => total + item.count * item.price, 0)
        function addToBasket(id,img,name,count=1,price,discount){
            const totalAmount=count*price
            if(basket.some(item=>item.id==id)){
                setBasket(basket.map(item=>
                    item.id==id
                    ? {...item, count:item.count+count,totalAmount:(item.count+count)*item.price}
                    : item
                ))
            }else {
                setBasket([...basket,{id,img,name,count,price,discount,totalAmount}])
            }
        }
        function removeFromBasket(id){
            const newBasket=basket.filter((item=>item.id!=id))
            setBasket(newBasket)
        }
        function handleRefresh(id,newcount){
            setBasket(basket.map(item=>
                item.id==id
                ? {...item, count:newcount,totalAmount:newcount*item.price}
                : item
            ))
        }

        useEffect(()=>{
            cooki.set('basket',basket)
        },[basket])
        return (
            <div>
                <BASKET.Provider
                value={{basket,setBasket,addToBasket,removeFromBasket,totalAllAmount,handleRefresh}}>
                    {children}
                </BASKET.Provider>
            </div>
        )
    }

    export default BasketContext
