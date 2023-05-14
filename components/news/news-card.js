import React from 'react'
import Image from 'next/image';

function NewsCard({src, cata, title, date }) {
  return (
    <div className="news-card">
                    <div className='img-container'><Image fill src={src}
                      alt='' className='news-card-img'/></div>
                     <div className="info">
                        <div className="overlay"></div>
                        <p>{cata}</p>
                        <h3>{title}</h3>
                        <p>{date}</p>
                     </div>
                </div>
  )
}

export default NewsCard
