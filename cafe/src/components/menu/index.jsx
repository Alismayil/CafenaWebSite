import React from 'react'
import './menu.scss'
import { NavLink } from "react-router-dom";
function PopularMenu() {
  return (
   <>
    <div className='popularMenu'>
       <div className='popularMenuLeft'>
       <div className='img1'>
            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-1.png" alt="" />
        </div>
        <div className='img2'>
            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-2.png" alt="" />
        </div>
       </div>
       <div className='popularMenuRight'>
       <div className='img3'>
            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-3.png" alt="" />
        </div>
        <div className='img4'>
            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-4.png" alt="" />
        </div>
       </div>
    </div>
    <div className='SpecialMenuBiggestBox'>
    <div className="container">
    <div className='specialMenuBoxUp'>
    <div className='specialBox'>
        <div className='SpecialMenuBoxText'>
            <p>SPECIAL MENU</p>
        </div>
    </div>
    <div className='speacialText'>
        <p>CAFENA POPULAR MENU</p>
    </div>
    <div className='FilterText'>
        <div className='filterTextBox'>
            <ul className='filterUl'>
                <NavLink to={"/"}  ><li>ALL</li></NavLink>
                <NavLink to={"/1"} ><li>CHOCOLATE</li></NavLink>
                <NavLink to={"/2"} ><li>SANDWICHES</li></NavLink>
                <NavLink to={"/3"} ><li>SWEETS</li></NavLink>
                <NavLink to={"/4"} ><li>BLACK TEA</li></NavLink>
                <NavLink to={"/5"} ><li>GREAN TEA</li></NavLink>
            </ul>
        </div>
    </div>


    </div>
    <div className='specialMenuBoxDown'></div>
    </div>
    </div>
   
   </>
  )
}

export default PopularMenu