import { createContext, useState } from "react";

export const BasketContext = createContext()



import React from 'react'
import useLocal from "../../hook/UseLocal";

const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useLocal("basket")

    let subtotal = 0
    basket.forEach(element => {
        subtotal += (element.total)
    });

    
    function handleAddBasket(x) {
        const elemnetIndex = basket.findIndex(item => item.id === x.id)
        if (elemnetIndex !== -1) {
            const newBasket = [...basket]
            newBasket[elemnetIndex].count++
            newBasket[elemnetIndex].total = newBasket[elemnetIndex].count * newBasket[elemnetIndex].newPrice
            setBasket(newBasket)

        }
        else {
            const total = x.newPrice
            setBasket([...basket, { ...x, count: 1, total: total }])

        }
    }
    function handleRemove(id) {
        setBasket(basket.filter(x => x.id !== id))
    }
    function handleDeleteBasket() {
        setBasket([])
    }

    // ------------openBasketSideBar------------
    const [openBasketSide, setOpenBasketSide] = useState(false)

    function handleOpenSideBar() {
        setOpenBasketSide(!openBasketSide)
    }
    function handleCountVal(isAdd, x) {
        const elemnetIndex = basket.findIndex(item => item.id === x.id)
        const newBasket = [...basket]
        if (isAdd) {
            if (newBasket[elemnetIndex].count === 30) {
                return
            }
            newBasket[elemnetIndex].count++
            newBasket[elemnetIndex].total = newBasket[elemnetIndex].count * newBasket[elemnetIndex].newPrice
            setBasket(newBasket)

        }

        else {
            newBasket[elemnetIndex].count--
            newBasket[elemnetIndex].total = newBasket[elemnetIndex].count * newBasket[elemnetIndex].newPrice
            setBasket(newBasket)
            if (newBasket[elemnetIndex].count === 0) {
                setBasket(basket.filter(item => item.id !== x.id))
            }

        }

    }
    function handleModalAdd(item, count) {
        const elemnetIndex = basket.findIndex(x => x.id === item.id)
       
        if (elemnetIndex !== -1) {
           
            const newBasket = [...basket]
            newBasket[elemnetIndex].count = count
            newBasket[elemnetIndex].total = newBasket[elemnetIndex].count * newBasket[elemnetIndex].newPrice
            setBasket(newBasket)
        
        }
        else {
            
            const total = item.newPrice
            setBasket([...basket, { ...item, count: count, total:total }])
        }
    }


    const data = {
        handleAddBasket,
        handleRemove,
        handleCountVal,
        handleDeleteBasket,
        basket,
        setBasket,
        subtotal,
        handleModalAdd,
        handleOpenSideBar,
        setOpenBasketSide,
        openBasketSide
        

    }
    return (



        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider