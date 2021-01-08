import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import axios from 'axios'




const Mockup = (props) => {
  // console.log(props)


  return (
    <>

      <div className="device-mockup macbook_2015  gold">
        <div className="device">
          <div className="screen">
            <section>
              <div id="carousel-ninja" className="carousel slide inside-laptop" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <img src={props.src} alt="..." />
                  </div>
                  {/* <div className="item">
                    <img src="../styles/greenworld.png" alt="..." />
                  </div>
                  <div className="item">
                    <img src="http://rukshan.me/andy/3.png" alt="..." />
                  </div>
                  <div className="item">
                    <img src="http://rukshan.me/andy/4.png" alt="..." />
                  </div> */}
                </div>
                {/* <!-- Controls --> */}
                <a className="left carousel-control" href="#carousel-ninja" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-ninja" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* <a href="#" className="playBtn" data-toggle="modal" data-target="#videoModal" data-theVideo="https://www.youtube.com/embed/6CJAXEv9wxU"><img className="yt_icon" src="https://www.youtube.com/yt/brand/media/image/YouTube-icon-full_color.png" /></a> */}

        <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="videoModal" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <div>
                  <iframe width="100%" height="340" src="https://www.youtube.com/embed/6CJAXEv9wxU"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">
        <div className="container">
          <div className="section title">
            Let's work together
          </div>
        </div>


      </div>



    </section> */}
    </>
  )

}

export default Mockup
