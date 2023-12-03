import React, { useState } from 'react';
import './faq.scss'
import { FaArrowDownLong } from "react-icons/fa6";
import Navbar from '../../layout/navbar';
import Footer from '../../layout/footer';
import BasketSidebar from '../../components/basket';
import WishlistSideBAr from '../../components/wishlist';

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const isAccordionOpen = (index) => activeAccordion === index;

  const accordionData = [
    {
      title: 'How does this work?',
      content: 'Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.',
    },
    {
      title: 'Some menus are missing on a coffee shop page?',
      content: 'Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.',
    },
   {
    title: 'Do any of your cheeses contain enzymes derived from animal sources?',
    content: 'Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.',
   },
   {
    title: 'Are your menu prices the same as those at the Coffee house?',
    content: 'Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.',
  },
  {
    title: 'Are your doughs vegan or vegetarian friendly?',
    content: 'Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.',
  },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <BasketSidebar />
      <WishlistSideBAr />
      <div className='norMeanAbout'></div>
            <section id='About'>
                <div className='shape shape1'>
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-1.png" alt="" />
                </div>
                <div className='aboutPage'>
                    <div className='aboutContainer'>

                        <div className='aboutPageText'>
                            <div className='aboutText'>
                                <h1>ASKING QUESTION</h1>
                            </div>
                            <div className='HomeAboutText'>
                                <h6>HOME / </h6>
                                <h6 className='abouth6' style={{marginLeft:"5px"}}> FAQ</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shape shape2'>
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" />
                </div>
            </section>
      <section className='FAQ_area'>
        <div className='FAQ_wrapper'>
          <div className='FAQ_container'>
            {accordionData.map((item, index) => (
              <div className='acordion_col' key={index}>
                <div className='acordion_faq_item'>
                  <button className={`acordion_btn ${isAccordionOpen(index) ? 'btn_active' : ''}`} onClick={() => toggleAccordion(index)}>
                    <FaArrowDownLong />
                  </button>
                  <h2>{item.title}</h2>
                </div>
                <div className={`acordion_txt_${index} ${isAccordionOpen(index) ? 'active' : ''}`}>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;