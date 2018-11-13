import React, { Component } from 'react'
import Logo from './logo.png'

class Header extends Component {
  render() {
    return (
      <div>
        <nav class="header">
          <img src={Logo} />
          <div class="top-links">
            <a>RSS</a>
            <a>FAQ</a>
            <a>Back to GitHub</a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
