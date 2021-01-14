import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import axios from 'axios'




const Home = () => {



  return (
    <section className="hero is-fullheight-with-navbar is-primary">
      <div className="hero-body homebody">
        <div className="container">
          <div className="section title">
            <p className="Subtitle is-size-2 is-family-code has-text-primary is-size-4-mobile pb-5">{'Hello World!'}</p>

            <p className="title is-size-1 is-family-code has-text-primary is-size-2-mobile	">{'<I am Baltasar'}</p>
            <p className="title is-size-1 is-family-code has-text-primary is-size-2-mobile">{'Romero/>'}</p>
            <p className="Subtitle is-size-2 is-family-code has-text-primary is-size-4-mobile">{'Full-Stack Software Engineer'}</p>
          </div>
        </div>


      </div>



    </section>
  )

}

export default Home
