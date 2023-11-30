import React, { useContext, useEffect, useState } from 'react'
import './menu.scss'
import axios from "axios";
import { PiBasket } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import useLocal from '../../hook/UseLocal';
import { TbBasketPlus } from "react-icons/tb";
import { TbHeartPlus } from "react-icons/tb";
import { TbHeartX } from "react-icons/tb";
import { BasketContext } from '../../context/BasketContext/basketContext';


function PopularMenu({changeModalState,setDetailId}) {
    // ------------card---------------
    const [card, setCard] = useState([])
    // const [basket, setBasket] = useLocal("basket")
    const [wishlist, setWishlist] = useLocal("wishlist")
    const [heart, setHeart] = useLocal("heart")
    const [catagory, setCatagory] = useState("All")

    const  {handleAddBasket,handleRemove,handleCountVal,handleDeleteBasket,basket,subtotal} = useContext(BasketContext)

    const BaseUrl = "http://localhost:3000/coffee"

    // ------------catagory---------------
  function handleCatagory(e) {
    setCatagory(e.target.value)
  }
    

    // ------------axios---------------
    
    async function Datas() {
        const res = await axios.get(`${BaseUrl}`)
        setCard(res.data)
    }

    useEffect(() => {
        Datas()
    }, [])

    // ------------basket---------------
    // let subtotal=0
    // basket.forEach(element => {
    //     subtotal+=(element.total)
    // });

    // function handleAddBasket(x) {
    //     const elemnetIndex=basket.findIndex(item=>item.id === x.id)
    //     if (elemnetIndex !== -1) {
    //         const newBasket =[...basket]
    //         newBasket[elemnetIndex].count++
    //         newBasket[elemnetIndex].total=newBasket[elemnetIndex].count*newBasket[elemnetIndex].newPrice
    //         setBasket(newBasket)
            
    //     }
    //     else{
    //     const total=x.newPrice
    //     setBasket([...basket, {...x, count:1, total:total}])

    //     }
    // }
    // function handleRemove(id) {
    //     setBasket(basket.filter(x=>x.id !== id))
    // }
    // function handleDeleteBasket() {
    //     setBasket([])
    // }

    // function handleCountVal(isAdd ,x ) {
    //     const elemnetIndex=basket.findIndex(item=>item.id === x.id)
    //     const newBasket =[...basket]
    //     if (isAdd) {
    //         if (newBasket[elemnetIndex].count === 30) {
    //             return
    //         }
    //         newBasket[elemnetIndex].count++
    //         newBasket[elemnetIndex].total=newBasket[elemnetIndex].count*newBasket[elemnetIndex].newPrice
    //         setBasket(newBasket)
            
    //     }
        
    //     else{
    //         newBasket[elemnetIndex].count--
    //         newBasket[elemnetIndex].total=newBasket[elemnetIndex].count*newBasket[elemnetIndex].newPrice
    //         setBasket(newBasket)
    //     if (newBasket[elemnetIndex].count === 0) {
    //             setBasket(basket.filter(item=>item.id !== x.id))
    //         }
            
    //     }
        
    // }


    // ------------wishlist---------------
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


     


    return (

        <>
            <div className='popularMenu'>
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
            </div>
            <div className='SpecialMenuBiggestBox'>
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
                                    <div>
                                    <button onClick={(e)=>handleCatagory(e)} value='All'> ALL
                                    
                                    
                                    
                                    </button>
                                    </div>
                                    <button onClick={(e)=>handleCatagory(e)} value='1'> CHOCOLATE</button>
                                    <button onClick={(e)=>handleCatagory(e)} value='2'> COFFEE</button>
                                    <button onClick={(e)=>handleCatagory(e)} value='3'> SANDWICHES</button>
                                    <button onClick={(e)=>handleCatagory(e)} value='4'> SWEETS</button>
                                    <button onClick={(e)=>handleCatagory(e)} value='5'> BLACK TEA</button>
                                    <button onClick={(e)=>handleCatagory(e)} value='6'> GREAN TEA</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='specialMenuBoxDown'>
                        {
                            card && card.filter((item)=>catagory==="All" || (Array.isArray(item.filter) &&  item.filter.includes(parseFloat(catagory)))).map((item) => (
                                <>
                                    <div className='card'>
                                        <div className='cardImg'>
                                            <img src={item.image} alt="" />

                                        </div>
                                        <div className='cardText'>
                                            <h4>{item.name}</h4>
                                            <p className='price'>PRICE - <p>${item.newPrice} / </p> <span> ${item.oldPrice}</span></p>
                                            <div className='btns'>
                                                <button onClick={()=>handleAddBasket(item)}
                                                ><PiBasket />
                                                </button>
                                                <button onClick={()=>handleAddWishlist(item)} >
                                                <i className={`${heart.includes(item.id) ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                                                </button>
                                                <button onClick={()=>{
                                                    console.log("id",item.id)
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
                    <div className='basketBox'>
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
                    </div>
                    <div className='WishlistBox'>
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
              

                    </div>

                </div>
            </div>

        </>
    )
}

export default PopularMenu