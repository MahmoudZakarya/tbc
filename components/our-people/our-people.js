import React, { useEffect } from 'react'
import Btn from "@/components/btn"
import Image from 'next/image';
import { register } from 'swiper/element/bundle';
import "swiper/swiper.min.css";
import 'swiper/css/pagination';
import JimImg from '../../public/assets/Jim-Christy.jpg'
import DevinImg from '../../public/assets/Devin-Stone.jpg'
import OliviaImg from '../../public/assets/Olivia-Wells.jpg'
import PeterImg from '../../public/assets/Peter-Zinkovetsky.webp'
import SeanImg from '../../public/assets/Sean-Robichaud.webp'



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

                <Btn text="View All" color="white" />
            </div>
            <div className="our-people-right">
                <swiper-container slides-per-view="auto"
               centered-slides="true" space-between="10"
                   class="people-slider"
              >

               
                <swiper-slide class='people-slide'>
                  <Image alt='' src={JimImg} className='slide-img' />
                  
                  <div className="member-info">
                        <h3>Jim Christy</h3>
                        <p>Attorny</p>
                      </div>
                </swiper-slide>
                
                <swiper-slide class='people-slide'>
                      <Image alt='' src={OliviaImg} className='slide-img' />
                      <div className="member-info">
                        <h3>Olivia Wells</h3>
                        <p>Attorny</p>
                      </div>
                </swiper-slide>
                <swiper-slide class='people-slide'>
                  <Image alt='' src={DevinImg} className='slide-img' />
                  <div className="member-info">
                        <h3>Devin Stone</h3>
                        <p>Attorny</p>
                      </div>
                  
                </swiper-slide>
                <swiper-slide class='people-slide'>
                  <Image alt='' src={PeterImg} className='slide-img' />
                  <div className="member-info">
                        <h3>Peter Zinkovetsky</h3>
                        <p>Attorny</p>
                      </div>
                  
                </swiper-slide>
                <swiper-slide class='people-slide'>
                  <Image alt='' src={SeanImg} className='slide-img' />
                  <div className="member-info">
                        <h3>Sean Robichaud</h3>
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
