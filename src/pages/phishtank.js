import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/phishtank'
import pic04 from '../assets/images/pic04.jpg'
import DM3 from '../assets/images/DM/DM3.jpg'
import DM4 from '../assets/images/DM/DM4.jpg'
import DM5 from '../assets/images/DM/DM5.jpg'
import DM6 from '../assets/images/DM/DM6.jpg'
import DM7 from '../assets/images/DM/DM7.jpg'
import DM8 from '../assets/images/DM/DM8.jpg'
import DM9 from '../assets/images/DM/DM9.jpg'
import DM10 from '../assets/images/DM/DM10.jpg'
import phish_data from '../assets/images/phish_data.png'
import Typography from "typography";

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
            <h2>Data Source: PhishTank</h2>
            Data is displayed in tabular format and displayable by industry.​
            <br />
            

            For the transportation industry it provides transportation companies such as Delta Airlines and American Airlines, and it covers DHL which handles shipping and logsitics.
            <br />
            <br />

​

            American Airlines: 24 valid phishes since Oct. 2010​
            <br />

            Delta: 81 since Jul. 2012​
            <br />
            DHL: Over 250 since Jan. 2016​
            <br />
            US Airways: 11 since Jul. 2012
            <br />
            <br />

            <h2>Data Collection​</h2>
            Data collection is done through the PhishTank website, with larger groups of phishing data searchable by company being masqueraded as. In addition they do have an API/Developer system with mass amounts of data being available/usable.
            

            <h2>CTI Value</h2>​
            Understanding trends and patterns of phishing sites as well as having an aggregated list of them can help prevent, block, and report them by the company being impersonated.

            
              

              
                <h2>Data</h2>
            <span className="image main"><img style={{ width: 800}} src={phish_data} alt="" /></span>
          



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
