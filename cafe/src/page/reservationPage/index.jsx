import React from 'react'

import "./reservation.scss"
import Footer from '../../layout/footer'
import Navbar from '../../layout/navbar'
function reservationPage() {
  return (
    <>
  <Navbar></Navbar>
    {/* <section className='breadcrump'>
<img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-1.png" alt="" className='img_top'/>
<div className='breadcrump_txt'>
    <h2>RESERVATION</h2>
    <p>HOME / MENU</p>
</div>
<img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" className='img_bottom'/>
    </section> */}
<section className='form_sec'>
    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/hero-shape-2-1.png" alt="" className='form_bg_left'/>
<div className='form_container'>
<h2>RESERVATION FORM</h2>
<div className='form_row'>
    <div className='form_col'>
        <input type="text" placeholder='Enter your name' />
    </div>
    <div className='form_col'>
        <input type="text" placeholder='Enter your number'/>
    </div>
    <div className='form_col'>
        <select name="" id="">
            <option value="">Seates*</option>
            <option value="">For 2 Persons</option>
            <option value="">For 5 Persons</option>
            <option value="">For 6 Persons</option>
        </select>
    </div>
    <div className='form_col'>
        <input type="date" />
    </div>
    <div className='form_col'>
        <input type="time" />
    </div>
    <div className='form_col'>
        <input type="email" placeholder='Enter your mail'/>
    </div>
   
</div>
<div className='btn'>
<button>Submit your request</button>
</div>

</div>
<img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/hero-shape-2-2.png" alt="" className='form_bg_right'/>
</section>
<Footer></Footer>
    </>
  )
}

export default reservationPage