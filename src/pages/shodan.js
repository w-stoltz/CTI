import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/shodan'
import pic04 from '../assets/images/pic04.jpg'
import DM3 from '../assets/images/DM/DM3.jpg'
import DM4 from '../assets/images/DM/DM4.jpg'
import DM5 from '../assets/images/DM/DM5.jpg'
import DM6 from '../assets/images/DM/DM6.jpg'
import DM7 from '../assets/images/DM/DM7.jpg'
import DM8 from '../assets/images/DM/DM8.jpg'
import DM9 from '../assets/images/DM/DM9.jpg'
import DM10 from '../assets/images/DM/DM10.jpg'
import dns from '../assets/images/dns.png'
class Generic extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
          <footer className="major">
              <ul className="actions">
                <li><Link to="/" className="button">Main Page</Link></li>
              </ul>
            </footer>
          



                        <footer className="major">
              <ul className="actions">
                <li><Link to="/" className="button">Main Page</Link></li>
              </ul>
            </footer>
            

            
          </section>
        </div>

      </div>
    )
  }
}

export default Generic

export const pageQuery = graphql`
  query GenericQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
