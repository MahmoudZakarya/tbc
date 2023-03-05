import Image from 'next/image'
import React from 'react'
import TbcLogo from '../../public/assets/tbc-logo.png'
import MarbleImg from '../../public/assets/marble.webp'
import LadyJusticeImg from '../../public/assets/ladyjustice.png'
import Header from './header'

function HomeSection() {
  return (
    <section className="home">
        <Header/>
        <Image priority={true} src={MarbleImg} alt=''  className='marble'/>
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
        <div className="home-container">
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
            <div className="home-right">
              <Image src={LadyJusticeImg}  alt=''  className='statue'/>
            </div>


        </div>
    </section>
  )
}

export default HomeSection
