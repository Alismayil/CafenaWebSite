import React from 'react'
import './bestCoffe.scss'
const BestCoffee = () => {
    return (
        <section id='Best'>
            <div className='aboutArea'>
                <div className='areaLeft'>
                    <div className='leftImage'>
                        <img className='bigImage' src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-1.png" alt="" />
                        <img className='smallImage' src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-2.png" alt="" />
                    </div>
                </div>
                <div className='areaRight'>
                    <div className='textRight'>
                        <div className='aboutUS'><h6>ABOUT US</h6></div>
                        <h1>ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN</h1>
                        <p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa  nibhtincidunt.</p><br />

                        <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsan id mi nec  semper. Lorem ipsum.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestCoffee