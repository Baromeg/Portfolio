import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// components

import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'

// import 'bulma'
import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Portfolio" component={Portfolio} />
    </Switch>
  </BrowserRouter>
)


export default App