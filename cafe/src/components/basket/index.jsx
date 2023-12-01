import React, { useContext } from 'react'
import './basket.scss'
import { TiDelete } from "react-icons/ti";
import { TbBasketPlus } from "react-icons/tb";
import { BasketContext } from '../../context/BasketContext/basketContext';

const BasketSidebar = () => {
    
    const  { 
        handleRemove,
        handleCountVal,
        handleDeleteBasket,
        basket,
        subtotal,
        openBasketSide} = useContext(BasketContext)

  return (
    <div className={`basketBox ${openBasketSide ? "open" : ''}`}>
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
  )
}

export default BasketSidebar