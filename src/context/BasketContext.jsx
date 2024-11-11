    import React, { createContext, useEffect, useState } from 'react'
    import { Cookies } from 'react-cookie'

    export const BASKET=createContext(null)
    function BasketContext({children}) {
        const cooki=new Cookies()
        const [basket,setBasket]=useState(cooki.get('basket') || [])
        
        function addToBasket(id,img,name,count=1,price,discount){

            const totalAmount=count*price
            if(basket.some(item=>item.id==id)){
                console.log('tapdiq')
                setBasket(basket.map(item=>
                    item.id==id
                    ? {...item, count:item.count+count,totalAmount:(item.count+count)*item.price}
                    : item
                ))
            }else {
                setBasket([...basket,{id,img,name,count,price,discount,totalAmount}])
            }
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
