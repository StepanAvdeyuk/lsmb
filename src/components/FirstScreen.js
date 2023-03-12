import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import bg from '../assets/firstbg.jpg';
import logo from '../assets/mainlogo.svg';
import arrow from '../assets/scrollarrow.svg';

const FirstScreen = () => {
  return (
    <div className="first__wrapper">
        <img src={bg} className="first__bg" alt="background" />
        
        <img src={logo} className="first__logo" alt="logotype"/>
        {/* <img src={arrow} className="first__arrow" alt="logotype"/> */}
        <div className="first__arrow">
          <Link to="header" smooth={true} duration={500} offset={0}><img src={arrow} alt="logotype"/></Link>
        </div>
    </div>
  )
}

export default FirstScreen