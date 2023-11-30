import React, { useState } from 'react';
import './navbar.scss';
import { CiSearch } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaShoppingBasket } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { FaRegHeart } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [wishlistOpen,setWishlistOpen]=useState(false);
  const [isSecondNavOpen, setIsSecondNavOpen] = useState(false);
  const [basketOpen,setBasketOpen]=useState(false);
  const handleHamburgerClick = () => {
    setIsSecondNavOpen(!isSecondNavOpen);
  };
  const handleBasketClick = () => {
    setBasketOpen(!basketOpen);
  };
 
  const handleWishlistClick=()=>{
    setWishlistOpen(!wishlistOpen)
  }
  const handleLinkClick = (to) => {
    setActiveLink(to);
  };

  const handleIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
    
  };
  const secondNavContainerStyle = `second_nav_container ${isSecondNavOpen ? 'second_nav_active' : ''}`;
  const searchIconStyle = isSearchOpen ? { display: 'none' } : {};
  const closeIconStyle = isSearchOpen ? {} : { display: 'none' };
  const searchFormClass = isSearchOpen ? 'search_active' : '';
  const WishlistContainerStyle = `wishlist_container ${wishlistOpen ? 'wishlist_active' : ''}`;
  const BasketContainerStyle = `basket_container ${basketOpen ? 'basket_active' : ''}`;

  return (
    <nav>
      <div className='navbar_container'>
        <a href="/" className='nav_logo'>
          <img
            src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo-black.png"
            alt=""
            className='logo_img'
          />
        </a>
        <ul className='submenu'>
         <div className='Home'>
   <Link to='/' className={`btn ${activeLink === '/' || activeLink === '/Home1' || activeLink === '/Home2' ? 'active' : ''}`} onClick={() => handleLinkClick('/')} ><span></span>HOME
  <ul className='Home_ul'>
 <Link to='/Home1' className={`btn2 ${activeLink === '/Home1' ? 'active2' : ''}`}onClick={() => handleLinkClick('/Home1')}  disabled={activeLink === '/Home2' || activeLink === '/Home3'}>Home 1</Link>
 <Link to='/Home2' className={`btn2 ${activeLink === '/Home2' ? 'active2' : ''}`}onClick={() => handleLinkClick('/Home2')}  disabled={activeLink === '/Home1' || activeLink === '/Home3'}>Home 2</Link>
 <Link to='/' className={`btn2 ${activeLink === '/' ? 'active2' : ''}`}onClick={() => handleLinkClick('/')}  disabled={activeLink === '/Home1' || activeLink === '/Home2'}>Home 3</Link>
   </ul>
  </Link>
  </div>
 <Link to='/about' className={`btn ${activeLink === '/about' ? 'active' : ''}`}onClick={() => handleLinkClick('/about')}><span></span>ABOUT</Link>
 <Link to='/menu' className={`btn ${activeLink === '/menu' ? 'active' : ''}`}onClick={() => handleLinkClick('/menu')}><span></span>MENU</Link>
 <Link to='/reservation' className={`btn ${activeLink === '/reservation' ? 'active' : ''}`}onClick={() => handleLinkClick('/reservation')}><span></span>RESERVATION</Link>
 <Link to='/pages' className={`btn ${activeLink === '/pages' ? 'active' : ''}`}onClick={() => handleLinkClick('/pages')}><span></span>PAGES</Link>
 <Link to='/shop' className={`btn ${activeLink === '/shop' ? 'active' : ''}`}onClick={() => handleLinkClick('/shop')}><span></span>SHOP</Link>
        </ul>
        <div className='icons'>
          <CiSearch className='search' style={searchIconStyle} onClick={handleIconClick} />
          <div className={`search_form ${searchFormClass}`}>
            <form action="">
              <input type="text" placeholder='Search Keywords' />
              <button><CiSearch /></button>
            </form>
          </div>
          <IoClose className='close' style={closeIconStyle} onClick={handleIconClick} />
          <RxHamburgerMenu className='hamburger' onClick={handleHamburgerClick}/>
          <FaRegHeart className='wishlist' onClick={handleWishlistClick}/>
          <FaShoppingBasket className='basket' onClick={handleBasketClick}/>
          <Outlet />
        </div>
      </div>
      <div className={secondNavContainerStyle}>
        <div className='second_nav' style={{cursor:'auto'}}>
          <div className='second_nav_top'>
          <a href="/" className='nav_logo'>
          <img
            src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo-black.png"
            alt=""
            className='logo_img'
          />
        </a>
        <button onClick={handleHamburgerClick}>
          <IoClose className='second_nav_close' />
          </button>
          </div>
         
  
          <div className='second_nav_bottom'>
            <div className='about_us'>

            </div>
            <div className='contact_us'>
              
            </div>
          </div>
        </div>
       </div>
       <div className={WishlistContainerStyle}>
        <div className='wishlist_bar' style={{cursor:'auto'}}>
        <button onClick={handleWishlistClick}>
          <IoClose className='wishlist_close'/>
          </button>
        </div>
       </div>
       <div className={BasketContainerStyle}>
        <div className='basket_bar' style={{cursor:'auto'}}>
        <button onClick={handleBasketClick}>
          <IoClose className='basket_close'/>
          </button>
        </div>
       </div>
    </nav>
  );
};

export default Navbar;