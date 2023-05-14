import React from 'react'
import Image from 'next/image'
import ConsImg from '@/public/assets/consualtation.jpg'

function ContactUS() {
  return (
    <section className="contact-us section">
              <Image src={ConsImg} alt='' className='section-bg'/>

        <div className="container">
            <div className="contact-us-left">
              <h3 className="heading">Give Your Visitors <br />
              a free Consultation
              </h3>
              <p className="text">With a free first consultation. You will ba able to attract more customers. </p>

              <h3 className="heading mini-heading">Or call us, write</h3>
              <div className="contacts-wrapper">
                <div className="contact-card">
                  <i class="uil uil-mobile-android"></i>
                  <p>+44 20 4511 2155</p>

                </div>
                <div className="contact-card">
                  <i class="uil uil-envelope"></i>
                  <p>info@tbc.com</p>
                </div>
              </div>
            </div>
            <div className="contact-us-right">

              <form action="index.html" className="contact-form">
                <div className="wrapper">
                <div className="input-w"><label htmlFor="">Name</label>
                <input type="text" className='form-input' placeholder='Your Name' required /></div>
                
                <div className="input-w">
                  <label htmlFor="">Your Email</label>
                  <input type="email" className='form-input' placeholder='Your Email' required />
                </div>
                </div>
                <div className="input-w">
                  <label htmlFor="">Message</label>
                  <textarea placeholder='Project Details' className="form-input" required></textarea>
                </div>
                
                <input type="submit"  value="Get a free consaultation" className='fancy'/>

            </form>
            </div>
        </div>
    </section>
  )
}

export default ContactUS
