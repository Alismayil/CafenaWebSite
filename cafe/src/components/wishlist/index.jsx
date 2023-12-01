import React, { useContext } from 'react'
import './wishlist.scss'
import { PiBasket } from "react-icons/pi";
import { TbHeartPlus } from "react-icons/tb";
import { TbHeartX } from "react-icons/tb";
import { WishlistContext } from '../../context/WishlistContext/wishlistContext';
import { BasketContext } from '../../context/BasketContext/basketContext';

const WishlistSideBAr = () => {
    const {handleAddBasket} = useContext(BasketContext)
    const {
        handleRemoveWishlist,
        handleClearWishlist,
        wishlist,
        openWishlistSide } = useContext(WishlistContext)

    return (
        <div className={`WishlistBox ${openWishlistSide ? "open" : ''}`}>
            <div className='CartItems'><p>The product in the wishlist - {wishlist.length}</p></div>
            {wishlist.length === 0 ? <div className='Emptywishlist'><TbHeartPlus /><p>Empty</p></div> : ''}
            <div className='WishlistMainBox'>
                {
                    wishlist && wishlist.map((item) => (
                        <div className='wishlistCard'>
                            <div className='wishlistImgBox'>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='WishlistTextBox'>
                                <h5>{item.name}</h5>
                                <p>Price: ${item.newPrice}</p>
                            </div>
                            <div className='wishlistBtns'>
                                <button onClick={() => handleRemoveWishlist(item.id)}><TbHeartX /></button>
                                <button onClick={() => handleAddBasket(item)}><PiBasket /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='WishlistDeleteBox'>
                <button onClick={() => handleClearWishlist()}>
                    <p>Delete</p>
                    <div className='WishlistBtnHover'></div>

                </button>

            </div>


        </div>
    )
}

export default WishlistSideBAr