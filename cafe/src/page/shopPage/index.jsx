import React, { useState } from 'react'
import './shop.scss'
import { IoIosSearch } from "react-icons/io";
import UseFetch from '../../hook/UseFetch';
import { FaRegEye } from "react-icons/fa";
import { PiBasket } from "react-icons/pi";
import { Slider } from 'antd';
import BasketSidebar from '../../components/basket';
import WishlistSideBAr from '../../components/wishlist';



function ShopPage() {
  const [shopCard, setShopCard] = useState([])
  const [sort, setSort] = useState("All")
  const [currentPage, setCurrentPage] = useState(1);
  const [pagePerData] = useState(6);


  const url = "http://localhost:3000/product"

  // --------useFetch------------
  function Callback(data) {
    setShopCard(data)
  }
  UseFetch(url, Callback)


  // ---------------range-----------------
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 10000]);
  const handlePriceChange = (value) => {
    setPriceRange(value);
    setSelectedPriceRange(value);
    
  };

// ----------sortFunction------------------
function handleSortSelect(e) {
  setSort(e.target.value)
}



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
    <BasketSidebar />
      <WishlistSideBAr />
      <div className='notMean'></div>
      <div className='shop'>
        <div className="container">
          <div className="upbox">
            <div className="showingText">
              <p>Showing 1–12 of 54 results</p>
            </div>
            <div className="shopFilter">
              <div className='shopMenuBox'>
                <a style={{ color: "black" }} class="nav-link active" id="shop-tab-1-tab" data-bs-toggle="tab" href="#shop-tab-1" role="tab" aria-controls="shop-tab-1" aria-selected="true"><i class="fas fa-th"></i></a>
                <a style={{ color: "black" }} class="nav-link" id="shop-tab-2-tab" data-bs-toggle="tab" href="#shop-tab-2" role="tab" aria-controls="shop-tab-2" aria-selected="false"><i class="fas fa-list-ul"></i></a>
              </div>
              <select value={sort} onChange={handleSortSelect}>
                <option value="1">Short by New</option>
                <option value="2">Short by Top</option>
                <option value="All">All</option>
              </select>
            </div>
          </div>
          <div className="downbox">
            <div className="boxLeft">
              {
                PageDatas && PageDatas.filter((item) => item.newPrice >= selectedPriceRange[0] && item.newPrice <= selectedPriceRange[1])
                .filter((item)=> sort === "All" || item.sortId === parseFloat(sort)).map((item) => (
                  <div className='shopCard' key={item.id}>
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
              <div className="shopFilterBox">
                <div className='shopPriceTextBox'>
                  <p>Price Filter</p>
                </div>
                <div className='shopPriceInput'>
                <Slider
                  range={{}}
                  defaultValue={[20, 10000]}
                  onChange={handlePriceChange}
                  min={0.00}
                  max={10000}
                  railStyle={{ backgroundColor: '#80808070', height: '10px' , marginTop:"-6px"}}
                  trackStyle={[{ backgroundColor: '#C7A17A' , height: '10px', marginTop:"-6px" }]}
                />
                </div>
                <div className='shopPriceRange'>
                  <p> ${priceRange[0]} - ${priceRange[1]}</p>
                  <div className='shopPriceBoxFilterRange'>
                    <p>Filter</p>
                  </div>
                </div>



              </div>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default ShopPage