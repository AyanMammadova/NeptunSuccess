import React, { createContext, useState } from 'react'

const BASKETDATA=createContext(null)
function BasketContext({children}) {
    console.log(children)
    const [basket,setBasket]=useState(null)
    return (
        <div>
        <BASKETDATA.Provider
        value={{basket,setBasket}}
        >
            {children}
        </BASKETDATA.Provider>
        </div>
    )
}

export default BasketContext
