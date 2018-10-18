import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Introductions</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Industry Background</a>
                </Scroll>
            </li>

            <li>
                <Scroll type="id" element="diamond">
                    <a href="#">Threat Modelling</a>
                </Scroll>
            </li>

            
            <li>
                <Scroll type="id" element="data">
                    <a href="#">Data</a>
                </Scroll>
            </li>


            <li>
                <Scroll type="id" element="cta">
                    <a href="#">About Us</a>
                </Scroll>
            </li>

            

            
        </Scrollspy>
    </nav>
)

export default Nav
