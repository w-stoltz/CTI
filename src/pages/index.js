import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/drone.png'
import truck from '../assets/images/icons8-truck-96.png'
import ship from '../assets/images/ship.png'
import train from '../assets/images/train.png'
import will from '../assets/images/will_pic.jpg'
import marc from '../assets/images/will_pic.jpg'
import DM1 from '../assets/images/DM/DM1.jpg'
import DM2 from '../assets/images/DM/DM2.jpg'
import DM12 from '../assets/images/DM/DM1-2.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Introduction</h2>
                </header>
                <p>
                “Disclaimer: All content on this site is for educational purposes only
                </p>
                <p>
                  This is a Cyber Threat Intelligence Proposal as a part of MIS 562. The focus of this analysis is the Transportation Industry and associated systems
                </p>
                <p>
                 
              Due to Transportation's massive role in almost every individual on the face of the Earth, there are a myriad of threats and factors at play, which have only been magnified due to the rise of technological advancement and development.

                  
                </p>
                <ul className="actions">
                  <li><Link to="/generic" className="button">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Industry Background</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image"><img src={truck} alt="" /></span>
                <h3></h3>
                <p>The Transportation industry is essential for commerce and travel in some capacity in every country across the planet</p>
              </li>
              <li>
              <span className="image"><img src={ship} alt="" /></span>
                <h3></h3>
                <p>Logistics, which is a subset of the greater transportation system also plays a key factor in establishing when/where/how goods are transported and delivered to their destinations.</p>
              </li>
              <li>
              <span className="image"><img src={train} alt="" /></span>
                <h3></h3>
                <p>Beyond shipping and logistics, technology is poised to make huge leaps and bounds in the consumer sector.</p>
              </li>
            </ul>
            <p>
            Growth of the transportation industry and market disruptions within the domain of transportation have caused an increase in the use of technology. 
            <br />
            <br />
            These uses include but are not limited to:​
            <br />

            Resource management​
            <br />

            Trend identification and market prediction​
            <br />
            <br />

            Autonomous vehicle development

            Many technology focused firms, such as Amazon, Google, Apple, and Microsoft, are injecting their own business development processes into the transportation industry.

            </p>
            



            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Threat Modelling</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

                    <section id="diamond" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Diamond Models</h2>
                </header>
                <ul className="features">
              <li>
                <img src={DM1} alt="" />
     
                <img src={DM2} alt="" />
              </li>
              <li>
              
                
              </li>

            </ul>
              </div>

            </div>
            <ul className="actions">
                <li><Link to="/diamond" className="button">More Diamond Models</Link></li>
              </ul>


            
          </section>



                    <section id="cta" className="main special">
            <header className="major">
              <h2>About Us</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image"><img src={will} alt="" /></span>
                <h3>William Stoltz</h3>
                <p>William is a System Administrator for the Parking & Transportation Services Department at the University of Arizona, he is just past the halfway point of finishing his Masters of Science in Cybersecurity.</p>
                <p>He is a big fan of weight lifting, sneakers, and technology.</p>
              </li>
              <li>
              <span className="image"><img src={ship} alt="" /></span>
                <h3>Marc Padilla</h3>
                <p>TEMP</p>
              </li>

            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
