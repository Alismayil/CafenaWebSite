import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './detail.scss'
import { IoMdClose } from "react-icons/io";
import { BasketContext } from '../../context/BasketContext/basketContext';
import { WishlistContext } from '../../context/WishlistContext/wishlistContext';

function DetailPage({ modalState, detailId, handleOpenDetailPage }) {

    const [detail, setDetail] = useState([])
    const {basket, handleModalAdd } = useContext(BasketContext)
    const {handleAddModalWishlist, heart}=useContext(WishlistContext)
    const [detailCount, setdetailCount] = useState(detailId || basket.find(x => x.id === detailId).count)
    const [basketItems, setBasketItems] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
    const BaseUrl = `http://localhost:3000/coffee/${detailId}`
    console.log(BaseUrl);
    console.log("id::::",detailId);
    console.log("detail",detail)
    async function datas() {
        const res = await axios.get(`${BaseUrl}`)
        setDetail(res.data)
        console.log("gelen",res.data);
    }

    useEffect(() => {
        datas()
    }, [detailId])

    return (
        <div className='detailPage' style={modalState ? { display: "flex" } : { display: "none" }}>
            <div className='detailBox'>
                <div className='detailImgBox'>
                    <img src={detail.img}></img>
                </div>
                <div className='detailTextBox'>
                    <>
                        <p className='detailName'>{detail.newName}</p>
                        <button className='detailPageCloseBtn' onClick={handleOpenDetailPage}>
                            <IoMdClose />
                        </button>
                        <div className='detailRating'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star" style={{ color: " #c7a17a" }}></i>
                        </div>
                        <p className='detailPrice'>${detail.newPrice}.00</p>
                        <p className='detailAvailable'>Available: <p className='detailAvailableText'>{detail.available}</p></p>
                        <p className='detailComment'>{detail.comment}</p>
                        <div className='detailsBtn'>
                            <div className='detailsBtnCounterBox'>
                                <p>QTY</p>
                                <div><input type="number" onChange={(e) => setdetailCount(e.target.value)} placeholder='1' value={detailCount} min="1" max="30" /></div>
                            </div>
                            <div className='detailsAddBtn'>
                                <p onClick={() => {
                                    handleModalAdd(detail, detailCount)
                                }
                                }>Add to cart</p>
                                <div className='WishlistBtnHover'></div>
                                </div>
                                <button className='detailToWishlist' onClick={()=>handleAddModalWishlist(detail)}>
                                <div className='detailToWishlistHover'></div>
                                   <p>
                                   <i className={`${heart.includes(detail.id) ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                                    </p>
                                </button>
                        </div>
                        <p className='detailCategory'>CATEGORY: <p className='detailCategoryText'>{detail.category}</p></p>
                        <p className='detailCategory'>SKU: <p className='detailCategoryText'>{detail.sku}</p> </p>
                        <p className='detailCategory'>BRAND: <p className='detailCategoryText'>{detail.brand}</p></p>
                    </>


                </div>

            </div>



        </div>
    )
}

export default DetailPage