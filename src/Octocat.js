import React, { Component } from 'react'

class Octocat extends Component {
  render() {
    return (
      <div class="outer-image">
        <img class="image-area" src={this.props.image} />
        <section class="caption">
          <p>#3</p>
          <div class="name-pic">
            <p>
              the <em>Octobi Wan Catnobi</em> by
            </p>
            <img src="https://github.com/cameronmcefee.png" />
          </div>
        </section>
      </div>
    )
  }
}

export default Octocat
