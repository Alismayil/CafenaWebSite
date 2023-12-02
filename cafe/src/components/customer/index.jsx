import React from 'react'
import "./customer.scss"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';

import { Navigation } from 'swiper/modules';

function Customer() {
  return (
    <section id='review'>
      <div className="title">
        <span className='subtitle'>testimonial</span>
        <h2>OUR CUSTOMER REVIEW</h2>
      </div>

      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide">
            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/t-quote.png" alt="" />
            <p>Very good quality of food and service. Vast menu with child friendly items as well as local seafood and even entrees for those who dont like seafood. Great place! Thanks. We absolutely love everything there!</p>
            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/author/tm-author.png" alt="" />
            <div class="content">
              <h4>Rasalina De Willamson</h4>
              <span class="designation">Founder & co</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/t-quote.png" alt="" />
            <p>Very good quality of food and service. Vast menu with child friendly items as well as local seafood and even entrees for those who dont like seafood. Great place! Thanks. We absolutely love everything there!</p>
            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/author/tm-author.png" alt="" />
            <div class="content">
              <h4>Rasalina De Willamson</h4>
              <span class="designation">Founder & co</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/t-quote.png" alt="" />
            <p>Very good quality of food and service. Vast menu with child friendly items as well as local seafood and even entrees for those who dont like seafood. Great place! Thanks. We absolutely love everything there!</p>
            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/author/tm-author.png" alt="" />
            <div class="content">
              <h4>Rasalina De Willamson</h4>
              <span class="designation">Founder & co</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Customer