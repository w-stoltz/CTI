import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderShodan from '../components/shodan'
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
import shodan from '../assets/images/shodan.png'
import shodanmap from '../assets/images/coscomap.png'
import Typography from "typography";

class Shodan extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderShodan />
        <div id="main">
          <section id="content" className="main">
          <footer className="major">
              <ul className="actions">
                <li><Link to="/" className="button">Main Page</Link></li>
              </ul>
            </footer>
            <h2>Data Source: Shodan​</h2>
            

            <h3>Data Collection​</h3>

            Data collection is done primarily using the web interface, though APIs are available to paid customers. Web scraping is also possible, with the caveat of automation detection and limiting through use of captchas.
            <br />
            <br />

            <h3>CTI Value</h3>​

            Shodan provides host service information in an easily digestible way. This includes banner grabbing, service enumeration, and geographical location. This if valuable if we are seeking nodes in a specific region or office.
            <br />
            <br />

            <h3>Result</h3>​
            Navigating to the host in a web browser reveals a default IIS v7 page.
            <br />
            Indicative of a default Windows Server installation.​
            <br />
            In this case, also indicative of a misconfiguration, as this service should not be on the public internet.​
            <br />

            Host 63.247.189.137 also displays a default IIS v7 page.
            <span className="image main"><img style={{ margin: '3rem auto', width: 600}} src={shodan} alt="" /></span>

            <h3>Shodan Cosco Result</h3>​
            
            <p>

              Specifically, COSCO has hits around the globe on Shodan across every major continent. These are on different blocks than the address examined earlier however the same tests could be run on those IPs as well.

              </p>


            <span className="image main"><img style={{ margin: '3rem auto', width: 600}} src={shodanmap} alt="" /></span>



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

export default Shodan

export const pageQuery = graphql`
  query ShodanQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
