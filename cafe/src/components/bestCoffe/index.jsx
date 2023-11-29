import React from 'react'
import './bestCoffe.scss'
const BestCoffee = () => {
    return (
        <section>
            <div className='areaBestCoffee'>
                <div className='bestCoffeeLeft'>
                    <div className='img1'>
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/about-shape-2-1.png" alt="" />
                    </div>
                </div>
                <div className='bestCoffeeRight'>
                    <div className='img2'>
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/about-shape-2-2.png" alt="" />
                    </div>
                </div>
                <div className='coffeeContainer'>
                    <div className='aboutLeft'>

                        <img className='bigImage' src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-1.png" alt="" />
                        <img className='smallImg' src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-2.png" alt="" />
                    </div>
                    <div className='coffeRightText'>
                        <h6 className='abouth6'>
                            ABOUT US
                        </h6>
                        <h1>ONE OF THE BEST COFFEE <br />
                         HOUSE IN YOUR HOME TOWN</h1>
                         <p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod <br /> nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa <br /> nibhtincidunt.</p> <br />
                         <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut <br /> quam quis quam venenatis fringilla. Morbi vestibulum id tellus <br /> mmodo mattis. Aliquam erat volutpat. Aenean accumsan id mi <br />nec semper. Lorem ipsum.</p>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default BestCoffee