import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import Typography from "typography";


import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/drone.png'
import truck from '../assets/images/icons8-truck-96.png'
import ship from '../assets/images/ship.png'
import train from '../assets/images/train.png'
import will from '../assets/images/will_pic.jpg'
import marc from '../assets/images/marc_pic.png'
import DM1 from '../assets/images/DM/DM1.jpg'
import DM2 from '../assets/images/DM/DM2.jpg'
import DM12 from '../assets/images/DM/DM1-2.jpg'
import CAI from '../assets/images/CAI.png'
import shodan_ss from '../assets/images/shodan_ss.png'
import censys from '../assets/images/censys.png'
import shodan from '../assets/images/shodan.png'
import phishtank from '../assets/images/phishtank.png'
import kali from '../assets/images/kali.png'

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

              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main">
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
            <header className="major">
              <h2>Threat Trends</h2>
              <p>There are many trends at play with threats both local and global, with many different actors, systems, and pieces of infrastructure involved.

              </p>
            </header>
                            <p>
                  Among these trends, some relevant ones are:
                  <br />


                Data Breaches​
                <br />

                Ransomware
                <br />​

                Cyber-Physical Attacks
                <br />
                <br />

                Unavailability of IT systems and networks to support critical business processes.​
                <br />
                Breach of personal information, payment card information, and intellectual property.​
                <br />
                Criminal, disruption of critical infrastructure, physical asset damage, loss of life.​
                <br />
                Disgruntled employee or customer.​
                <br />
                Untargeted malicious code, random selection.
                test
                <br />
                <br />
                <header className="major">

                <h2 classname="major">Global Threat Trends</h2>
                </header>

                <p>
                Extortion via Ransomware​:
                <br />

2018 Verizon Data Breach Investigations Report has ransomware in the top five action varieties in incidents.​
<br />
<br />
Exploitation for Crypto-Currency Mining (Crypto-Jacking)​:
<br />
Trend Micro reports seeing ransomware variants repurposed for crypto-jacking.​
<br />
<br />
Distributed Denial of Service (DDoS) Attacks​:
<br />
Poland's National Airline has been the victim of a DDoS attack and Security Intelligence reports on the over-all increase in such attacks in Q1 2018.​
<br />
<br />
Payment Card Data Breaches​:
<br />
Payment card data breaches have already affected Delta Airlines in 2018.
<br />
<br />

                  <header className="major">

                  <h2 classname="major">Local Threat Trends</h2>
                </header>
                Rising Threat Target: Vehicles​
                <br />
                <br />
As vehicles integrate more technology they become more attractive and accessible targets for cyber-attacks. This has already cause firms to realign their resources with the new threats.​
<br />
Tesla CEO Elon Musk has stated that preventing a 'fleet-wide hack' is Tesla's top security priority.​
<br />
Components of vehicles have increased digital connectivity as well and face similar attacks. ​
<br />
As early as 2010, researchers were able to hack a vehicle through Bluetooth tire pressure gauges.​
<br />
​


                  </p>


                  </p>
            



            <footer className="major">

            </footer>
          </section>


 <section id="diamond" className="main">
          <header className="major">
          <h2>Threat Modelling</h2>
          <p> 
            Modelling potential/past threats can help predict future issues and problems and cna help safeguard exposed systems. By predicting attack scenarioos we can better address controls rather than play catch up and cleaning up afterwards.
          </p>

            </header>

                      <header className="major">
          <h2>Critical Asset Identification</h2>

            </header>
            <span className="image main"><img src={CAI} alt="" /></span>
          
            <header className="major">
          <h2>Diamond Models</h2>

            </header>


            <span className="image main"><img src={DM1} alt="" /></span>
            <span className="image main"><img src={DM2} alt="" /></span>


                        <footer className="major">
        <ul className="actions">
                <li><Link to="/diamond" className="button">More Diamond Models</Link></li>
              </ul>
            </footer>
            

            <p>
            <header className="major">
          <h2>Intelligence Buy-In</h2>


            </header>
            Transportation corporations increasingly rely on the connectivity of their critical assets to a hostile global network.​
            <br />
            <br />
Transportation firms are regularly compromised as part of blanket hacking campaigns as well as targeted nation-state attacks.​
<br />
<br />
Millions of dollars and customer loyalty has been lost from firms suffering breaches and service outages.​
<br />
<br />
Attacks WILL happen but there ARE actionable items that can make a positive difference in transportation security!
<br />
<br />
<br />
<h2>Prevention is ideal, but detection is a must!</h2>​
<br />
As a result, steps must be taken to properly safeguard systems, such as:
<br />
Invest in logging and detection systems.​
<br />

Create baseline levels of activity and audit regularly.​
<br />

Actively hunt for threats on your networks; Do not wait for indicators of compromise.​
<br />

