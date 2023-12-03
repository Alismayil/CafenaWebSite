
import React from 'react'
import './about.scss'
import { LuPlus } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import BasketSidebar from '../../components/basket';
import WishlistSideBAr from '../../components/wishlist';

const About = () => {
    return (
        //   About page section 1 start
        <>
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
                                <h1>About Cafena</h1>
                            </div>
                            <div className='HomeAboutText'>
                                <h6>HOME / </h6>
                                <h6 className='abouth6' style={{marginLeft:"5px"}}> ABOUT</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shape shape2'>
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" />
                </div>
            </section>
            {/* //    About page section 1 end */}

            {/* <BestCoffee></BestCoffee> */}

            {/*  About page section 2 start */}
            <section id='aboutUs'>
                <div className="container">
                    <div className="leftImg">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/about-shape-2-1.png" alt="" />
                    </div>
                    <div className="rightImg">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/about-shape-2-2.png" alt="" />
                    </div>
                    <div className="contentImgs">
                        <div className='imgContainer' >
                            <div className="bigImg">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-1.png" alt="" />
                            </div>
                            <div className="smallImg">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-2.png" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className='textcontent-chek'>
                        <div className="textContent">
                            <div className="subTitle">
                                <span className='textSubTitle'>
                                    ABOUT US
                                </span>
                            </div>
                            <div className="mainTitle">
                                <h2 className='title'>one of the best coffee house
                                    in your home town</h2>
                            </div>
                            <div className="description">
                                <p className='initalDesc'>
                                    Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.
                                </p>

                            </div>
                        </div>
                        <div className='checked'>
                            <div className='checkedAll'>

                                <span className='iconSpan'><i class="fa-solid fa-check"></i></span>
                                <p className='text'>What is Lorem Ipsum Lorem Ipsum is simply.</p>
                            </div>
                            <div className='checkedAll'>
                                <span className='iconSpan'><i class="fa-solid fa-check"></i></span>
                                <p className='text'>Dummy text of the printing text.</p>
                            </div>
                            <div className='checkedAll'>
                                <span className='iconSpan'><i class="fa-solid fa-check"></i></span>
                                <p className='text'> Typesetting industry Lorem Ipsum has been the industry's</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            {/* About page section 2 end */}
            {/* About page section 3 start */}
            <section id='WhyChoose'>
                <div className='ChooseAll'>
                    <div className='ChooseText'>
                        <h6 className='chooseUS'>WHY CHOOSE US</h6>
                        <h1>WE ARE PROVIDE BEST SERVICE <br />
                            IN YOUR CITY</h1>
                    </div>
                    <div className='chooseContainer'>
                        <div className='AccumsaBox'>
                            <div className='BestTesty'>
                                <div className='ImageWhy'>
                                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-1.png" alt="" />

                                </div>
                                <div className='WhyText'>
                                    <h2>Testy Coffee Recipe</h2><br />
                                    <p>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</p>
                                </div>
                                <div className='icons'>
                                    <span className='iconFal'><i class="fa-solid fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className='AccumsaBox'>
                            <div className='BestTesty'>
                                <div className='ImageWhy'>
                                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-2.png" alt="" />

                                </div>
                                <div className='WhyText'>
                                    <h2>Great Location</h2><br />
                                    <p>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</p>
                                </div>
                                <div className='icons'>
                                    <span className='iconFal'><i class="fa-solid fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className='AccumsaBox'>
                            <div className='BestTesty'>
                                <div className='ImageWhy'>
                                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-1.png" alt="" />

                                </div>
                                <div className='WhyText'>
                                    <h2>Professional Chef</h2><br />
                                    <p>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</p>
                                </div>
                                <div className='icons'>
                                    <span className='iconFal'><i class="fa-solid fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* About page section 3 end */}
            {/* About page section 4 start */}
            <section id='TryTheBest'>
                <div className='TryArea'>
                    <div className='TryAreaBox'>
                        <div className='TryAreaText'>
                            <div className='TryTexth1'>
                                <h1>TRY THE BEST COFFEE IN THE HOUSING CITY</h1>
                            </div>
                            <div className='TryTextp'><br />
                                <p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.</p><br />
                                <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About page section 4 end 
            About page section 5 start */}

           
            <section id='Professional'>
                <div className='OurProfessional'>
                    <div className='ChooseText'>
                        <h6 className='chooseUS'>OUR CHEF</h6>
                        <h1>MEET OUR PROFESSIONAL</h1>
                    </div>

                    <div className='prof-card'>
                        <div className="team__box">
                            <div className="thumb">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/team/team-1.jpeg" alt="" />
                                <div className="social-links">
                                    <div className="social-links__trigger">
                                        <LuPlus />
                                        <ul className='list-unstyled'>
                                            <li className='face'><a href=""><FaFacebookF /></a></li>
                                            <li className='ywit'><a href=""><FaTwitter /></a></li>
                                            <li className='pint'><a href=""><FaPinterestP /></a></li>
                                            <li className='in'><a href=""><FaLinkedinIn /></a></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                            <div className="content">
                                <h4>RASALINA DE WILLAMSON</h4><br />
                                <p> 12 year experience</p>
                            </div>
                        </div>
                        <div className="team__box">
                            <div className="thumb">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/team/team-2.jpeg" alt="" />
                                <div className="social-links">
                                    <div className="social-links__trigger">
                                        <LuPlus />
                                        <ul className='list-unstyled'>
                                            <li className='face'><a href=""><FaFacebookF /></a></li>
                                            <li className='ywit'><a href=""><FaTwitter /></a></li>
                                            <li className='pint'><a href=""><FaPinterestP /></a></li>
                                            <li className='in'><a href=""><FaLinkedinIn /></a></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                            <div className="content">
                                <h4>ALEXTINA JIMIEY</h4><br />
                                <p>09 year experience</p>
                            </div>
                        </div>
                        <div className="team__box">
                            <div className="thumb">
                                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/team/team-1.jpeg" alt="" />
                                <div className="social-links">
                                    <div className="social-links__trigger">
                                        <LuPlus />
                                        <ul className='list-unstyled'>
                                            <li className='face'><a href=""><FaFacebookF /></a></li>
                                            <li className='ywit'><a href=""><FaTwitter /></a></li>
                                            <li className='pint'><a href=""><FaPinterestP /></a></li>
                                            <li className='in'><a href=""><FaLinkedinIn /></a></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                            <div className="content">
                                <h4>JIMMEY AENDERSON</h4><br />
                                <p>05 year experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default About