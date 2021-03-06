import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderDiamond from '../components/diamond'
import pic04 from '../assets/images/pic04.jpg'
import DM3 from '../assets/images/DM/DM3.jpg'
import DM4 from '../assets/images/DM/DM4.jpg'
import DM5 from '../assets/images/DM/DM5.jpg'
import DM6 from '../assets/images/DM/DM6.jpg'
import DM7 from '../assets/images/DM/DM7.jpg'
import DM8 from '../assets/images/DM/DM8.jpg'
import DM9 from '../assets/images/DM/DM9.jpg'
import Typography from "typography";

import DM10 from '../assets/images/DM/DM10.jpg'
class Diamond extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderDiamond />
        <div id="main">
          <section id="content" className="main">
          <footer className="major">
              <ul className="actions">
                <li><Link to="/" className="button">Main Page</Link></li>
              </ul>
            </footer>
          


            <span className="image main"><img src={DM3} alt="" /></span>
            <span className="image main"><img src={DM4} alt="" /></span>
            <span className="image main"><img src={DM5} alt="" /></span>
            <span className="image main"><img src={DM6} alt="" /></span>
            <span className="image main"><img src={DM7} alt="" /></span>
            <span className="image main"><img src={DM8} alt="" /></span>
            <span className="image main"><img src={DM9} alt="" /></span>
            <span className="image main"><img src={DM10} alt="" /></span>

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

export default Diamond

export const pageQuery = graphql`
  query DiamondQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
