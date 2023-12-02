import React, { useContext, useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { PiBasket } from "react-icons/pi";
import { BasketContext } from '../../context/BasketContext/basketContext';
import { WishlistContext } from '../../context/WishlistContext/wishlistContext';
import UseFetch from '../../hook/UseFetch';
import './menu.scss';
import { SearchContext } from '../../context/SearchContext/searchContext';





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

    // ---------------seerahContext------------------

  const{search, setSearch}=useContext(SearchContext)




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
                            card && card.filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
                            .filter((item) => catagory === "All" || (Array.isArray(item.filter) && item.filter.includes(parseFloat(catagory)))).map((item) => (
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
                    

                </div>
            </div>

        </>
    )
}

export default PopularMenu