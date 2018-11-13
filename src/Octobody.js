import React, { Component } from 'react'

import Octocat from './Octocat'

class Octobody extends Component {
  render() {
    let cats = [
      {
        image: 'https://octodex.github.com/images/octobiwan.jpg',
        number: '#3',
        name: 'Octobi Wan Catnobi',
        creatorImage: 'https://github.com/cameronmcefee.png'
      },
      {
        image: 'https://octodex.github.com/images/stormtroopocat.png',
        number: '#86',
        name: 'Stormtroopocat',
        creatorImage: 'https://github.com/jeejkang.png'
      },
      {
        image: 'https://octodex.github.com/images/doctocat-brown.jpg',
        number: '#68',
        name: 'Doctocat Brown',
        creatorImage: 'https://github.com/jonrohan.png'
      },
      {
        image: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg',
        number: '#56',
        name: 'Octocat De Los Muertos',
        creatorImage: 'https://github.com/cameronmcefee.png'
      },
      {
        image: 'https://octodex.github.com/images/dunetocat.png',
        number: '#105',
        name: 'Dunetocat',
        creatorImage: 'https://github.com/JohnCreek.png'
      },
      {
        image: 'https://octodex.github.com/images/daftpunktocat-thomas.gif',
        number: '#102',
        name: 'Daftpunktocat-Thomas',
        creatorImage: 'https://github.com/jeejkang.png'
      },
      {
        image: 'https://octodex.github.com/images/heisencat.png',
        number: '#78',
        name: 'Heisencat',
        creatorImage: 'https://github.com/jonrohan.png'
      },
      {
        image: 'https://octodex.github.com/images/boxertocat_octodex.jpg',
        number: '#143',
        name: 'Boxertocat',
        creatorImage: 'https://github.com/rubyjazzy.png'
      },
      {
        image: 'https://octodex.github.com/images/justicetocat.jpg',
        number: '#136',
        name: 'Justicetocat',
        creatorImage: 'https://github.com/heyhayhay.png'
      },
      {
        image: 'https://octodex.github.com/images/gobbleotron.gif',
        number: '#120',
        name: 'Gobble-o-tron',
        creatorImage: 'https://github.com/JohnCreek.png',
        creatorImage: 'https://github.com/tonyjaramillo.png'
      },
      {
        image: 'https://octodex.github.com/images/xtocat.jpg',
        number: '#36',
        name: 'X-tocat',
        creatorImage: 'https://github.com/cameronmcefee.png'
      },
      {
        image: 'https://octodex.github.com/images/saritocat.png',
        number: '#114',
        name: 'Saritocat',
        creatorImage: 'https://github.com/JohnCreek.png'
      },
      {
        image: 'https://octodex.github.com/images/yaktocat.png',
        number: '#109',
        name: 'Yaktocat',
        creatorImage: 'https://github.com/jeejkang.png'
      },
      {
        image: 'https://octodex.github.com/images/ironcat.jpg',
        number: '#25',
        name: 'IronCat',
        creatorImage: 'https://github.com/cameronmcefee.png'
      },
      {
        image: 'https://octodex.github.com/images/murakamicat.png',
        number: '#83',
        name: 'Murakamicat',
        creatorImage: 'https://github.com/billyroh.png'
      }
    ]
    return (
      <div>
        <div class="container">
          <section class="main-body">
            {// Turn each element of `cats` into an `<Octocat/>`
            cats.map(cat => (
              <Octocat
                number="#3"
                name="Octobi Wan Catnobi"
                image="https://octodex.github.com/images/octobiwan.jpg"
                creatorImage="https://github.com/cameronmcefee.png"
              />
            ))}

            <Octocat
              number="#3"
              name="Octobi Wan Catnobi"
              image="https://octodex.github.com/images/octobiwan.jpg"
              creatorImage="https://github.com/cameronmcefee.png"
            />
            <Octocat
              image="https://octodex.github.com/images/stormtroopocat.png"
              number="#86"
              name="Stormtroopocat"
              creatorImage="https://github.com/jeejkang.png"
            />
            <Octocat
              image="https://octodex.github.com/images/doctocat-brown.jpg"
              number="#68"
              name="Doctocat Brown"
              creatorImage="https://github.com/jonrohan.png"
            />
            <Octocat
              image="https://octodex.github.com/images/octocat-de-los-muertos.jpg"
              number="#56"
              name="Octocat De Los Muertos"
              creatorImage="https://github.com/cameronmcefee.png"
            />
            <Octocat
              image="https://octodex.github.com/images/dunetocat.png"
              number="#105"
              name="Dunetocat"
              creatorImage="https://github.com/JohnCreek.png"
            />
            <Octocat
              image="https://octodex.github.com/images/daftpunktocat-thomas.gif"
              number="#102"
              name="Daftpunktocat-Thomas"
              creatorImage="https://github.com/jeejkang.png"
            />
            <Octocat
              image="https://octodex.github.com/images/heisencat.png"
              number="#78"
              name="Heisencat"
              creatorImage="https://github.com/jonrohan.png"
            />
            <Octocat
              image="https://octodex.github.com/images/boxertocat_octodex.jpg"
              number="#143"
              name="Boxertocat"
              creatorImage="https://github.com/rubyjazzy.png"
            />
            <Octocat
              image="https://octodex.github.com/images/justicetocat.jpg"
              number="#136"
              name="Justicetocat"
              creatorImage="https://github.com/heyhayhay.png"
            />
            <Octocat
              image="https://octodex.github.com/images/gobbleotron.gif"
              number="#120"
              name="Gobble-o-tron"
              creatorImage="https://github.com/JohnCreek.png"
              creatorImage="https://github.com/tonyjaramillo.png"
            />
            <Octocat
              image="https://octodex.github.com/images/xtocat.jpg"
              number="#36"
              name="X-tocat"
              creatorImage="https://github.com/cameronmcefee.png"
            />
            <Octocat
              image="https://octodex.github.com/images/saritocat.png"
              number="#114"
              name="Saritocat"
              creatorImage="https://github.com/JohnCreek.png"
            />
            <Octocat
              image="https://octodex.github.com/images/yaktocat.png"
              number="#109"
              name="Yaktocat"
              creatorImage="https://github.com/jeejkang.png"
            />
            <Octocat
              image="https://octodex.github.com/images/ironcat.jpg"
              number="#25"
              name="IronCat"
              creatorImage="https://github.com/cameronmcefee.png"
            />
            <Octocat
              image="https://octodex.github.com/images/murakamicat.png"
              number="#83"
              name="Murakamicat"
              creatorImage="https://github.com/billyroh.png"
            />

            <div class="outer-image">
              <img class="image-area" src="https://octodex.github.com/images/octobiwan.jpg" />
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

            <div class="outer-image">
              <img class="image-area" src="https://octodex.github.com/images/stormtroopocat.png" />
              <section class="caption">
                <p>#86</p>
                <div class="name-pic">
                  <p>
                    the <em>Stormtroopocat</em> by
                  </p>
                  <img src="https://github.com/jeejkang.png" />
                </div>
              </section>
            </div>

            <div class="outer-image">
              <img class="image-area" src="https://octodex.github.com/images/doctocat-brown.jpg" />
              <section class="caption">
                <p>#68</p>
                <div class="name-pic">
                  <p>
                    the <em>Doctocat Brown</em> by
                  </p>
                  <img src="https://github.com/jonrohan.png" />
                </div>
              </section>
            </div>

            <div class="outer-image">
              <img
                class="image-area"
                src="https://octodex.github.com/images/octocat-de-los-muertos.jpg"
              />
              <section class="caption">
                <p>#56</p>
                <div class="name-pic">
                  <p>
                    the <em>Octocat De Los Muertos</em> by
                  </p>
                  <img src="https://github.com/cameronmcefee.png" />
                </div>
              </section>
            </div>

            <div class="outer-image">
              <img class="image-area" src="https://octodex.github.com/images/dunetocat.png" />
              <section class="caption">
                <p>#105</p>
                <div class="name-pic">
                  <p>
                    the <em>Dunetocat</em> by
                  </p>
                  <img src="https://github.com/JohnCreek.png" />
                </div>
              </section>
            </div>

            <div class="outer-image">
              <img
                class="image-area"
                src="https://octodex.github.com/images/daftpunktocat-thomas.gif"
              />
              <section class="caption">
                <p>#102</p>
                <div class="name-pic">
                  <p>
                    the <em>Daftpunktocat-Thomas</em> by
                  </p>
                  <img src="https://github.com/jeejkang.png" />
                </div>
              </section>
            </div>

            <div class="outer-image">
              <img class="image-area" src="https://octodex.github.com/images/heisencat.png" />
              <section class="caption">
                <p>#78</p>
                <div class="name-pic">
                  <p>
                    the <em>Heisencat</em> by
                  </p>
                  <img src="https://github.com/jonrohan.png" />
                </div>
              </section>
            </div>

            <div class="outer-image">
              <img
                class="image-area"
                src="https://octodex.github.com/images/boxertocat_octodex.jpg"
              />
              <section class="caption">
                <p>#143</p>
                <div class="name-pic">
                  <p>
                    the <em>Boxertocat</em> by
                  </p>
                  <img src="https://github.com/rubyjazzy.png" />
                </div>
              </section>
            </div>

            <div class="outer-image">
              <img class="image-area" src="https://octodex.github.com/images/justicetocat.jpg" />
              <section class="caption">
                <p>#136</p>
                <div class="name-pic">
                  <p>
                    the <em>Justicetocat</em> by
                  </p>
                  <img src="https://github.com/heyhayhay.png" />
                </div>
              </section>
            </div>

            <div class="outer-image">
              <img class="image-area" src="https://octodex.github.com/images/gobbleotron.gif" />
              <section class="caption">
                <p>#120</p>
                <div class="name-pic">
                  <p>
                    the <em>Gobble-o-tron</em> by
                  </p>
                  <img src="https://github.com/JohnCreek.png" />
                  <img src="https://github.com/tonyjaramillo.png" />
                </div>
              </section>
            </div>

            <div class="outer-image">
              <img class="image-area" src="https://octodex.github.com/images/xtocat.jpg" />
              <section class="caption">
                <p>#36</p>
                <div class="name-pic">
                  <p>the X-tocat by</p>
                  <img src="https://github.com/cameronmcefee.png" />
                </div>
              </section>
            </div>

            <div class="outer-image">
              <img class="image-area" src="https://octodex.github.com/images/saritocat.png" />
              <section class="caption">
                <p>#114</p>
                <div class="name-pic">
                  <p>the Saritocat by</p>
                  <img src="https://github.com/JohnCreek.png" />
                </div>
              </section>
            </div>

            <div class="outer-image">
              <img class="image-area" src="https://octodex.github.com/images/yaktocat.png" />
              <section class="caption">
                <p>#109</p>
                <div class="name-pic">
                  <p>the Yaktocat by</p>
                  <img src="https://github.com/jeejkang.png" />
                </div>
              </section>
            </div>

            <div class="outer-image">
              <img class="image-area" src="https://octodex.github.com/images/ironcat.jpg" />
              <section class="caption">
                <p>#25</p>
                <div class="name-pic">
                  <p>the IronCat by</p>
                  <img src="https://github.com/cameronmcefee.png" />
                </div>
              </section>
            </div>

            <div class="outer-image">
              <img class="image-area" src="https://octodex.github.com/images/murakamicat.png" />
              <section class="caption">
                <p>#83</p>
                <div class="name-pic">
                  <p>the Murakamicat by</p>
                  <img src="https://github.com/billyroh.png" />
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Octobody
