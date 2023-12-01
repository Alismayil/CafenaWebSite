import React from 'react'
import './blog.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";

const Blog = () => {
  return (
   <section id='blogPage'>
     <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/blog-shape-2-2.png" alt="" className='Blog_bg_top'/>
    <div className='Blog_container'>
       
<div className='Blog_row_top'>
    <div className='Blog_title'>
        <span className='news_and_blogs'>NEWS & BLOG</span>
<h2 className='Latest_news_and_blog'>LATEST NEWS & BLOG</h2>
    </div>
    <div className='Blog_btn'>
    <a href="http://localhost:5174/about" className='Learn_more'>LEARN MORE<div></div></a>
   
    </div>
</div>
<div className='Blog_row_bottom'>
    <div className='Blog_card_1'>
        <div className='Blog_img'>
        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-2-1.jpeg" alt="" className='Blog_bg_img_bottom'/>
        </div>
        <div className='Blog_text'>
        <p >By: <span style={{color:'#7a7c7a'}}>Rasalina</span></p>
        <a href="" className='Blog_link'>Questions Business Must Be Able To Answers</a>
        <div className='Blog_navigate'>
                <a href="" className='Read_More'>Read More  
<FaArrowRightLong /></a>
                <a href="" className='Share'><IoShareSocialOutline /></a>
            </div>
        </div>
        
    </div>
    <div className='Blog_card_2'>
    <div className='Blog_img'>
        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-2-2.jpeg" alt="" className='Blog_bg_img_bottom'/>
        </div>
        <div className='Blog_text'>
        <p >By: <span style={{color:'#7a7c7a'}}>Rasalina</span></p>
        <a href="" className='Blog_link'>Build A Cool Mornig With Cafena Coffee</a>
        <div className='Blog_navigate'>
                <a href="" className='Read_More'>Read More <FaArrowRightLong /></a>
                <a href="" className='Share'><IoShareSocialOutline /></a>
            </div>
        </div>
      
    </div>
    <div className='Blog_card_3'>
    <div className='Blog_img'>
        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/blog/blog-2-3.jpeg" alt="" className='Blog_bg_img_bottom'/>
        </div>
        <div className='Blog_text'>
            <p >By: <span style={{color:'#7a7c7a'}}>Rasalina</span></p>
            <a href="" className='Blog_link'>Ideal Cocktails From Our Barmen For Pefect Mood</a>
            <div className='Blog_navigate'>
            <a href="" className='Read_More'>Read More <FaArrowRightLong /></a>
                <a href="" className='Share'><IoShareSocialOutline /></a>
            </div>
        </div>
    </div>
</div>

    </div>
    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/blog-shape-2-1.png" alt="" className='Blog_bg_bottom'/>
   </section>
  )
}

export default Blog