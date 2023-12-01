import React from 'react'
import './about.scss'
import { CiSquareCheck } from "react-icons/ci";
const About = () => {
    return (
        //   About page section 1 start
        <>
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
                                <h6 className='abouth6'> ABOUT</h6>
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
                           
                            <p> <i class="fa-solid fa-check"></i>What is Lorem Ipsum Lorem Ipsum is simply.</p>
                        </div>
                        <div className='checkedAll'>
                            <span className='iconSpan'><i class="fa-solid fa-check"></i></span>
                            <p>Dummy text of the printing text.</p>
                        </div>
                        <div className='checkedAll'>
                            <span className='iconSpan'><i class="fa-solid fa-check"></i></span>
                            <p>Typesetting industry Lorem Ipsum has been the industry's</p>
                        </div>
                    </div>
                    </div>
                   






                </div>

            </section>
        </>

    )
}

export default About
