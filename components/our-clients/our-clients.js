import React, { useEffect } from 'react'
import Btn from "@/components/btn"
import Image from 'next/image'
import CourtFrontImg from '@/public/assets/court-front.jpg'
import { register } from 'swiper/element/bundle';
import "swiper/swiper.min.css";
import Logo1 from '@/public/assets/logos/logo1.png'
import Logo2 from '@/public/assets/logos/logo2.png'
import Logo3 from '@/public/assets/logos/logo3.png'
import Logo4 from '@/public/assets/logos/logo4.png'
import Logo5 from '@/public/assets/logos/logo5.png'
import Logo6 from '@/public/assets/logos/logo6.png'
import Logo7 from '@/public/assets/logos/logo7.png'
import Logo8 from '@/public/assets/logos/logo8.png'
import Logo9 from '@/public/assets/logos/logo9.png'

function OurClients() {

    useEffect(()=>{
        register();

    }, []);

  return (
    <section className="clients section">
        <Image src={CourtFrontImg} alt='' className='section-bg'/>

        <div className="container">
            <div className="clients-left">
                <h3 className="sub-heading">Our Clients</h3>
                <h1 className="heading">they trust us</h1>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Odit perspiciatis delectus, esse laboriosam tempore quasi dicta odio soluta 
                 officia architecto similique consequuntur 
                eius ipsum incidunt expedita veritatis blanditiis possimus animi.</p>

                <Btn text="View All our Clients" />
            </div>
            <div className="clients-right">
            <swiper-container   auto-height="true"  space-between="30" 
                class="clients-slider">

                <swiper-slide class="card-slide">
                <div className="client-card">
                  <Image src={Logo1} alt=''/>
                  
                </div>

                <div className="client-card">
                  <Image src={Logo2} alt=''/>
                  
                </div>

                <div className="client-card">
                  <Image src={Logo3} alt=''/>
                  
                </div>
                <div className="client-card">
                  <Image src={Logo4} alt=''/>
                  
                </div>
                </swiper-slide>

                
                <swiper-slide class="card-slide">
                <div className="client-card">
                  <Image src={Logo5} alt=''/>
                  
                </div>

                <div className="client-card">
                  <Image src={Logo6} alt=''/>
                  
                </div>

                <div className="client-card">
                  <Image src={Logo7} alt=''/>
                  
                </div>
                <div className="client-card">
                  <Image src={Logo8} alt=''/>
                  
                </div>
                </swiper-slide>

                
                <swiper-slide class="card-slide">
                <div className="client-card">
                  <Image src={Logo9} alt=''/>
                  
                </div>

                <div className="client-card">
                  <Image src={Logo3} alt=''/>
                  
                </div>

                <div className="client-card">
                  <Image src={Logo2} alt=''/>
                  
                </div>
                <div className="client-card">
                  <Image src={Logo5} alt=''/>
                  
                </div>
                </swiper-slide>

                
                <swiper-slide class="card-slide">
                <div className="client-card">
                  <Image src={Logo9} alt=''/>
                  
                </div>

                <div className="client-card">
                  <Image src={Logo8} alt=''/>
                  
                </div>

                <div className="client-card">
                  <Image src={Logo2} alt=''/>
                  
                </div>
                <div className="client-card">
                  <Image src={Logo7} alt=''/>
                  
                </div>
                </swiper-slide>

                

            </swiper-container>

            
              <div className="btns-box">
                  <div onClick={()=>{
                  const swiperEl = document.querySelector('swiper-container.clients-slider');
                   if(!swiperEl.swiper.isBeginning){
                          
                          swiperEl.swiper.slidePrev();
                       }
                 }
                
                } className="swiper-btn prev-btn"><i className="uil uil-angle-left"></i></div>
                <div onClick={()=>{
                  const swiperEl = document.querySelector('swiper-container.clients-slider');
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

export default OurClients
