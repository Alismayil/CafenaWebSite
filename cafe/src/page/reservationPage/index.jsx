import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import "./reservation.scss";
import Footer from '../../layout/footer';
import Navbar from '../../layout/navbar';
import BasketSidebar from '../../components/basket';
import WishlistSideBAr from '../../components/wishlist';

function ReservationPage() {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
      seats: '',
      date: '',
      time: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Enter your name'),
      number: Yup.string().matches(/^[0-9]+$/, 'Invalid phone number').required('Enter your number'),
      seats: Yup.string().required('Select number of seats'),
      date: Yup.date().required('Select a date'),
      time: Yup.string().required('Select a time'),
      email: Yup.string().matches(/^\S+@\S+\.\S+$/, 'Invalid email address').email('Invalid email address').required('Enter your email'),
    }),
    onSubmit: async (values,{resetForm}) => {
      try {
       
        await new Promise(resolve => setTimeout(resolve));

       
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your reservation has been submitted successfully.',
        });
        resetForm();
      } catch (error) {
       
    
      }
    },
  });

  return (
    <>
      {/* <Navbar /> */}
      <BasketSidebar />
      <WishlistSideBAr />
      <div className='notMeanReservation'></div>
      <section id='About'>
                <div className='shape shape1'>
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-1.png" alt="" />
                </div>
                <div className='aboutPage'>
                    <div className='aboutContainer'>

                        <div className='aboutPageText'>
                            <div className='aboutText'>
                                <h1>Reservation</h1>  
                            </div>
                            <div className='HomeAboutText'>
                                <h6>HOME / </h6>
                                <h6 className='abouth6' style={{marginLeft:"5px"}}> Reservation</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shape shape2'>
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" />
                </div>
            </section>
      <section className='form_sec'>
        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/hero-shape-2-1.png" alt="" className='form_bg_left' />
        <div className='form_container'>
          <h2>RESERVATION FORM</h2>
          <form onSubmit={formik.handleSubmit}>
          <div className='form_row'>
             <div className='form_col'>
                <input
                  type="text"
                  placeholder='Enter your name'
                  {...formik.getFieldProps('name')}
                />
              {formik.touched.name && formik.errors.name && (
                  <div className="error">{formik.errors.name}</div>
                )}
              </div>

              <div className='form_col'>
                <input
                  type="text"
                  placeholder='Enter your number'
                  {...formik.getFieldProps('number')}
                />
                {formik.touched.number && formik.errors.number && (
                  <div className="error">{formik.errors.number}</div>
                )}
              </div>

              <div className='form_col'>
                <select
                  name="seats"
                  id="seats"
                  {...formik.getFieldProps('seats')}
                >
                  <option value="">Seats*</option>
                  <option value="2">For 2 Persons</option>
                  <option value="5">For 5 Persons</option>
                  <option value="6">For 6 Persons</option>
                </select>
                {formik.touched.seats && formik.errors.seats && (
                  <div className="error">{formik.errors.seats}</div>
                )}
              </div>

              <div className='form_col'>
                <input
                  type="date"
                  {...formik.getFieldProps('date')}
                />
                {formik.touched.date && formik.errors.date && (
                  <div className="error">{formik.errors.date}</div>
                )}
              </div>

              <div className='form_col'>
                <input
                  type="time"
                  {...formik.getFieldProps('time')}
                />
                {formik.touched.time && formik.errors.time && (
                  <div className="error">{formik.errors.time}</div>
                )}
              </div>

              <div className='form_col'>
                <input
                  type="email"
                  placeholder='Enter your mail'
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error">{formik.errors.email}</div>
                )}
              </div>
            </div>
           

            <div className='btn'>
              <button type="submit" disabled={formik.isSubmitting}>
                Submit your request
              </button>
            </div>
          </form>
        </div>
        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/hero-shape-2-2.png" alt="" className='form_bg_right' />
      </section>
      <Footer />
    </>
  );
}

export default ReservationPage;