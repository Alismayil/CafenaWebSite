import React from 'react'
import './bestCoffe.scss'
const BestCoffee= () => {
  return (
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
                        <p className='secondDesc'>
                            Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsan id mi nec semper. Lorem ipsum.
                        </p>
                    </div>



                </div>


            </div>

        </section>
  )
}

export default BestCoffee