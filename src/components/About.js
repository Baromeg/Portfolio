import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faGlobeAsia, faOm, fap, faRecycle, faRunning, faSkating } from '@fortawesome/free-solid-svg-icons'
import { faJsSquare, faPython, faReact, faNodeJs, faGitSquare, faGithub, faHtml5, faSass, faCss3, faLinkedin, faAws } from '@fortawesome/free-brands-svg-icons'
import babel from '../styles/Babel.png'
import bulma from '../styles/bulma.png'
import responsive from '../styles/responsive-design.png'
import mongodb from '../styles/mongodb.png'
import jwt from '../styles/jwt.png'
import flask from '../styles/flask.png'
import postgresql from '../styles/postgresql.png'
import marshmallow from '../styles/marshmallow.png'
import express from '../styles/Express-JS-min.png'
import webpack from '../styles/webpack.png'
import vscode from '../styles/vscode.png'
import heroku from '../styles/heroku.png'
import flexbox from '../styles/flexbox.png'
import material from '../styles/material.png'
import d3 from '../styles/d3.png'
import climate from '../styles/climate.png'
import bcorp from '../styles/b-corp.png'
import innovation from '../styles/innovation.png'
import roller from '../styles/roller_blading.png'
import running from '../styles/Running.svg.png'
import mindfulness from '../styles/mindfulness.png'


