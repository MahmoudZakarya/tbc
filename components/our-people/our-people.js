import React, { useEffect } from 'react'
import Btn from "@/components/btn"
import Image from 'next/image';
import { register } from 'swiper/element/bundle';
import "swiper/swiper.min.css";
import 'swiper/css/pagination';
import TbcLogo from '../../public/assets/tbc-logo.png'
import MarbleImg from '../../public/assets/marble.webp'
import LadyJusticeImg from '../../public/assets/ladyjustice.png'



function OurPeople() {

 useEffect(()=>{
    register();
   
      },[])


  return (
    <section className="our-people section">
        <div className="container">
            <div className="our-people-left">
                <h3 className="sub-heading">Our People</h3>
                <h1 className="heading">Meet Out Attorneys</h1>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Odit perspiciatis delectus, esse laboriosam tempore quasi dicta odio soluta 
                 officia architecto similique consequuntur 
                eius ipsum incidunt expedita veritatis blanditiis possimus animi.</p>

                <Btn text="View All" />
            </div>
            <div className="our-people-right">
                <swiper-container slides-per-view="auto"
               centered-slides="true" space-between="20"
                   class="people-slider"
              >

                <swiper-slide class='people-slide'>
                      <Image alt='' src={LadyJusticeImg} className='slide-img' />
                      <div className="member-info">
                        <h3>Mahmoud Zakaria</h3>
                        <p>Attorny</p>
                      </div>
                </swiper-slide>
               
                <swiper-slide class='people-slide'>
                  <Image alt='' src={TbcLogo} className='slide-img' />
                  
                  <div className="member-info">
                        <h3>Mahmoud Zakaria</h3>
                        <p>Attorny</p>
                      </div>
                </swiper-slide>
                <swiper-slide class='people-slide'>
                  <Image alt='' src={MarbleImg} className='slide-img' />
                  <div className="member-info">
                        <h3>Mahmoud Zakaria</h3>
                        <p>Attorny</p>
                      </div>
                  
                </swiper-slide>
                <swiper-slide class='people-slide'>
                  <Image alt='' src={MarbleImg} className='slide-img' />
                  <div className="member-info">
                        <h3>Mahmoud Zakaria</h3>
                        <p>Attorny</p>
                      </div>
                  
                </swiper-slide>
                <swiper-slide class='people-slide'>
                  <Image alt='' src={MarbleImg} className='slide-img' />
                  <div className="member-info">
                        <h3>Mahmoud Zakaria</h3>
                        <p>Attorny</p>
                      </div>
                  
                </swiper-slide>
                <swiper-slide class='people-slide'>
                  <Image alt='' src={MarbleImg} className='slide-img' />

                  <div className="member-info">
                        <h3>Mahmoud Zakaria</h3>
                        <p>Attorny</p>
                      </div>
                  
                </swiper-slide>


              </swiper-container>

              
              <div className="btns-box">
                  <div onClick={()=>{
                  const swiperEl = document.querySelector('swiper-container.people-slider');
                   if(!swiperEl.swiper.isBeginning){
                          
                          swiperEl.swiper.slidePrev();
                       }
                 }
                
                } className="swiper-btn prev-btn"><i className="uil uil-angle-left"></i></div>
                <div onClick={()=>{
                  const swiperEl = document.querySelector('swiper-container.people-slider');
                       if(!swiperEl.swiper.isEnd){
                         swiperEl.swiper.slideNext();
                       }
                 }
                
                } className="swiper-btn nxt-btn"><i className="uil uil-angle-right"></i></div>
              </div>

            </div>

        </div>
    </section>
  )
}

export default OurPeople
