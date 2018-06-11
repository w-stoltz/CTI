import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderKali from '../components/kali'
import pic04 from '../assets/images/pic04.jpg'
import DM3 from '../assets/images/DM/DM3.jpg'
import DM4 from '../assets/images/DM/DM4.jpg'
import DM5 from '../assets/images/DM/DM5.jpg'
import DM6 from '../assets/images/DM/DM6.jpg'
import DM7 from '../assets/images/DM/DM7.jpg'
import DM8 from '../assets/images/DM/DM8.jpg'
import DM9 from '../assets/images/DM/DM9.jpg'
import dns from '../assets/images/dns.png'
import Typography from "typography";

class Kali extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderKali />
        <div id="main">
          <section id="content" className="main">
          <footer className="major">
              <ul className="actions">
                <li><Link to="/" className="button">Main Page</Link></li>
              </ul>
            </footer>

            <p>
            <h2>Data Source: Kali Linux​</h2>
            Kali Linux is a Linux distribution that comes with many information gathering tools installed. 
            It was selected as an OSINT data source for its domain name service (DNS) tools specifically. 
            We will use those tools to identify systems and services that may be targeted by attackers.
            <br />
            <br />

            <h2>Data Collection​</h2>
            Data collection will be done using bash in a virtual instance of Kali Linux. Analysis will be done using text editors, basic command line tools, and Python.

            <h2>CTI Value</h2>​

            Kali Linux will help identify public facing infrastructure that may be targeted by attackers.
              </p>

              
                <h2>Data</h2>

            <span className="image main"><img style={{ width: 300, height: 900}} src={dns} alt="" /></span>

            
          




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

export default Kali

export const pageQuery = graphql`
  query KaliQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