Accept that breaches will happen and that good cyber security hygiene will minimize their impact on you, your customers, and your industry.
              </p>

            
          </section>

                              <section id="data" className="main">
            <header className="major">
              <h2>Data</h2>
            </header>
            <header className="minor">
          <h2>Kali Linux</h2>
          </header>
          <p>
          Linux distribution with tools for host enumeration, used to attempt to gather specific targets.
          <br />
          <br />

          <h3>Usability</h3>

          Determine IP Address of public website, <a href="www.cosco-usa.com​">www.cosco-usa.com​</a><br />

63.247.189.134​<br /><br />

Lookup IP address on ARIN.​<br />

<a href="https://whois.arin.net/rest/net/NET-63-247-189-0-1/pft?s=63.247.189.134">https://whois.arin.net/rest/net/NET-63-247-189-0-1/pft?s=63.247.189.134</a><br />
Cosco owns 63.247.189.0/24 block.​<br /><br />

Attempt DNS Zone Transfer using dig against name servers.​<br />

Blocked by firewall (no TCP/53 response)​<br />

Although DNS queries are over UDP, zone transfers are over TCP. Default deny of TCP on port 53 was detected.​<br /><br />

One name server is on a different block. Lookup on ARIN, part of 12.31.211.64/27. Add this block to targets.<br />

          <h3>Results</h3>

          <span className="image main"><img style={{ margin: '3rem auto', width: 600}} src={kali} alt="" /></span>
          Remote administration services are accessible over the public internet.​
          <br />

          Unencrypted administration information may be gathered on the telnet service.​
          <br />

          Files for information may be available on the FTP share.
          <br />
          <br />
          <Link to="/kali" className="button">Kali Linux Data and More Info</Link>
            </p>

          <header className="minor">
          <h2>Censys</h2>
          </header>
          <p>
          ARIN used to identify IP address blocks of specific transportation industry corporations
          <br />
          <br />
          Retains information on node services as well as geographical locations, when used with IP address blocks, such as COSCO's, it can be useful for targeting specific offices.
          <br />
          Physical locations could play a larger role with transportation when compared with other industries. Transportation inherently signals a source and destination and attempts to disrupt transit often use this to target attacks.
          
          <span className="image main"><img style={{ margin: '3rem auto', width: 600}} src={censys} alt="" /></span>
          
          
            </p>

       

    

          <header className="minor">
          <h2>Shodan</h2>
          </header>
          <p>
          Identify transportation industry network hosts that have services exposed to the public internet.<br />


          One host from our earlier scan identified 63.247.189.119 as having port 3389/TCP open. This port is commonly used for Windows Remote Desktop Connection and commonly brute forced by attackers. We can use Shodan to gather more information about this host.​<br />
          <br />

          <a href="https://www.shodan.io/host/63.247.189.119">https://www.shodan.io/host/63.247.189.119</a><br />

          

          Reveals that port 80 and 443 are also open, indicating a web server.​<br />
          <span className="image main"><img style={{ margin: '3rem auto', width: 800}} src={shodan_ss} alt="" /></span>

          Navigate to the host using a web browser.​<br />

          
          <Link to="/shodan" className="button">Shodan Data and More Info</Link>
            </p>





          <header className="minor">
          <h2>PhishTank</h2>
          </header>
          <p>

          PhishTank is a crowd-sourced repository of websites and addresses attempting to pretend to be a site they aren't. ​
          <br />

          Most commonly sent as links inside of emails from malicious attackers, they are attempting to have users input their information and then use it for their own devices.​
          <br />

​
<br />
          <div style={{margin: '3rem auto'}}> PhishTank gathers active/inactive phishing URLs and makes them available as well as a preview of what the live sites look like.</div>
          <span className="image main"><img style={{ margin: '3rem auto', width: 600}} src={phishtank} alt="" /></span>
          Example: Currently online phishing site pretending to be a Delta Airlines website prompting for login information.
          <br />
          <br />
          <Link to="/phishtank" className="button">PhishTank Data and More Info</Link>
            </p>
 
            <footer className="major">

            </footer>
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
                
                <p>Role:
                <br /> Industry Background, Relevant Threat Trends, CTI Platform Website, 5 of 10 Diamond Models, Data Gathering/Analysis </p>
              </li>
              <li>
              <span className="image"><img src={marc} alt="" /></span>
                <h3>Marc Padilla</h3>
                <p>Marc Padilla is a Senior Managing Consultant at Kroll Cyber Security and performs digital forensics and incident response for data breach investigations and cyber security engagements. He has recently started pursuing his Masters in Cybersecurity</p>
                <p>Role: 
                <br />Relevant Global Threat Trends, Relevant Local Threat Trends, Critical Asset Identification, 5 of 10 Diamond Models, Intelligence Buy-In, Data Gathering/Analysis</p>
              </li>

            </ul>
            <footer className="major">

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
