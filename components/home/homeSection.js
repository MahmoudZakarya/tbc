import Image from 'next/image'
import React from 'react'
import TbcLogo from '../../public/assets/tbc-logo.png'
import JusticeStatueImg from '../../public/assets/marble.webp'

function HomeSection() {
  return (
    <section className="home">
       
        <Image src={JusticeStatueImg} alt=''  className='statue'/>
        <div className="home-header">
            <div className="header-left">
              <a href="#" className="logo">
                {/* here will be the logo */}
                <Image src={TbcLogo} alt='tbc logo' width={40}/>
                <div className="logo-text">
                  <h1>turkel barrios cuva</h1>
                  <p>Law Company</p>
                </div>
              </a>
            </div>

            <div className="header-right"><i className="uil uil-search"></i></div>

        </div>
        <div className="container">
            <div className="home-left">
                <h1 className="heading">
                    Protection liberty <br />
                    finding solution
                </h1>
                <div className="sub-text-container">
                    <h3 className='sub-text home-text'>Legal Protection.</h3>
                    <h3 className='sub-text home-text'>Financial Analysis.</h3>
                    <h3 className='sub-text home-text'>Attorney assistance.</h3>
                </div>

                <div className="btns">
                 
                  <a class="fancy" href="#">
                   <span class="top-key"></span>
                   <span class="btn-text">Get a consultation</span>
                   <span class="bottom-key-1"></span>
                   <span class="bottom-key-2"></span>
                 </a>


                  <a class="fancy" href="#">
                   <span class="top-key"></span>
                   <span class="btn-text">About us</span>
                   <span class="bottom-key-1"></span>
                   <span class="bottom-key-2"></span>
                 </a>

                </div>

            </div>
            <div className="home-right"></div>


        </div>
    </section>
  )
}

export default HomeSection
