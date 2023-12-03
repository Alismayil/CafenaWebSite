import React, { useContext, useState } from 'react'
import './shop.scss'
import { IoIosSearch } from "react-icons/io";
import UseFetch from '../../hook/UseFetch';
import { FaRegEye } from "react-icons/fa";
import { PiBasket } from "react-icons/pi";
import { Slider } from 'antd';
import BasketSidebar from '../../components/basket';
import WishlistSideBAr from '../../components/wishlist';
import { BasketContext } from '../../context/BasketContext/basketContext';
import { WishlistContext } from '../../context/WishlistContext/wishlistContext';
import { SearchContext } from '../../context/SearchContext/searchContext';
import { Link } from "react-router-dom";


function ShopPage() {
  const [shopCard, setShopCard] = useState([])

  const [sort, setSort] = useState("All")
  const [categoriSort, setCategoriSort] = useState('All')


  const [currentPage, setCurrentPage] = useState(1);
  const [pagePerData] = useState(6);


  const {handleAddWishlist, heart}=useContext(WishlistContext)
  const { handleAddBasket } = useContext(BasketContext)

  const{search, handleSearch}=useContext(SearchContext)

  const [changeMenu, setChangeMenu] = useState(false)

// -----------------filterSort----------------------
const filterSort=(shopCard.filter((item)=> sort === "All" || item.sortId === String(sort)))
const categoryFilter=(shopCard.filter((item)=> item.category === categoriSort || categoriSort === "All" ))

  const url = "http://localhost:3000/product"

  // --------useFetch------------
  function Callback(data) {
    setShopCard(data)
  }
  UseFetch(url, Callback)


  // ---------------range-----------------
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);
  const handlePriceChange = (value) => {
    setPriceRange(value);
    setSelectedPriceRange(value);
    
  };

// ----------sortFunction------------------
function handleSortSelect(e) {
  setSort(e.target.value)
}

function handleCategoryButtonClick(categoryFilter) {
  setCategoriSort(categoryFilter);
}



  // -----------------pagination--------------------
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(categoryFilter.length / pagePerData); i++) {
    pageNumbers.push(i);
  }
  
  const lastElementIndex = currentPage * pagePerData;
  const firstElementIndex = lastElementIndex - pagePerData;
  
  const PageDatas = React.useMemo(() => categoryFilter.slice(firstElementIndex, lastElementIndex), [
    currentPage,
    categoryFilter  
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
              <p>Showing 1- 6 of {shopCard.length} results</p>
            </div>
            <div className="shopFilter">
              <div className='shopMenuBox'>
                <button onClick={()=>setChangeMenu(false)} style={{ color: "black" }} className="nav-link active" id="shop-tab-1-tab" data-bs-toggle="tab" href="#shop-tab-1" role="tab" aria-controls="shop-tab-1" aria-selected="true"><i className="fas fa-th"></i></button>
                <button onClick={()=>setChangeMenu(true)}   style={{ color: "black" }} className="nav-link" id="shop-tab-2-tab" data-bs-toggle="tab" href="#shop-tab-2" role="tab" aria-controls="shop-tab-2" aria-selected="false"><i className="fas fa-list-ul"></i></button>
              </div>
              <select value={sort} onChange={handleSortSelect}>
                <option value="New">Short by New</option>
                <option value="Top">Short by Top</option>
                <option value="All">All</option>
              </select>
            </div>
          </div>
          <div className="downbox">
            <div className="boxLeft">
              
              {
                PageDatas && PageDatas.filter((x)=>x.inform.toLowerCase().includes(search.toLowerCase()))
                .filter((item) => item.newPrice >= selectedPriceRange[0] && item.newPrice <= selectedPriceRange[1])
                .filter((item)=> item.category === categoriSort || categoriSort === "All" )
                .filter((item)=> sort === "All" || item.sortId === String(sort)).map((item) => (
                 <>
                  <div className={`${changeMenu ? "shopChangeCard" : "shopCard"}`} key={item.id}>
                    <div className='shopCardHover'>
                      <button onClick={()=>handleAddBasket(item)}> <PiBasket /></button>
                      <button onClick={()=>handleAddWishlist(item)}>
                      <i className={`${heart.includes(item.id) ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                        </button>
                      <Link to={`/details/${item.id}`}><button><FaRegEye /></button></Link>
                    </div>
                    <div className='shopcardImgBox'>
                      <img src={item.img} alt="" className='img1' />
                      <img src={item.image} alt="" className='img2' />
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
                 </>
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
                  <input type="text" placeholder='Search Product' onChange={(e)=>handleSearch(e.target)} />
                  <IoIosSearch className='serachIcon' />
                </div>
              </div>
              <div className="shopCategoriesBox">
                <div className="shopCategoryText">
                  <p>Categories</p>
                </div>
                <div className="shopCategoryButtonBox" >
                  <button onClick={() => handleCategoryButtonClick('burger')} >
                    <p>Burger</p>
                  </button>
                  <span>04</span>

                </div>
                <div className="shopCategoryButtonBox">
                  <button onClick={() => handleCategoryButtonClick('pizza')} >
                    <p>2x Pizza</p>
                  </button>
                  <span>04</span>
                </div>
                <div className="shopCategoryButtonBox">
                  <button onClick={() => handleCategoryButtonClick('coffee')} >
                    <p>Coffe</p>
                  </button>
                  <span>08</span>

                </div>
                <div className="shopCategoryButtonBox">
                  <button onClick={() => handleCategoryButtonClick('chicken')} >
                    <p>Chicken</p>
                  </button>
                  <span>03</span>
                </div>
                <div className="shopCategoryButtonBox">
                  <button onClick={() => handleCategoryButtonClick('other')} >
                    <p>Other</p>
                  </button>
                  <span>06</span>

                </div>
                <div className="shopCategoryButtonBox">
                  <button onClick={() => handleCategoryButtonClick('All')} >
                    <p>All</p>
                  </button>
                  <span>{shopCard.length}</span>

                </div>
              </div>
              <div className="shopFilterBox">
                <div className='shopPriceTextBox'>
                  <p>Price Filter</p>
                </div>
                <div className='shopPriceInput'>
                <Slider
                  range={{}}
                  defaultValue={[20, 1000]}
                  onChange={handlePriceChange}
                  min={0.00}
                  max={1000}
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