import { Link } from 'react-router-dom'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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

        </div>

      </div>
    </footer>

  </section >
}







export default Footer
