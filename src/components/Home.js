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
            <p className="title is-1 is-family-code">{'<Baltasar'}</p>
            <p className="title is-1 is-family-code">{'Romero/>'}</p>
          </div>
        </div>


      </div>



    </section>
  )

}

export default Home
