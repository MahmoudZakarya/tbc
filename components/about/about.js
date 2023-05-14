import React, { useEffect } from 'react'
import Btn from "@/components/btn"
import Image from 'next/image';
import { register } from 'swiper/element/bundle';
import "swiper/swiper.min.css";

import 'swiper/css/pagination';
import Photo1 from '../../public/assets/photo1.jpg'
import Photo2 from '../../public/assets/photo2.jpg'
import Photo3 from '../../public/assets/photo3.jpg'
import { Pagination } from 'swiper';



function AboutUs() {

  useEffect(()=>{
    register();
   
     const swiperEl = document.querySelector('swiper-container');

  const params = {
    modules: [Pagination],


     injectStyles: [
      `
      .swiper-pagination-bullet {
        cursor:pointer;
       

}

      `,
    ],
    // inject same style to shadow DOM
    injectStylesUrls: [
      '../../styles/about.css',
    ],
  };


  Object.assign(swiperEl, params);


  swiperEl.initialize();
  },[])

  return (
    <section className="about section">
        <div className="container">
            <div className="about-left">
                <h3 className="sub-heading">About us</h3>
                <h1 className="heading">Welcome To TBC</h1>
                <h3 className="heading-text">The top tier international law firm, <br /> from Turkey, for the world.</h3>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Odit perspiciatis delectus, esse laboriosam tempore quasi dicta odio soluta 
                 officia architecto similique consequuntur 
                eius ipsum incidunt expedita veritatis blanditiis possimus animi.</p>

                <Btn text="Read More" color="white" />
            </div>
            <div className="about-right">
              <swiper-container init='false'
              
                 autoplay='true' longSwipes="false" pagination='true' pagination-clickable="true"
               slides-per-view="1" speed="400" loop="true"  class="about-slider"
              >

                <swiper-slide class='about-slide'>
                  <div className='slide'>
                  <Image alt='' src={Photo1} className='slide-img' />
                  </div>
                </swiper-slide>
               
                <swiper-slide class='about-slide'>
                  <div className='slide'>
                  <Image alt='' src={Photo2} className='slide-img' />
                  </div>
                </swiper-slide>
                <swiper-slide class='about-slide'>
                  <div className='slide'>
                  <Image alt='' src={Photo3} className='slide-img' />
                  </div>
                </swiper-slide>

              </swiper-container>
            </div>
        </div>
    </section>
  )
}

export default AboutUs
