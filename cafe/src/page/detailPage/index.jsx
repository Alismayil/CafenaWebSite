import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './detail.scss'
import { IoMdClose } from "react-icons/io";
import { BasketContext } from '../../context/BasketContext/basketContext';

function DetailPage({ modalState, detailId, handleOpenDetailPage }) {

    const [detail, setDetail] = useState([])
    const { handleAddBasket, handleRemove, handleCountVal, handleDeleteBasket, basket, subtotal, handleModalAdd } = useContext(BasketContext)
    const [detailCount, setdetailCount] = useState(detailId || basket.find(x => x.id === detailId).count)
    const [basketItems, setBasketItems] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
    const BaseUrl = `http://localhost:3000/coffee/${detailId}`
    console.log("detail",detail)
    async function datas() {
        const res = await axios.get(`${BaseUrl}`)
        setDetail(res.data)
    }

    useEffect(() => {
        datas()
    }, [])

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
                        <p className='detailPrice'>${detail.price}.00</p>
                        <p className='detailAvailable'>Available: <p className='detailAvailableText'>{detail.available}</p></p>
                        <p className='detailComment'>{detail.comment}</p>
                        <div className='detailsBtn'>
                            <div className='detailsBtnCounterBox'>
                                <p>QTY</p>
                                <div><input type="number" onChange={(e) => setdetailCount(e.target.value)} placeholder='1' value={detailCount} /></div>
                            </div>
                            <div className='detailsAddBtn'>
                                <p onClick={() => {
                                    handleModalAdd(detail, detailCount)
                                }
                                }>Add to cart</p>
                                <div className='WishlistBtnHover'></div></div>
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