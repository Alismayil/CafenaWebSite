import React, { useContext, useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { PiBasket } from "react-icons/pi";
import { BasketContext } from '../../context/BasketContext/basketContext';
import { WishlistContext } from '../../context/WishlistContext/wishlistContext';
import UseFetch from '../../hook/UseFetch';
import './menu.scss';





function PopularMenu({ changeModalState, setDetailId }) {

    // ------------card---------------
    const [card, setCard] = useState([])
    const [catagory, setCatagory] = useState("All")
    // -----------------changeBtnColor-----------
    const [changeBtnColor, setChangeBtnColor] = useState([])
    const [updateCatagory, setUpdateCatagory] = useState([])

    const { handleAddBasket } = useContext(BasketContext)
    const { handleAddWishlist, heart, handleOpenWishlistBar } = useContext(WishlistContext)

    const url = "http://localhost:3000/coffee"

    // --------useFetch------------
    function Callback(data) {
        setCard(data)
    }

    UseFetch(url, Callback)

    // ------------catagory---------------
    function handleCatagory(e) {
        setCatagory(e.target.value)
    }

    //  ---------ClickedBtnColor-----------
    function handleClickedCatagory(e) {
        changeBtnColor.shift()
        setChangeBtnColor([
            ...changeBtnColor,
            id
        ])
        updateCatagory(e.target.value)

    }
    function isclicked(id) {
        return changeBtnColor.indexOf(id) !== -1

    }



    return (

        <>
            {/* <div className='popularMenu'>
                <div className='popularMenuLeft'>
                    <div className='img1'>
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-1.png" alt="" />
                    </div>
                    <div className='img2'>
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-2.png" alt="" />
                    </div>
                </div>
                <div className='popularMenuRight'>
                    <div className='img3'>
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-3.png" alt="" />
                    </div>
                    <div className='img4'>
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-4.png" alt="" />
                    </div>
                </div>
            </div> */}
            <div className='SpecialMenuBiggestBox'>
            <div className='img1'>
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-1.png" alt="" />
                    </div>
                    <div className='img2'>
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-2.png" alt="" />
                    </div>
                    <div className='img3'>
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-3.png" alt="" />
                    </div>
                    <div className='img4'>
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-4.png" alt="" />
                    </div>
                <div className="container">
                    <div className='specialMenuBoxUp'>
                        <div className='specialBox'>
                            <div className='SpecialMenuBoxText'>
                                <p>SPECIAL MENU</p>
                            </div>
                        </div>
                        <div className='speacialText'>
                            <p>CAFENA POPULAR MENU</p>
                        </div>
                        <div className='FilterText'>
                            <div className='filterTextBox'>
                                <div className='filterUl'>
                                    {/* <button onClick={(e)=>{handleCatagory(e)
                                                    changeBtnColor(e,1)
                                                }}></button> */}
                                    <button className={isclicked(1) ? "btnActive" : ""}
                                        onClick={(e) => {
                                            handleCatagory(e)
                                            handleClickedCatagory(e, 1)
                                        }} value='All'> ALL
                                    </button>
                                    <button className={isclicked(2) ? "btnActive" : ""}
                                        onClick={(e) => {
                                            handleCatagory(e)
                                            handleClickedCatagory(e, 2)
                                        }} value='1'> CHOCOLATE
                                    </button >
                                    <button className={isclicked(3) ? "btnActive" : ""}
                                        onClick={(e) => {
                                            handleCatagory(e)
                                            handleClickedCatagory(e, 3)
                                        }} value='2'> COFFEE
                                    </button>
                                    <button className={isclicked(4) ? "btnActive" : ""}
                                        onClick={(e) => {
                                            handleCatagory(e)
                                            handleClickedCatagory(e, 4)
                                        }} value='3'> SANDWICHES
                                    </button>
                                    <button className={isclicked(5) ? "btnActive" : ""}
                                        onClick={(e) => {
                                            handleCatagory(e)
                                            handleClickedCatagory(e, 5)
                                        }} value='4'> SWEETS
                                    </button>
                                    <button className={isclicked(6) ? "btnActive" : ""}
                                        onClick={(e) => {
                                            handleCatagory(e)
                                            handleClickedCatagory(e, 6)
                                        }} value='5'> BLACK TEA
                                    </button>
                                    <button className={isclicked(7) ? "btnActive" : ""}
                                        onClick={(e) => {
                                            handleCatagory(e)
                                            handleClickedCatagory(e, 7)
                                        }} value='6'> GREAN TEA
                                    </button>
                                   
                                    {/* <button className={isclicked(1) ? "btnActive" : ""} onClick={(e)=>handleCatagory(e)} value='All'> ALL</button>
                                    <button className={isclicked(2) ? "btnActive" : ""} onClick={(e)=>handleCatagory(e)} value='1'> CHOCOLATE</button >
                                    <button className={isclicked(3) ? "btnActive" : ""} onClick={(e)=>handleCatagory(e)} value='2'> COFFEE</button>
                                    <button className={isclicked(4) ? "btnActive" : ""} onClick={(e)=>handleCatagory(e)} value='3'> SANDWICHES</button>
                                    <button className={isclicked(5) ? "btnActive" : ""} onClick={(e)=>handleCatagory(e)} value='4'> SWEETS</button>
                                    <button className={isclicked(6) ? "btnActive" : ""} onClick={(e)=>handleCatagory(e)} value='5'> BLACK TEA</button>
                                    <button className={isclicked(7) ? "btnActive" : ""} onClick={(e)=>handleCatagory(e)} value='6'> GREAN TEA</button>                                */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='specialMenuBoxDown'>
                        {
                            card && card.filter((item) => catagory === "All" || (Array.isArray(item.filter) && item.filter.includes(parseFloat(catagory)))).map((item) => (
                                <>
                                    <div className='card' key={item.id}>
                                        <div className='cardImg'>
                                            <img src={item.image} alt="" />

                                        </div>
                                        <div className='cardText'>
                                            <h4>{item.name}</h4>
                                            <p className='price'>PRICE - <p>${item.newPrice} / </p> <span> ${item.oldPrice}</span></p>
                                            <div className='btns'>
                                                <button onClick={() => handleAddBasket(item)}
                                                ><PiBasket />
                                                </button>
                                                <button onClick={() => handleAddWishlist(item)} >
                                                    <i className={`${heart.includes(item.id) ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                                                </button>
                                                <button onClick={() => {
                                                    console.log("id", item.id)
                                                    changeModalState()
                                                    setDetailId(item.id)
                                                }}><FaRegEye /></button>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            ))
                        }

                    </div>
                    {/* <div className='basketBox'>
                        <div className='CartItems'><p>The product in the basket - {basket.length}</p></div>
                        {basket.length === 0 ? <div className='Emptybasket'> <TbBasketPlus /><p>Empty</p></div> :''}
                        
                        {
                            basket && basket.map((item)=>(
                            <div className='basketCard'>
                               <div className='removeBtnBasket'> <button onClick={()=>handleRemove(item.id)}><TiDelete className='removeIcon' /></button></div>
                                <div className='BasketBoxImg'>
                                <img src={item.image} alt="" />
                                </div>
                               <div className='nameAndPriceBox'>
                               <p>{item.name}</p>
                               <div className='priceAndCounterBox'> 
                                <p> ${item.newPrice}</p>
                                <div className='CountBox'>
                                <button onClick={()=>handleCountVal(true, item)}>+</button>
                                <p>{item.count}</p>
                                <button onClick={()=>handleCountVal(false, item)}>-</button>
                                </div></div>
                               </div>
                                <div className='TotalAndRemovve'>
                                <p><span>Total</span> <span>${item.total}</span></p>
                             
                                </div>
                              

                            
                            </div>
                            ))
                        }
                      <div className='SubtotalBox'>  
                      <p> <span>SUB TOTAL:</span> <span> ${subtotal}</span></p>
                        <div className='BasketsBtns'>
                        <button onClick={()=>handleDeleteBasket()} className='DeleteBtnBasket'>
                        <p>Delete</p>
                        <div className='BasketBtnHover1'></div>
                           
                       
                       </button>
                        <button className='ViewCardBtn' >
                        <p>View Card</p>
                        <div className='BasketBtnHover2'></div>
                        </button>  
                        </div>
                        </div>
                    </div> */}
                    {/* <div className='WishlistBox'>
                    <div className='CartItems'><p>The product in the wishlist - {wishlist.length}</p></div>
                    {wishlist.length === 0 ? <div className='Emptywishlist'><TbHeartPlus /><p>Empty</p></div> :''}
                        <div className='WishlistMainBox'>
                        {
                            wishlist && wishlist.map((item)=>(
                               <div className='wishlistCard'>
                                <div className='wishlistImgBox'>
                                <img src={item.image} alt="" />
                                </div>
                                <div className='WishlistTextBox'>
                                <h5>{item.name}</h5>
                                <p>Price: ${item.newPrice}</p>
                                </div>
                                <div className='wishlistBtns'>
                                <button onClick={()=>handleRemoveWishlist(item.id)}><TbHeartX /></button>
                                <button onClick={()=>handleAddBasket(item)}><PiBasket /></button>
                                </div>
                               </div>
                            ))
                        }
                        </div>
                        <div className='WishlistDeleteBox'>
                                <button onClick={()=>handleClearWishlist()}>
                                <p>Delete</p>
                                <div className='WishlistBtnHover'></div>
                                    
                                    </button>  
                        
                        </div>
              

                    </div> */}

                </div>
            </div>

        </>
    )
}

export default PopularMenu