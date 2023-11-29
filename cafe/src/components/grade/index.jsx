import React from 'react'
import './grade.scss'
const Grade = () => {
    return (
        <section>
            <div className='gradeArea'>
                <div className='topGradeLeft'>
                    <div className='img1'>
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/top-grade-shape-2-1.png" alt="" />
                    </div>
                </div>
                <div className='topGradeRight'>
                    <div className='img2'>
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/top-grade-shape-2-2.png" alt="" />
                    </div>
                </div>
                <div className='gradeTitle'>
                    <h6 className='abouth6'>
                        ABOUT US
                    </h6>
                    <h1>WORLD TOP GRADE</h1>
                </div>
                <div className='containerGrade'>
                    <div className='topGrade1'>
                        <div className='gradeImg'>
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-1.jpeg" alt="" />
                            <div className='count1'><h6>01</h6></div>
                        </div>
                        <div className='text'>
                            <h2>Americano Grade</h2>
                            <p>Curabitur semper erat a lacusey <br />
                                consequat, sit amet quam</p>
                        </div>
                    </div>
                    <div className='topGrade2'>
                        <div className='gradeImg'>
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-2.jpeg" alt="" />
                            <div className='count2'><h6>02</h6></div>
                        </div>
                        <div className='text'>
                            <h2>Arebica Green</h2>
                            <p>Curabitur semper erat a lacusey <br />
                                consequat, sit amet quam</p>
                        </div>
                    </div>
                    <div className='topGrade1'>
                        <div className='gradeImg'>
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-3.jpeg" alt="" />
                            <div className='count1'><h6>03</h6></div>
                        </div>
                        <div className='text'>
                            <h2>Mixed Rosted</h2>
                            <p>Curabitur semper erat a lacusey <br />
                                consequat, sit amet quam</p>
                        </div>
                    </div>
                    <div className='topGrade2'>
                        <div className='gradeImg'>
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-4.jpeg" alt="" />
                            <div className='count2'><h6>04</h6></div>
                        </div>
                        <div className='text'>
                            <h2>Robasta Rosted</h2>
                            <p>Curabitur semper erat a lacusey <br />
                                consequat, sit amet quam</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Grade