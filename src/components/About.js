import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fap } from '@fortawesome/free-solid-svg-icons'
import { faJsSquare, faPython, faReact, faNodeJs, faGitSquare, faGithub, faHtml5, faSass, faCss3 } from '@fortawesome/free-brands-svg-icons'


const About = () => {


  return <div>
    <section className="hero is-fullheight is-link">

      <div className="hero-body">
        <div className="container">

          <div className="section title has-text-primary is-family-code">
            Just me
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-6">

              <div className="tile is-parent">
                <article className="tile is-child notification is-link">

                  <div className="content is-size-5	">
                    <p className='has-text-primary'>My expertise thrived on leading and motivating people, improving operational processes and customer experiences. I am passionate and inspired by the fast evolution of technology, and I admire the endless possibilities that the development community can achieve.</p>
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
                    <div className="column ">

                      <p className="title is-7 has-text-primary">HTLM</p>
                      <FontAwesomeIcon icon={faHtml5} color='#f05454' size='5x' />
                    </div>
                    <div className="column ">

                      <p className="title is-7 has-text-primary">CSS</p>
                      <FontAwesomeIcon icon={faCss3} color='#f05454' size='5x' />
                    </div>
                    <div className="column ">

                      <p className="title is-7 has-text-primary">SASS</p>
                      <FontAwesomeIcon icon={faSass} color='#f05454' size='5x' />
                    </div>

                    <div className="column ">

                      <p className="title is-7 has-text-primary">Responsive</p>
                      <img className="image is-64x64 icons" src="../styles/responsive-design.png" alt="Responsive Design" />
                    </div>
                  </div>


                  <div className="columns is-multiline is-centered is-mobile has-text-centered	">
                    <div className="column">

                      <p className="title is-7 has-text-primary">JavaScript</p>
                      <FontAwesomeIcon icon={faJsSquare} color='#f05454' size='5x' />
                    </div>
                    <div className="column">

                      <p className="title is-7 has-text-primary">React.Js</p>
                      <FontAwesomeIcon icon={faReact} color='#f05454' size='5x' />
                    </div>
                    <div className="column">

                      <p className="title is-7 has-text-primary">MongoDB</p>

                      <img className="image is-64x64 icons" src="../styles/mongodb.png" alt="mongodb" />
                    </div>

                    <div className="column">

                      <p className="title is-7 has-text-primary">JWT</p>

                      <img className="image is-64x64 icons" src="../styles/jwt.png" alt="JWT" />
                    </div>

                  </div>

                  <div className="columns is-multiline is-centered is-mobile has-text-centered	">
                    <div className="column">

                      <p className="title is-7 has-text-primary">Python</p>
                      <FontAwesomeIcon icon={faPython} color='#f05454' size='5x' />
                    </div>
                    <div className="column">

                      <p className="title is-7 has-text-primary">Flask</p>
                      <img className="image is-64x64 icons" src="../styles/flask.png" alt="flask" />
                    </div>
                    <div className="column">

                      <p className="title is-7 has-text-primary">PostgreSQL</p>
                      <img className="image is-64x64 icons" src="../styles/postgresql.png" alt="PostgreSQL" />
                    </div>
                    <div className="column">

                      <p className="title is-7 has-text-primary">Marshmallow</p>
                      <img className="image is-64x64 icons" src="../styles/marshmallow.png" alt="Marshmallow" />
                    </div>

                  </div>

                  <div className="columns is-multiline is-centered is-mobile has-text-centered	">
                    <div className="column">

                      <p className="title is-7 has-text-primary">Node.js</p>
                      <FontAwesomeIcon icon={faNodeJs} color='#f05454' size='5x' />
                    </div>
                    <div className="column">

                      <p className="title is-7 has-text-primary">Babel</p>
                      <img className="image is-64x64 icons" src="../styles/babel.png" alt="Babel" />
                    </div>
                    <div className="column">

                      <p className="title is-7 has-text-primary">Express.js</p>
                      <img className="image is-64x64 icons" src="../styles/Express-JS-min.png" alt="Express.js" />
                    </div>
                    <div className="column ">

                      <p className="title is-7 has-text-primary">Webpack</p>
                      <img className="image is-64x64 icons" src="../styles/webpack.png" alt="Webpack" />
                    </div>
                  </div>

                  <div className="columns is-multiline is-centered is-mobile has-text-centered	">
                    <div className="column ">

                      <p className="title is-7 has-text-primary">VS Code</p>
                      <img className="image is-64x64 icons" src="../styles/vscode.png" alt="VS Code" />
                    </div>
                    <div className="column ">

                      <p className="title is-7 has-text-primary">Git</p>
                      <FontAwesomeIcon icon={faGitSquare} color='#f05454' size='5x' />
                    </div>
                    <div className="column">

                      <p className="title is-7 has-text-primary">GitHub</p>
                      <FontAwesomeIcon icon={faGithub} color='#f05454' size='5x' />
                    </div>
                    <div className="column ">

                      <p className="title is-7 has-text-primary">Heroku</p>
                      <img className="image is-64x64 icons" src="../styles/heroku.png" alt="Heroku" />
                    </div>
                  </div>

                </div>
                <div className="columns is-multiline is-centered is-mobile has-text-centered	">

                  <div className="column ">

                    <p className="title is-7 has-text-primary">Flexbox</p>
                    <img className="image is-64x64 icons" src="../styles/flexbox.png" alt="Flexbox" />
                  </div>
                  <div className="column ">

                    <p className="title is-7 has-text-primary">Bulma</p>
                    <img className="image is-64x64 icons" src="../styles/bulma.png" alt="Bulma" />
                  </div>
                  <div className="column">

                    <p className="title is-7 has-text-primary">Material UI</p>
                    <img className="image is-64x64 icons" src="../styles/material.png" alt="Material UI" />
                  </div>
                  <div className="column">

                    <p className="title is-7 has-text-primary">D3.js</p>
                    <img className="image is-64x64 icons" src="../styles/d3.png" alt="D3.js" />
                  </div>
                </div>
              </article>
            </div>
          </div>





        </div>


      </div>



    </section>
  </div >


}

export default About