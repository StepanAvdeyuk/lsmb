import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import logo from '../assets/logo.svg';
import arrow from '../assets/arrow-top.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';

const Footer = () => {
  return (
    <div className="container">
    <div className="footer__wrapper" id='footer'>
        <div className="footer__nav">
            <img className='logo' src={logo} alt="logo" />
            <nav>
                <ul>
                    <Link to="register" smooth={true} duration={700} offset={-200}><li>Регистрация</li></Link>
                    <Link to="buy" smooth={true} duration={300} offset={-80}><li>Купить билеты</li></Link>
                    <Link to="footer" smooth={true} duration={300} offset={-80}><li>Контакты</li></Link>
                </ul>
            </nav>
            <div className="footer__links">
                <a href="#">
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="#">
                    <img src={instagram} alt="instagram" />
                </a>
            </div>
            {/* <div className="footer__to-top">
             <p>Вернуться наверх</p>
             <img src={arrow}/>
            </div> */}
            <Link to="header" smooth={true} duration={700} offset={0}>
                <div className="footer__to-top">
                    <p>Вернуться наверх</p>
                    <img src={arrow}/>
                </div>
            </Link>
        </div>
        <div className="footer__line"></div>
        <div className="footer__rights">2023 ©LSMB - All rights reserved.</div>
    </div>
</div>
  )
}

export default Footer