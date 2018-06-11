import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/icons8-airplane-take-off-filled-100.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>CTI: Transportation</h1>
        <p>Cyber Threat Intelligence Platform Proposal<br />
        William Stoltz | Marc Padilla</p>
    </header>
)

export default Header
