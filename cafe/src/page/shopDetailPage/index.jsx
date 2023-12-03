import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import './shopDetail.scss'
import { BasketContext } from '../../context/BasketContext/basketContext';
import { WishlistContext } from '../../context/WishlistContext/wishlistContext';
import WishlistSideBAr from '../../components/wishlist';
import BasketSidebar from '../../components/basket';
import { IoArrowBackCircleSharp } from "react-icons/io5";

function ShopDetailPage() {
    const [shopDetail, setShopDetail] = useState([])
    const { id } = useParams()

    const [imgChange, setimgChange] = useState()

    const {handleAddWishlist, heart}=useContext(WishlistContext)
    const { handleAddBasket, basket , handleShopAddBasket} = useContext(BasketContext)

    const baseUrl = `http://localhost:3000/product/${id}`

    const [detailShopCount, setDetailShopCount] = useState(shopDetail || basket.find(x => x.id === shopDetail).count)


    async function datas() {
        const res = await axios.get(`${baseUrl}`)
        setShopDetail(res.data)
        setimgChange(res.data.img)
    }
    useEffect(() => {
        datas()
    }, [id])


    return (
        <>
         <BasketSidebar />
      <WishlistSideBAr />
      <div className='norMeanAbout'></div>
            <section id='About'>
                <div className='shape shape1'>
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-1.png" alt="" />
                </div>
                <div className='aboutPage'>
                    <div className='aboutContainer'>

                        <div className='aboutPageText'>
                            <div className='aboutText'>
                                <h1>PRODUCT  DETAILS</h1>
                            </div>
                            <div className='HomeAboutText'>
                                <h6>HOME / </h6>
                                <h6 className='abouth6' style={{marginLeft:"5px"}}> DETAILS</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shape shape2'>
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" />
                </div>
            </section>
            <div className='notMeanShop'></div>
            <div className='shopDetailPage'>
            <Link to={"/shop"} className='backShopBtn'>
                        <button className='shopDetailAddWishlist'><IoArrowBackCircleSharp style={{fontSize:"40px"}} /></button>
            </Link>
                <div className="shopDetailImgs">
                    <div className='shopDetailBigImg'>
                        <img src={imgChange} alt="" />
                    </div>
                    <div className="shopDetailsSmallImgsBox">
                        <div className="shopDetailSmallImg">
                            <img src={shopDetail.image} alt="" onClick={() => setimgChange(shopDetail.image)} />
                        </div>
                        <div className="shopDetailSmallImg">
                            <img src={shopDetail.img2} alt="" onClick={() => setimgChange(shopDetail.img2)} />
                        </div>
                        <div className="shopDetailSmallImg">
                            <img src={shopDetail.img3} alt="" onClick={() => setimgChange(shopDetail.img3)} />
                        </div>
                        <div className="shopDetailSmallImg">
                            <img src={shopDetail.img4} alt="" onClick={() => setimgChange(shopDetail.img4)} />
                        </div>


                    </div>
                </div>
                <div className="shopDetailTextBox">
                    <div className="shopDetailTextBoxUp">
                        <div className='shopDetailTextAndRatingBox'>
                            <p>{shopDetail.inform}</p> |
                            <div>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star" style={{ color: " #c7a17a" }}></i>
                            </div>

                        </div>
                        <div className="shopDetailInformBox">
                            <div>
                                <p>Weight:</p>
                                <p> {shopDetail.productWeight}  </p>
                            </div>
                            <div>
                                <p>Dimensions:</p>
                                <p> {shopDetail.productDimensions}  </p>
                            </div>
                            <div>
                                <p>Size:</p>
                                <p> {shopDetail.productSize}  </p>
                            </div>
                            <div>
                                <p>Fabric:</p>
                                <p> {shopDetail.productFabric}  </p>
                            </div>
                            <div>
                                <p>Warranty:</p>
                                <p> {shopDetail.productWarranty}  </p>
                            </div>
                            <div className='shopPriceDiv'>
                                <p>Price:</p>
                                <div className='shopDetailPrice'>  
                                <p className='shopDetailNewPrice'>${shopDetail.newPrice}</p> /
                                    <p>${shopDetail.oldPrice}</p>
                                    </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="shopDetailTextBoxMiddle">
                        <div className='shopDetailInput'>
                            <p>QUANTITY</p>
                            <input type='number' onChange={(e)=>setDetailShopCount(e.target.value)} placeholder='1'></input>
                        </div>
                        <div className='shopDetailAddBasket'>
                            <p onClick={() =>handleShopAddBasket(shopDetail, parseInt(detailShopCount))}>Add to cart</p>
                            <div className='WishlistBtnHover'></div>
                        </div>
                        <div className='shopDetailAddWishlist'>
                            <p onClick={() =>handleAddWishlist(shopDetail, detailShopCount, setDetailShopCount)}>
                                   <i className={`${heart.includes(shopDetail.id) ? "fa-solid" : "fa-regular"} fa-heart`}></i>

                            </p>
                            <div className='WishlistBtnHover'></div>
                        </div>
                        
                      

                    </div>
                    {/* <div className="shopDetailTextBoxDown"></div> */}
                </div>
       
            </div>
        </>

    )
}

export default ShopDetailPage