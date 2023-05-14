import React, { useEffect, useRef } from 'react'
import NewsCard from '../news/news-card.js';


function Header() {

  const menu = useRef()
   function openNav(){
    if(!document.body.classList.contains("open")){
      document.body.classList.add("open");
      menu.current.classList.add("open")
    }else{
      menu.current.classList.remove("open")
      document.body.classList.remove("open");

    } 
  }
  
  return (
    <header className='header'>
        
          <div className="side-header">
            <div className="hamburger" onClick={openNav} >
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            
            <div className="socials">
                <a href="#" className="social-link"><i className="uil uil-facebook-f"></i></a>
                <a href="#" className="social-link"><i className="uil uil-twitter"></i></a>
                <a href="#" className="social-link"><i className="uil uil-linkedin"></i></a>
                <a href="#" className="social-link"><i className="uil uil-instagram"></i></a>
            </div>
            </div>

            <div className="menu" ref={menu}>
              
              <div className="menu-wrapper">
              <ul className="menu-list">
                <li className="menu-item"><a href="#"> Home</a></li>
                <li className="menu-item"><a href="#">Services</a></li>
                <li className="menu-item"><a href="#">About Us</a></li>
                <li className="menu-item"><a href="#">Clients</a></li>
                <li className="menu-item"><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="news-right">
              <h3 className="sub-heading">News</h3>
            <div className="news-grid">
                

                <NewsCard src="https://www.reuters.com/resizer/GacFcoE-5W60aA2lzNAkpOXz11s=/728x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/D4K3O6O5TRK3BP7EOZDL7O23EY.jpg"
                cata="Constitutional Lawx`" 
                title="U.S. Supreme Court pork ruling validates New York gun law, NY attorney general says"
                date="May 1, 2023"
                />

                
                <NewsCard src="https://images.pexels.com/photos/3859774/pexels-photo-3859774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                cata="Business" 
                title="Journal money make a list of progressvie companies in 2022"
                date="May 8, 2023"
                />

                
                <NewsCard src="https://www.reuters.com/resizer/h0XGaCoq_jB3k-1ghZk0oYGghs0=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/M2RJTZHLXNJTTNCNAEBSO4TNMU.jpg"
                cata="Litigation" 
                title="Tesla owners sue over impact of software update on EV batteries"
                date="April 12, 2023"
                />

                
            </div>
            </div>
            </div>

       
    </header>
  )
}

export default Header
