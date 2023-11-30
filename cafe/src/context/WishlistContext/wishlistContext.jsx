import {  createContext } from "react";


export const WishlistContext=createContext()

import React from 'react'
import useLocal from "../../hook/UseLocal";




const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useLocal("wishlist")
    const [heart, setHeart] = useLocal("heart")

function handleAddWishlist(x) {
        
    const elementIndex=wishlist.findIndex(item=>item.id === x.id)
    if (elementIndex=== -1) {
    setWishlist([...wishlist, {...x}])
    
}
else {
    setWishlist(wishlist.filter(item=>item.id !== x.id))
    
}

    const heartIcon=heart.includes(x.id)
    if (heartIcon) {
        setHeart(heart.filter(id=>id !== x.id))
        
    }
    else{
            setHeart([...heart, x.id])
        }
    
}
 function handleRemoveWishlist(id) {
    setWishlist(wishlist.filter(x=>x.id !== id))
    setHeart(heart.filter(x=>x !== id))

 }
 function handleClearWishlist() {
    setHeart([])
    setWishlist([])
 }

const data={
    handleAddWishlist,
    handleRemoveWishlist,
    handleClearWishlist,
    wishlist,
    setWishlist,
    heart
}

  return (
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider