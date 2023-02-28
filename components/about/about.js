import React from 'react'
import Btn from "@/components/btn"

function AboutUs() {
  return (
    <section className="about section">
        <div className="container">
            <div className="about-left">
                <h3 className="sub-heading">About us</h3>
                <h1 className="heading">Welcome To TBC</h1>
                <h3 className="heading-text">The top tier international law firm, <br /> from Turkey, for the world.</h3>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Odit perspiciatis delectus, esse laboriosam tempore quasi dicta odio soluta 
                 officia architecto similique consequuntur 
                eius ipsum incidunt expedita veritatis blanditiis possimus animi.</p>

                <Btn text="Read More" />
            </div>
            <div className="about-right"></div>
        </div>
    </section>
  )
}

export default AboutUs
