import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faEnvelope, fap, faPaperPlane, faSignature } from '@fortawesome/free-solid-svg-icons'
import { faJsSquare, faPython, faReact, faNodeJs, faGitSquare, faGithub, faHtml5, faSass, faCss3, faChrome, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import me from '../styles/blackandwhite.jpeg'


const Contact = () => {



  return (
    <section className="hero is-fullheight-with-navbar is-link">
      <div className="hero-body">
        <div className="container is-fullhd">
          <div className="section title has-text-primary is-family-code">
            Let's work together
          </div>
          <div className="columns">

            <div className="column is-5 is-mobile">

              <figure className="image is-4by4  is-centered">
                <img src={me} className="is-rounded" />
              </figure>

            </div>
            <div className="column">
              <div className="columns is-mobile ">
                <div className="column has-text-centered ">
                  <a target='_blank' rel='noreferrer' href="http://www.linkedin.com/in/baltasar-romero">
                    <FontAwesomeIcon icon={faLinkedin} color='#f05454' size='3x' />

                  </a>
                </div>
                <div className="column has-text-centered">
                  <a target='_blank' rel='noreferrer' href="https://github.com/Baromeg/"><FontAwesomeIcon icon={faGithub} color='#f05454' size='3x' />
                  </a>
                </div>
              </div>
              <form action="https://formspree.io/f/mvovdgkl" method="POST">


                <div className="field">
                  <label className="label has-text-primary	">Your Name</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      placeholder="Your Name"
                      name="name"
                    />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faSignature} color='#f05454' size='1x' />
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label has-text-primary">Your Email</label>
                  <div className="control has-icons-left">
                    <input
                      className="input "
                      type="email"
                      placeholder="Your email"
                      name="_replyto"
                    />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faEnvelope} color='#f05454' size='1x' />
                    </span>

                  </div>
                </div>

                <div className="field">
                  <label className="label has-text-primary">Message</label>
                  <div className="control has-icons-left">
                    <textarea
                      className="textarea" placeholder="Write your message"
                      name="text"
                    ></textarea>
                    {/* <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faComments} color='#f05454' size='1x' />
                    </span> */}
                  </div>
                </div>

                <div className="field is-grouped">
                  <div className="control">

                    <button
                      className="button is-info has-text-weight-semibold has-text-link	"
                      value="Send"
                    >
                      <span className="icon">
                        <FontAwesomeIcon icon={faPaperPlane} color='#30475e' size='1x' />
                      </span>
                      <span>Send</span>
                    </button>
                  </div>

                </div>
              </form>
            </div>

            </div>
        </div>


      </div>



    </section>
  )

}

export default Contact
