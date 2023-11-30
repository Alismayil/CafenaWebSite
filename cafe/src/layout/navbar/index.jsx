import React, { useState } from 'react'
import './navbar.scss'
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingBasket } from "react-icons/fa";

import { Link,Outlet,} from 'react-router-dom'
const Navbar = () => {
    const [activeLink, setActiveLink] = useState('/');
    
    const handleLinkClick = (to) => {
      setActiveLink(to);
      // if (to === '/about') {
       
      //   setAboutDropdownOpen(!isAboutDropdownOpen);
      // } else {
        
      //   setAboutDropdownOpen(false);
      // }
    };
  return (
    <nav>
    <div className='navbar_container'>
<ul className='submenu'>

<div className='Home'>
  <Link to='#' className={`btn ${activeLink === '/' || activeLink === '/Home1' || activeLink === '/Home2' ? 'active' : ''}`} onClick={() => handleLinkClick('/')} ><span></span>HOME
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
<CiSearch className='search'/>
<RxHamburgerMenu className='hamburger'/>
<FaShoppingBasket className='basket'/>
<Outlet />
</div>

    </div>
    </nav>
  )
}

export default Navbar
