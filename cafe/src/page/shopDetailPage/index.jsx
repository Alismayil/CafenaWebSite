import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './shopDetail.scss'

function ShopDetailPage() {
    const [shopDetail, setShopDetail] = useState([])
    const { id } = useParams()

    const [imgChange, setimgChange] = useState()
    

    const baseUrl = `http://localhost:3000/product/${id}`
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
            <div className='notMeanShop'></div>
            <div className='shopDetailPage'>
                <div className="shopDetailImgs">
                    <div className='shopDetailBigImg'>
                        <img src={imgChange} alt=""/>
                    </div>
                    <div className="shopDetailsSmallImgsBox">
                        <div className="shopDetailSmallImg">
                            <img src={shopDetail.image} alt="" onClick={()=>setimgChange(shopDetail.image)} />
                        </div>
                        <div className="shopDetailSmallImg">
                            <img src={shopDetail.img2} alt="" onClick={()=>setimgChange(shopDetail.img2)} />
                        </div>
                        <div className="shopDetailSmallImg">
                            <img src={shopDetail.img3} alt="" onClick={()=>setimgChange(shopDetail.img3)} />
                        </div>
                        <div className="shopDetailSmallImg">
                            <img src={shopDetail.img4} alt="" onClick={()=>setimgChange(shopDetail.img4)} />
                        </div>


                    </div>
                </div>
                <div className="shopDetailTextBox">

                </div>
                {/* <p>{shopDetail.name}</p>
        <p>{shopDetail.name}</p>
        <p>{shopDetail.newPrice}</p>
        <p>{shopDetail.oldPrice}</p>
        <p>{shopDetail.category}</p>
        <p>{shopDetail.inform}</p>
        <p>{shopDetail.name}</p> */}
            </div>
        </>

    )
}

export default ShopDetailPage