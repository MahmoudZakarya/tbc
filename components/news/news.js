import React from 'react'
import Btn from "@/components/btn"
import Image from 'next/image';

function News() {
  return (
    <section className="news section">
        <div className="container">
            <div className="news-head">
                <div className="left">
                    <h3 className="sub-heading">News</h3>
                    <h1 className="heading">Our Blog</h1>
                </div>
                <div className="right">
                    <Btn text="Read All News" color="white" />
                </div>
            </div>
            <div className="news-grid">
                <div className="news-card">
                    <Image  src="https://images.pexels.com/photos/3859774/pexels-photo-3859774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     width={50} height={50} alt='' className='news-card-img'/>
                     <div className="info">
                        <p>Business</p>
                        <h3>Journal money make a list of progressvie companies in 2022</h3>
                        <p>May 15, 2022</p>
                     </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default News
