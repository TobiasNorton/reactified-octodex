import React, { Component } from 'react'

import Octocat from './Octocat'
import cats from './cats.json'

class Octobody extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <section class="main-body">
            {cats.map(cat => (
              <Octocat
                number={cat.number}
                name={cat.name}
                image={cat.image}
                creatorImage={cat.creatorImage}
              />
            ))}
          </section>
        </div>
      </div>
    )
  }
}

export default Octobody
