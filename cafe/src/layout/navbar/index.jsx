import React, { useContext, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoClose } from 'react-icons/io5';
import { PiBasket } from "react-icons/pi";
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { BasketContext } from '../../context/BasketContext/basketContext';
import { SearchContext } from '../../context/SearchContext/searchContext';
import { WishlistContext } from '../../context/WishlistContext/wishlistContext';
import './navbar.scss';
import { BiLogoFacebook } from "react-icons/bi";
import { FaEnvelopeOpenText, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";



const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const [isSearchOpen, setIsSearchOpen] = useState(false);


  const { handleOpenSideBar, basket } = useContext(BasketContext)
  const { handleOpenWishlistBar } = useContext(WishlistContext)

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  // -----------yoxlama----------

  const [isSecondNavOpen, setIsSecondNavOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsSecondNavOpen(!isSecondNavOpen);
    setIsMenuOpen(false); 
    setIsInfoOpen(true);
  };

  const { handleSearch } = useContext(SearchContext)




  // ---------------handleSearch---------------------



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

  const handleMenuClick = () => {
    setIsMenuOpen(true);
    setIsInfoOpen(false);
  };

  const handleInfoClick = () => {
    setIsMenuOpen(false);
    setIsInfoOpen(true);
  };

  

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
                <Link to='/Home1' className={`btn2 ${activeLink === '/Home1' ? 'active2' : ''}`} onClick={() => handleLinkClick('/Home1')} disabled={activeLink === '/Home2' || activeLink === '/Home3'}>Home 1</Link>
                <Link to='/Home2' className={`btn2 ${activeLink === '/Home2' ? 'active2' : ''}`} onClick={() => handleLinkClick('/Home2')} disabled={activeLink === '/Home1' || activeLink === '/Home3'}>Home 2</Link>
                <Link to='/' className={`btn2 ${activeLink === '/' ? 'active2' : ''}`} onClick={() => handleLinkClick('/')} disabled={activeLink === '/Home1' || activeLink === '/Home2'}>Home 3</Link>
              </ul>
            </Link>
          </div>
          <Link to='/about' className={`btn ${activeLink === '/about' ? 'active' : ''}`} onClick={() => handleLinkClick('/about')}><span></span>ABOUT</Link>
          <Link to='/menu' className={`btn ${activeLink === '/menu' ? 'active' : ''}`} onClick={() => handleLinkClick('/menu')}><span></span>MENU</Link>
          <Link to='/reservation' className={`btn ${activeLink === '/reservation' ? 'active' : ''}`} onClick={() => handleLinkClick('/reservation')}><span></span>RESERVATION</Link>
          <Link to='/faq' className={`btn ${activeLink === '/faq' ? 'active' : ''}`} onClick={() => handleLinkClick('/faq')}><span></span>FAQ</Link>
          <Link to='/shop' className={`btn ${activeLink === '/shop' ? 'active' : ''}`} onClick={() => handleLinkClick('/shop')}><span></span>SHOP</Link>
        </ul>
        <div className='icons'>
          <CiSearch className='search' style={searchIconStyle} onClick={handleIconClick} />
          <div className={`search_form ${searchFormClass}`}>
            <form action="">
              <input type="text" placeholder='Search Keywords' onChange={(e) => handleSearch(e.target)} />
              <button><CiSearch /></button>
            </form>
          </div>
          <IoClose className='close' style={closeIconStyle} onClick={handleIconClick} />
          <RxHamburgerMenu className='hamburger' onClick={handleHamburgerClick} />
          <IoMdHeartEmpty className='wishlist' onClick={handleOpenWishlistBar} />
          <div className='basketNavbarIcons'> <PiBasket className='basket' onClick={handleOpenSideBar} />
            <div className='basketProductNumber'>
              <p>{basket.length}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={secondNavContainerStyle}>
        <div className='second_nav' style={{ cursor: 'auto' }}>
          <div className='nav_tab'>
            <button onClick={handleMenuClick} className={isMenuOpen ? 'menu_btn_active' : ''}>MENU</button>
            <button onClick={handleInfoClick} className={isInfoOpen ? 'info_btn_active' : ''}>INFO</button>
          </div>
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
          <div className={`second_nav_bottom ${isInfoOpen ? 'info_active' : ''}`}>
            <div className='about_us'>
              <h2>About us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat.</p>
              <a href="" className='contact_btn'>Contact us</a>
            </div>
            <div className='contact_us'>
              <h2 style={{ marginBottom: '0' }}>Contact us</h2>
              <ul>
                <li><img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ft-map-marker.png" alt="" /><p>Bowery St., New York, NY 10013, USA</p></li>
                <li><FaPhone className='phone' /><p>+1255-568-6523</p></li>
                <li><FaEnvelopeOpenText className='envelope' /><p>information@gmail.com</p></li>
              </ul>
              <div className='contact_icons'>
                <a href="#"><BiLogoFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaGooglePlusG /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
          </div>
          <ul className={`second_nav_link ${isMenuOpen ? 'menu_active' : ''}`}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>RESERVATION</li>
            <li>FAQ</li>
            <li>SHOP</li>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;