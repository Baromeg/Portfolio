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

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })

  return (
    <Slide appear={false} direction="down"
      in={!trigger}
    >
      {children}
    </Slide>
  )
}



const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      // maxWidth: 80,
      // padding: 5,
      width: '100%',
      backgroundColor: '#f05454'
    }
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />)

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#30475e',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(20),
    marginRight: theme.spacing(1),
    '&:focus': {
      // opacity: 10
      fontWeight: 2
    }
  }
}))((props) => <Tab disableRipple {...props} />)

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(3)
  }
}))
function ScrollTop(props) {
  const { children, window } = props
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
}
const theme = createMuiTheme({
  // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  // props: {
  //   color: 'transparent'
  // },
  palette: {
    primary: {
      // light: '#757ce8',
      main: '#e8e8e8'
      // dark: '#002884',
      // contrastText: '#fff'
    },
    info: {
      // light: '#ff7961',
      main: '#f05454'
      // dark: '#ba000d',
      // contrastText: '#000'
    },
    link: {
      // light: '#ff7961',
      main: '#30475e'
      // dark: '#ba000d',
      // contrastText: '#000'
    },
    warning: {
      // light: '#ff7961',
      main: '#222831'
      // dark: '#ba000d',
      // contrastText: '#000'
    }
  }
})


const Navbar = (props) => {

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return <section>

    <ThemeProvider theme={theme}>
      <div
      >
        <HideOnScroll {...props}>

          <AppBar
          >
            <Toolbar
            >
              <div className="columns">
                <div className="column is-12">


                  <Grid container>

                    <Grid item xs={12}>


                      <StyledTabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                      >
                        <StyledTab
                          label="home"
                          className='is-family-code has-text-weight-semibold		'
                        />
                        <StyledTab
                          label="just me"
                          className='is-family-code has-text-weight-semibold'
                        />
                        <StyledTab
                          label="my work"
                          className='is-family-code has-text-weight-semibold'
                        />
                        <StyledTab
                          label="get in touch"
                          className='is-family-code has-text-weight-semibold'
                        />
                      </StyledTabs>
                    </Grid>
                  </Grid>
                </div>

              </div>
            </Toolbar>

          </AppBar>
        </HideOnScroll>
        <Toolbar id="back-to-top-anchor" />

        <SwipeableViews
          // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          animateHeight
          onChangeIndex={handleChangeIndex}
        >

          <div value={value} index={0}
          >
            <Home></Home>
          </div>
          <div value={value} index={1}
          >
            <About></About>
          </div>
          <div value={value} index={2}
          >
            <Portfolio></Portfolio>
          </div>
          <div value={value} index={3}
          >
            <Contact></Contact>
          </div>
          <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </SwipeableViews>
      </div>

    </ThemeProvider>
  </section >
}







export default Navbar


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