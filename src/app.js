import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeStyles, CssBaseline } from '@material-ui/core'

// components

import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'

// import 'bulma'
import './styles/style.scss'

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

const App = () => (
  <>
    <Navbar />
    <CssBaseline />
    {/* <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
      </Switch>
    </BrowserRouter> */}
  </>
)


export default App