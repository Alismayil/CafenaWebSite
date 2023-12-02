import React, { useState } from 'react'
import './shop.scss'
import { IoIosSearch } from "react-icons/io";
import UseFetch from '../../hook/UseFetch';
import { FaRegEye } from "react-icons/fa";
import { PiBasket } from "react-icons/pi";

function ShopPage() {
  const [shopCard, setShopCard] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [pagePerData] = useState(6);


  const url = "http://localhost:3000/product"

  // --------useFetch------------
  function Callback(data) {
    setShopCard(data)
  }
  UseFetch(url, Callback)

    // -----------------pagination--------------------
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(shopCard.length / pagePerData); i++) {
      pageNumbers.push(i);
    }
  
    const lastElementIndex = currentPage * pagePerData;
    const firstElementIndex = lastElementIndex - pagePerData;
  
    const PageDatas = React.useMemo(() => shopCard.slice(firstElementIndex, lastElementIndex), [
      shopCard,
      currentPage,
    ]);

  return (
   <>
    <div className='notMean'></div>
    <div className='shop'>
        <div className="container">
        <div className="upbox">
          <div className="showingText">
            <p>Showing 1–12 of 54 results</p>
          </div>
          <div className="shopFilter">
            <div className='shopMenuBox'>
            <a style={{color:"black"}} class="nav-link active" id="shop-tab-1-tab" data-bs-toggle="tab" href="#shop-tab-1" role="tab" aria-controls="shop-tab-1" aria-selected="true"><i class="fas fa-th"></i></a>
            <a style={{color:"black"}} class="nav-link" id="shop-tab-2-tab" data-bs-toggle="tab" href="#shop-tab-2" role="tab" aria-controls="shop-tab-2" aria-selected="false"><i class="fas fa-list-ul"></i></a>
            </div>
            <select name="" id="">
              <option value="">Short by New</option>
              <option value="">Short by Top</option>
              <option value="">All</option>
            </select>
          </div>
        </div>
        <div className="downbox">
            <div className="boxLeft">
              {
                PageDatas && PageDatas.map((item)=>(
                  <div className='shopCard'>
                    <div className='shopCardHover'>
                      <button> <PiBasket /></button>
                      <button><i class="fa-regular fa-heart"></i></button>
                      <button><FaRegEye /></button>
                    </div>
                    <div className='shopcardImgBox'>
                    <img src={item.image} alt="" className='img1' />
                    <img src={item.img} alt="" className='img2' />
                    </div>
                  <div className="shopCardTextBox">
                  <p className='shopCardName'>{item.name}</p>
                  <p className='shopCardInform'>{item.inform}</p>
                 <div className='shopPriceBox'>
                  <p>Price -</p>
                 <p className='shoopNewPrice'>${item.newPrice} /</p> 
                  <p className='shoopOldPrice'>${item.oldPrice}</p>
                 </div>
                  </div>
                  
                  </div>
                ))
              }
              <div className='paginationPage'>
              {pageNumbers.map((page) => (
                              <button className='chooseBtn' key={page} onClick={() => setCurrentPage(page)}>
                              {page}
                            </button>
              ))}
              </div>

            </div>
            <div className="boxRight">
            <div className="ShopSearchBox">
              <div className="shopSeacrhText">
                <p>Search Here</p>
              </div>
              <div className="shopSearchBtn">
                <input type="text" placeholder='Search Product' />
                <IoIosSearch className='serachIcon' /> 
              </div>
            </div>
            <div className="shopCategoriesBox">
              <div className="shopCategoryText">
                <p>Categories</p>
                </div>
                <div className="shopCategoryButtonBox">
                <button>
                  <p>Burger</p>
                </button>
                <span>04</span>

                </div>
                <div className="shopCategoryButtonBox">
                <button>
                  <p>2x Pizza</p>
                </button>
                <span>06</span>
                </div>
                <div className="shopCategoryButtonBox">
                <button>
                  <p>Cold Drinks</p>
                </button>
                <span>08</span>

                </div>
                <div className="shopCategoryButtonBox">
                <button>
                  <p>Chicken</p>
                </button>
                <span>10</span>
                </div>
                <div className="shopCategoryButtonBox">
                <button>
                  <p>Stuck Dish</p>
                </button>
                <span>12</span>

                </div>
            </div>
            <div className="shopFilterBox"></div>
            </div>
        </div>

        </div>
    </div>
   
   
   </>
  )
}

export default ShopPage