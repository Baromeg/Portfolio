import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'
import PropTypes from 'prop-types'
import { makeStyles, withStyles, ThemeProvider, useTheme, createMuiTheme, Container, Grid } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import Toolbar from '@material-ui/core/Toolbar'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'

import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fap, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faJsSquare, faPython, faReact, faNodeJs, faGitSquare, faGithub, faHtml5, faSass, faChrome, faCss3, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = (props) => {



  return <section>
    <footer className="footer">

      <div className="columns is-mobile ">
        <div className="column has-text-centered ">
          <p>
            <strong>Baltasar Romero</strong>
          </p>
          <a target='_blank' rel='noreferrer' href="http://www.linkedin.com/in/baltasar-romero">
            <FontAwesomeIcon icon={faLinkedin} color='#f05454' size='2x' className="pr-1" />

          </a>
          <a target='_blank' rel='noreferrer' href="https://github.com/Baromeg/"><FontAwesomeIcon icon={faGithub} color='#f05454' size='2x' className="pl-1" />
          </a>
          {/* <a target='_blank' rel='noreferrer' href="mailto:baromeg@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} color='#f05454' size='2x' className="pl-2" />
          </a> */}
        </div>
        {/* <div className="column has-text-centered pt-5">
          
        </div> */}
        {/* <div className="column has-text-centered">

        </div> */}
      </div>
    </footer>

  </section >
}







export default Footer


  // return <nav className="navbar is-warning">
  //   <div className="navbar-menu is-active">
  //     <div className="navbar-end">
  //       <div className="navbar-item">
  //         <div className="buttons">
  //           <Link className="button is-primary" to="/">Home</Link>
  //           <Link className="button is-info" to="/About">About</Link>
  //           <Link className="button is-link" to="/Portfolio">Portfolio</Link>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </nav>