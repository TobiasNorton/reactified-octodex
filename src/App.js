import React, { Component } from 'react'
import './App.css'
import Octobody from './Octobody'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Octobody />
        <Footer />
      </div>
    )
  }
}

export default App
