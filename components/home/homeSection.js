import Image from 'next/image'
import React , { useEffect, useRef } from 'react'
// import TbcLogo from '../../public/assets/tbc-logo.png'
import MarbleImg from '../../public/assets/marble.webp'
import LadyJusticeImg from '../../public/assets/ladyjustice.png'
import Header from './header'
import TbcLogo from '../../public/assets/svg-logo.svg'



function HomeSection() {

  const homeInfo = useRef(null);
 const homeImg = useRef(null);
  useEffect(()=>{

    async function animate(){
      if(homeInfo.current && homeImg.current){
        const sr = (await import("scrollreveal")).default
        sr().reveal(homeInfo.current, {delay: 600, duration:2500, distance:'60px' })
        sr().reveal(homeImg.current, {delay: 700, duration:2500, distance:'60px', origin:"top" })
      }
    }

    animate();
    


  }, []);

  return (
    <section className="home">
        <Header/>
        <Image priority={true} src={MarbleImg} alt=''  className='marble'/>
        <div className="home-header" >
            <div className="header-left" >
              <a href="#" className="logo">
                {/* here will be the logo */}
                {/* <Image src={TbcLogo} quality={100} alt='tbc logo' width={40}/> */}
                <TbcLogo/>
                <div className="logo-text">
                  <h1>turkel barrios cuva</h1>
                  <p>Since 1980</p>
                </div>
              </a>
            </div>

            <div className="header-right" ><i className="uil uil-search"></i></div>

        </div>
        <div className="home-container">
            <div className="home-left" ref={homeInfo}>
                <h1 className="heading">
                   <span> Protection liberty</span> <br />
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
            <div className="home-right" ref={homeImg}>
              <Image priority={true} src={LadyJusticeImg}  alt=''  className='statue'/>
            </div>


        </div>
    </section>
  )
}

export default HomeSection
