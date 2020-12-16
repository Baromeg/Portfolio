import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import axios from 'axios'




const Home = () => {



  return (
    <section className="hero is-fullheight-with-navbar is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="section title">
            Hello Home
          </div>
        </div>


      </div>



    </section>
  )

}

export default Home
