import React from 'react'
import Btn from "@/components/btn"
import Image from 'next/image'
import libraryImg from '@/public/assets/law-library.jpg'



function Services() {
  return (
    <section className="services section">

        <Image src={libraryImg} alt='' className='services-bg'/>
        <div className="container">
            <div className="services-left">
                <h3 className="sub-heading">Our Services</h3>
                <h1 className="heading">our Practice Areas</h1>
                <h3 className="heading-text">Professional procation of your <br /> interests in all areas of life</h3>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Odit perspiciatis delectus, esse laboriosam tempore quasi dicta odio soluta 
                 officia architecto similique consequuntur 
                eius ipsum incidunt expedita veritatis blanditiis possimus animi.</p>

                <Btn text="Get a free consultation" />
            </div>
            <div className="services-right">
                <div className="card-container">
                    <div className="card">
                        <i className="uil uil-shield"></i>
                        <h3 className="card-title">Social Security Benefits</h3>
                    </div>
                     <div className="card">
                        <i className="uil uil-shield"></i>
                        <h3 className="card-title">Social Security Benefits</h3>
                    </div>
                     <div className="card">
                        <i className="uil uil-shield"></i>
                        <h3 className="card-title">Social Security Benefits</h3>
                    </div>
                     <div className="card">
                        <i className="uil uil-shield"></i>
                        <h3 className="card-title">Social Security Benefits</h3>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
