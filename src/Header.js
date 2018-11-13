import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <nav class="header">
          <img src="./images/logo (1).png" />
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
