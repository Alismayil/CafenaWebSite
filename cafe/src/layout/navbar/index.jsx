import React, { useState } from 'react'
import './navbar.scss'
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingBasket } from "react-icons/fa";

import { Link,Outlet,} from 'react-router-dom'
const Navbar = () => {
    const [activeLink, setActiveLink] = useState('/');
    // const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const handleLinkClick = (to) => {
      setActiveLink(to);
    //   if (to === '/about') {
       
    //     setAboutDropdownOpen(!isAboutDropdownOpen);
    //   } else {
        
    //     setAboutDropdownOpen(false);
    //   }
    };
  return (
    <nav>
    <div className='navbar_container'>
<ul className='submenu'>
<Link to='/' className={`btn ${activeLink === '/' ? 'active' : ''}`}onClick={() => handleLinkClick('/')}><span></span>HOME</Link>
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
