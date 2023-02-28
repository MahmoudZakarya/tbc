import React from 'react'

function Header() {
  return (
    <header className='header'>
        <div className="container">
            <div className="hamburger" >
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
    </header>
  )
}

export default Header
