import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fap } from '@fortawesome/free-solid-svg-icons'
import { faJsSquare, faPython, faReact, faNodeJs, faGitSquare, faGithub, faHtml5, faSass } from '@fortawesome/free-brands-svg-icons'


const About = () => {


  return <div>
    <section className="hero is-fullheight is-link">

      <div className="hero-body ">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-6">

            <div className="tile is-parent">
              <article className="tile is-child notification is-link">
                <div className="columns">
                  <div className="column">
                    <p className=" is-size-2 is-uppercase	 has-text-centered has-text-weight-bold	">Just me</p>
                  </div>
                  <div className="column">
                    <figure className="image is-4by4 is-128x128 is-centered">
                      <img src="../styles/blackandwhite.jpeg" className="is-rounded" />
                    </figure>
                  </div>

                </div>


                <div className="content">
                  <p>My expertise thrived on leading and motivating people, improving operational processes and customer experiences. I am passionate and inspired by the fast evolution of technology, and I admire the endless possibilities that the development community can achieve.</p>
                  <p>I decided to blend my passion for software engineering and my creative and analytical thinking to pursue a career shift, becoming part of the solution for today’s world challenges. I am eager to collaborate in projects that develop a better and more sustainable future.</p>
                  <p>I am seeking a full-stack developer role in a cooperative and knowledge-sharing environment to continue learning and improving my skills, where I can share my ideas and create impactful contributions.</p>




                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-link">
              <div className="content">
                <div className="columns is-multiline is-centered is-mobile has-text-centered	">
                  <div className="column">

                    <p className="title is-7">JavaScript</p>
                    <FontAwesomeIcon icon={faJsSquare} color='#f05454' size='5x' />
                  </div>
                  <div className="column">

                    <p className="title is-7">React.Js</p>
                    <FontAwesomeIcon icon={faReact} color='#f05454' size='5x' />
                  </div>
                  <div className="column">

                    <p className="title is-7">MongoDB</p>

                    <img className="image is-64x64 icons" src="../styles/mongodb.png" alt="mongodb" />
                  </div>

                </div>
                <div className="columns is-multiline is-centered is-mobile has-text-centered	">
                  <div className="column">

                    <p className="title is-7">Python</p>
                    <FontAwesomeIcon icon={faPython} color='#f05454' size='5x' />
                  </div>
                  <div className="column">

                    <p className="title is-7">Flask</p>
                    <img className="image is-64x64 icons" src="../styles/flask.png" alt="flask" />
                  </div>
                  <div className="column">

                    <p className="title is-7">PostgresDB</p>
                    <img className="image is-64x64 icons" src="../styles/postgresql.webp" alt="flask" />
                  </div>

                </div>
                <div className="columns is-multiline is-centered is-mobile has-text-centered	">
                  <div className="column">

                    <p className="title is-7">Node.js</p>
                    <FontAwesomeIcon icon={faNodeJs} color='#f05454' size='5x' />
                  </div>
                  <div className="column">

                    <p className="title is-7">Babel</p>
                    <img className="image is-64x64 icons" src="../styles/babel.png" alt="flask" />
                  </div>
                  <div className="column">

                    <p className="title is-7">Express.js</p>
                    <img className="image is-64x64 icons" src="../styles/Express-JS-min.png" alt="flask" />
                  </div>

                </div>
                <div className="columns is-multiline is-centered is-mobile has-text-centered	">
                  <div className="column ">

                    <p className="title is-7">Git</p>
                    <FontAwesomeIcon icon={faGitSquare} color='#f05454' size='5x' />
                  </div>
                  <div className="column">

                    <p className="title is-7">GitHub</p>
                    <FontAwesomeIcon icon={faGithub} color='#f05454' size='5x' />
                  </div>
                  <div className="column ">

                    <p className="title is-7">Heroku</p>
                    <img className="image is-64x64 icons" src="../styles/heroku.png" alt="flask" />
                  </div>

                </div>
                <div className="columns is-multiline is-centered is-mobile has-text-centered	">
                  <div className="column ">

                    <p className="title is-7">HTLM</p>
                    <FontAwesomeIcon icon={faHtml5} color='#f05454' size='5x' />
                  </div>
                  <div className="column ">

                    <p className="title is-7">SASS</p>
                    <FontAwesomeIcon icon={faSass} color='#f05454' size='5x' />
                  </div>
                  <div className="column ">

                    <p className="title is-7">Bulma</p>
                    <img className="image is-64x64 icons" src="../styles/bulma.png" alt="Bulma" />
                  </div>
                  <div className="column">

                    <p className="title is-7">Material UI</p>
                    <img className="image is-64x64 icons" src="../styles/material.png" alt="Material UI" />
                  </div>


                </div>
              </div>
            </article>
          </div>
        </div>







      </div>



    </section>
  </div>


}

export default About