const About = () => {


  return <div>
    <section className="hero is-fullheight is-link">

      <div className="hero-body">
        <div className="container is-fullhd">

          <div className="section title has-text-primary is-family-code">
            About me
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-6">

              <div className="tile is-parent">
                <article className="tile is-child notification is-link">

                  <div className="content is-size-5	">
                    <p className='has-text-primary'>I am Baltasar, a graduated software engineer at General Assembly, seeking my first junior full-stack developer role to share my ideas, collaborate and continue developing my skills.</p>
                    <p className='has-text-primary'>           After more than 12 years of hospitality experience, I decided to blend my passion for software engineering and my creative and analytical side to pursue a career change and become part of the solution for today’s world challenges.</p>
                    <p className='has-text-primary'>                    I am eager to contribute to projects that develop a better and more sustainable tomorrow.</p>
                    {/* <p className='has-text-primary'>Connect with me if you would like to know more</p> */}
                    {/* <div className="columns is-mobile ">
                      <div className="column has-text-centered "> */}
                    {/* <p>
                          <strong>Baltasar Romero</strong>
          </p> */}
                    {/* <a target='_blank' rel='noreferrer' href="http://www.linkedin.com/in/baltasar-romero">
                          <FontAwesomeIcon icon={faLinkedin} color='#f05454' size='2x' className="pr-1" />

                        </a> */}
                    {/* <a target='_blank' rel='noreferrer' href="https://github.com/Baromeg/"><FontAwesomeIcon icon={faGithub} color='#f05454' size='2x' className="pl-1" />
                        </a> */}
                    {/* <a target='_blank' rel='noreferrer' href="mailto:baromeg@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} color='#f05454' size='2x' className="pl-2" />
                        </a> */}

                    {/* </div> */}
                    {/* <div className="column has-text-centered pt-5">
          
        </div> */}
                    {/* <div className="column has-text-centered">

        </div> */}
                    {/* </div> */}
                    {/* <p className='has-text-primary'>My expertise thrived on leading and motivating people, improving operational processes and customer experiences. I am passionate and inspired by the fast evolution of technology, and I admire the endless possibilities that the development community can achieve.</p> */}
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-link">
                <div className="content">

                  <div className="columns is-multiline is-centered is-flex-mobile has-text-centered	">
                    <div className="is-inline-flex">

                      <div className="column ">

                        <p className="title is-7 has-text-primary">HTLM</p>
                        <FontAwesomeIcon icon={faHtml5} color='#f05454' size='5x' />
                      </div>
                      <div className="column ">

                        <p className="title is-7 has-text-primary">CSS</p>
                        <FontAwesomeIcon icon={faCss3} color='#f05454' size='5x' />
                      </div>
                    </div>
                    <div className="is-inline-flex">

                      <div className="column ">

                        <p className="title is-7 has-text-primary">SASS</p>
                        <FontAwesomeIcon icon={faSass} color='#f05454' size='5x' />
                      </div>

                      <div className="column ">

                        <p className="title is-7 has-text-primary">Responsive</p>
                        <img className="image is-64x64 icons" src={responsive} alt="Responsive Design" />
                      </div>
                    </div>

                  </div>


                  <div className="columns is-multiline is-centered is-flex-mobile has-text-centered	">
                    <div className="is-inline-flex">

                      <div className="column">

                        <p className="title is-7 has-text-primary">JavaScript</p>
                        <FontAwesomeIcon icon={faJsSquare} color='#f05454' size='5x' />
                      </div>
                      <div className="column">

                        <p className="title is-7 has-text-primary">React.Js</p>
                        <FontAwesomeIcon icon={faReact} color='#f05454' size='5x' />
                      </div>
                    </div>
                    <div className="is-inline-flex">

                      <div className="column">

                        <p className="title is-7 has-text-primary">MongoDB</p>

                        <img className="image is-64x64 icons" src={mongodb} alt="mongodb" />
                      </div>

                      <div className="column">

                        <p className="title is-7 has-text-primary">JWT</p>

                        <img className="image is-64x64 icons" src={jwt} alt="JWT" />
                      </div>
                    </div>
                  </div>

                  <div className="columns is-multiline is-centered is-flex-mobile has-text-centered	">
                    <div className="is-inline-flex">

                      <div className="column">

                        <p className="title is-7 has-text-primary">Python</p>
                        <FontAwesomeIcon icon={faPython} color='#f05454' size='5x' />
                      </div>
                      <div className="column">

                        <p className="title is-7 has-text-primary">Flask</p>
                        <img className="image is-64x64 icons" src={flask} alt="flask" />
                      </div>
                    </div>
                    <div className="is-inline-flex">

                      <div className="column">

                        <p className="title is-7 has-text-primary">PostgreSQL</p>
                        <img className="image is-64x64 icons" src={postgresql} alt="PostgreSQL" />
                      </div>
                      <div className="column">

                        <p className="title is-7 has-text-primary">Marshmallow</p>
                        <img className="image is-64x64 icons" src={marshmallow} alt="Marshmallow" />
                      </div>
                    </div>
                  </div>

                  <div className="columns is-multiline is-centered is-flex-mobile has-text-centered	">
                    <div className="is-inline-flex">

                      <div className="column">

                        <p className="title is-7 has-text-primary">Node.js</p>
                        <FontAwesomeIcon icon={faNodeJs} color='#f05454' size='5x' />
                      </div>
                      <div className="column">

                        <p className="title is-7 has-text-primary">Babel</p>
                        <img className="image is-64x64 icons" src={babel} alt="Babel" />
                      </div>
                    </div>
                    <div className="is-inline-flex">

                      <div className="column">

                        <p className="title is-7 has-text-primary">Express.js</p>
                        <img className="image is-64x64 icons" src={express} alt="Express.js" />
                      </div>
                      <div className="column ">

                        <p className="title is-7 has-text-primary">Webpack</p>
                        <img className="image is-64x64 icons" src={webpack} alt="Webpack" />
                      </div>
                    </div>
                  </div>

                  <div className="columns is-multiline is-centered is-flex-mobile has-text-centered	">
                    <div className="is-inline-flex">

                      <div className="column ">

                        <p className="title is-7 has-text-primary">VS Code</p>
                        <img className="image is-64x64 icons" src={vscode} alt="VS Code" />
                      </div>
                      <div className="column ">

                        <p className="title is-7 has-text-primary">Git</p>
                        <FontAwesomeIcon icon={faGitSquare} color='#f05454' size='5x' />
                      </div>
                    </div>
                    <div className="is-inline-flex">

                      <div className="column">

                        <p className="title is-7 has-text-primary">GitHub</p>
                        <FontAwesomeIcon icon={faGithub} color='#f05454' size='5x' />
                      </div>
                      <div className="column">

                        <p className="title is-7 has-text-primary">Heroku</p>
                        <img className="image is-64x64 icons" src={heroku} alt="Heroku" />
                      </div>
                    </div>
                  </div>

                </div>
                {/* <div className="columns is-multiline is-centered is-flex-mobile has-text-centered	">

                  <div className="column ">

                    <p className="title is-7 has-text-primary">Flexbox</p>
                    <img className="image is-64x64 icons" src={flexbox} alt="Flexbox" />
                  </div>
                  <div className="column ">

                    <p className="title is-7 has-text-primary">Bulma</p>
                    <img className="image is-64x64 icons" src={bulma} alt="Bulma" />
                  </div>
                  <div className="column">

                    <p className="title is-7 has-text-primary">Material UI</p>
                    <img className="image is-64x64 icons" src={material} alt="Material UI" />
                  </div>
                  <div className="column">

                    <p className="title is-7 has-text-primary">D3.js</p>
                    <img className="image is-64x64 icons" src={d3} alt="D3.js" />
                  </div>
                </div> */}
              </article>
            </div>
          </div>





        </div>


      </div>



    </section>

    <section className="hero  is-primary">

      <div className="hero-body">
        <div className="container is-fullhd">

          <div className="section title has-text-link is-family-code">
            What I am currently learning          </div>
          <div className="columns is-multiline is-centered is-flex-mobile has-text-centered	">

            <div className="column ">

              <p className="title is-7 has-text-link">AWS</p>
              <FontAwesomeIcon icon={faAws} color='#f05454' size='5x' />
            </div>

            <div className="column">

              <p className="title is-7 has-text-link">Material UI</p>
              <img className="image is-64x64 icons" src={material} alt="Material UI" />
            </div>
            <div className="column">

              <p className="title is-7 has-text-link">D3.js</p>
              <img className="image is-64x64 icons" src={d3} alt="D3.js" />
            </div>
          </div>

          {/* <div className="tile is-ancestor">

            <div className="tile is-parent">
              <article className="tile is-child notification is-primary">
                <div className="content">


                  <div className="columns is-multiline is-centered is-flex-mobile has-text-centered	">

                    <div className="column ">

                      <p className="title is-7 has-text-link">AWS</p>
                      <FontAwesomeIcon icon={faAws} color='#f05454' size='5x' />
                    </div>

                    <div className="column">

                      <p className="title is-7 has-text-link">Material UI</p>
                      <img className="image is-64x64 icons" src={material} alt="Material UI" />
                    </div>
                    <div className="column">

                      <p className="title is-7 has-text-link">D3.js</p>
                      <img className="image is-64x64 icons" src={d3} alt="D3.js" />
                    </div>
                  </div>
                
                </div>

              </article>
            </div>


            <div className="tile is-vertical is-6">

              <div className="tile is-parent">
                <article className="tile is-child notification is-primary">

                  <div className="content is-size-5	">
                    <p className='has-text-link'>I am Baltasar, a graduated software engineer at General Assembly, I am seeking a Junior full-stack developer role where I can share my ideas and create impactful contributions.</p>
                  </div>
                </article>
              </div>
            </div>


          </div> */}





        </div>


      </div>



    </section>
    <section className="hero is-link">

      <div className="hero-body">
        <div className="container is-fullhd">

          <div className="section title has-text-primary is-family-code">
            What gets my attention         </div>

          <div className="columns is-multiline is-centered is-flex-mobile has-text-centered	">
            {/* <div className="is-inline-flex"> */}
            <div className="column ">
              <img className="image is-64x64 icons" src={innovation} alt="innovation" />

              <p className="title is-7 has-text-primary pt-3 interest">Innovation</p>
            </div>

            <div className="column ">
              <img className="image is-64x64 icons" src={climate} alt="climate change" />

              <p className="title is-7 has-text-primary pt-3 interest">Climate Change</p>
            </div>
            <div className="column ">
              <FontAwesomeIcon icon={faRecycle} color='#f05454' size='5x' />

              <p className="title is-7 has-text-primary pt-3 interest">Circular Economy</p>

            </div>
            {/* </div> */}
            {/* <div className="is-inline-flex"> */}



            <div className="column ">
              <img className="image is-64x64 icons" src={bcorp} alt="b-corp certification" />


              <p className="title is-7 has-text-primary pt-3 interest">B Corp Certification</p>
            </div>
            {/* </div> */}

          </div>

          {/* <div className="tile is-ancestor">
            <div className="tile is-vertical is-6">

              <div className="tile is-parent">
                <article className="tile is-child notification is-link">

                  <div className="content is-size-5	">
                    <p className='has-text-primary'>Although coding is not the only thing that keeps me going, it is helping me take actions on matters I care for.</p>
                    <ul className='has-text-primary'>
                      <li >I am excited about how innovation has the key to solve the equality and climate crisis.</li>
                      <li>I am aware that individual actions are not enough,  collective and inclusive solutions are the way forward </li>
                      <li>I am hopeful to see how initiatives like circular economy and the B Corp certification are signs that solutions are closer than we think.</li>
                    </ul>


                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-link">
                <div className="content">



                  
                </div>

              </article>
            </div>
          </div> */}

          <div className="columns is-multiline is-centered is-flex-mobile has-text-centered	">
            {/* <div className="is-inline-flex"> */}

            <div className="column ">
              <img className="image is-64x64 icons" src={roller} alt="Rollerblading" />

              <p className="title is-7 has-text-primary pt-3 interest">Rollerblading</p>
            </div>
            <div className="column ">
              <img className="image is-64x64 icons" src={mindfulness} alt="Mindfulness" />

              <p className="title is-7 has-text-primary pt-3">Mindfulness</p>
            </div>
            {/* </div> */}
            {/* <div className="is-inline-flex"> */}



            <div className="column ">
              <img className="image is-64x64 icons" src={running} alt="Running" />

              <p className="title is-7 has-text-primary pt-3">Running</p>
            </div>
            <div className="column ">
              <FontAwesomeIcon icon={faGlobeAsia} color='#f05454' size='5x' />

              <p className="title is-7 has-text-primary pt-3">Travelling</p>
            </div>
            {/* </div> */}

          </div>

          {/* <div className="tile is-ancestor">
            <div className="tile is-vertical is-6">

              <div className="tile is-parent">
                <article className="tile is-child notification is-link">

                  <div className="content is-size-5	">
                    <p className='has-text-primary'>What I do when I am not coding:</p>
                    <ul>
                      <li>Sport helps me clear my mind.</li>
                      <li>I am aware that individual actions are not enough,  collective solutions are the way forward </li>
                      <li>I am hopeful to see how initiatives like circular economy and the B Corp certification are signs that solutions are closer than we think.</li>
                    </ul>


                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-link">
                <div className="content">

                  <div className="columns is-multiline is-centered is-flex-mobile has-text-centered	">
                    <div className="is-inline-flex">

                      <div className="column ">
                        <img className="image is-64x64 icons" src={roller} alt="Rollerblading" />

                        <p className="title is-7 has-text-primary pt-3 interest">Rollerblading</p>
                      </div>
                      <div className="column ">
                        <img className="image is-64x64 icons" src={mindfulness} alt="Mindfulness" />

                        <p className="title is-7 has-text-primary pt-3">Mindfulness</p>
                      </div>
                    </div>
                    <div className="is-inline-flex">



                      <div className="column ">
                        <img className="image is-64x64 icons" src={running} alt="Running" />

                        <p className="title is-7 has-text-primary pt-3">Running</p>
                      </div>
                      <div className="column ">
                        <FontAwesomeIcon icon={faGlobeAsia} color='#f05454' size='5x' />

                        <p className="title is-7 has-text-primary pt-3">Travelling</p>
                      </div>
                    </div>

                  </div>



                </div>

              </article>
            </div>
          </div> */}




        </div>


      </div>



    </section>
  </div >


}

export default About