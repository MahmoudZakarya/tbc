import React from 'react'
import Btn from "@/components/btn"
import NewsCard from './news-card';

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
            <div className="newsletter">
                <h3>Subscribe to Our Newsletter</h3>
                 <div class="form-control">
                   <input type="email" class="input" placeholder="Enter e-mail adress" />
                   <button class="btn">Subscribe</button>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default News
