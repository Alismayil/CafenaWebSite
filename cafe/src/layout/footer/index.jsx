import React from 'react'
import './footer.scss'
import { GrSend } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
const Footer = () => {
  return (
   <footer>
    <div className='footer_container'>
        <div className='footer_top'>
            <div className='footer_col'>
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ft-phone.png" alt="" />
                <p className='PhoneNum'>PHONE: <a href="tel:88019339702520" className='number'>+88019 339 702 520</a></p>
            </div>
            <div className='footer_col'>
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ft-map-marker.png" alt="" />
                <p className='address'>ADDRESS: <span>30 North West New</span></p>
            </div>
            <div className='footer_col'>
                <form action="">
                   <input type="email" placeholder='Enter your email'/>
                    <button>
                    SUBSCRIBE<GrSend />
                    </button>
                </form>
            </div>
        </div>
        <div className='footer_middle'>
            <div className='footer_logo_content'>
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo.png" alt="" />
                <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum</p>
            </div>
            <div className='logos'>
                <div className='logo_row'>
                <a href=""><FaTwitter /></a>
                <a href=""><BiLogoFacebook /></a>
                <a href=""><FaYoutube /></a>
                <a href=""><FaGooglePlusG /></a>
                <a href=""><FaInstagram/></a>
                </div>
            </div>
        </div>
        <div className='footer_bottom'>
            <ul className='footer_nav'>
                <li><a href="" style={{color:''}}>Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservation</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Blog</a></li>
            </ul>
            <div className='go_top'>
            <a href="#" class="go-top__btn">
                                <span>GO TOP</span>
                                <FaArrowUpLong />
                            </a>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer