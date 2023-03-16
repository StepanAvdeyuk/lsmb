import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import logo from '../assets/logo.svg';
import arrow from '../assets/arrow-top.svg';

import youtube from '../assets/youtube-s.svg';
import telegram from '../assets/telegram-s.svg';
import vk from '../assets/vk-s.svg';

const Footer = () => {
  return (
    <div className="container">
    <div className="footer__wrapper" id='footer'>
        <div className="footer__nav">
            <img className='logo' src={logo} alt="logo" />
            <nav>
                <ul>
                    <Link to="register" smooth={true} duration={700} offset={-200}><li>Регистрация</li></Link>
                    {/* <Link to="buy" smooth={true} duration={300} offset={-80}><li>Купить билеты</li></Link> */}
                    <Link to="footer" smooth={true} duration={300} offset={-80}><li>Контакты</li></Link>
                </ul>
            </nav>
            <div className="footer__links">
                <a href="https://youtube.com/@ligastavok.mediabasket" target={"_blank"}>
                    <img src={youtube} alt="facebook" />
                </a>
                <a href="https://t.me/ligastavok_mediabasket" target={"_blank"}>
                    <img src={telegram} alt="instagram" />
                </a>
                <a href="https://vk.com/ligastavok_mediabasket" target={"_blank"}>
                    <img src={vk} alt="instagram" />
                </a>
            </div>
            {/* <div className="footer__to-top">
             <p>Вернуться наверх</p>
             <img src={arrow}/>
            </div> */}
            <Link to="header" smooth={true} duration={700} offset={-60}>
                <div className="footer__to-top">
                    <p>Вернуться наверх</p>
                    <img src={arrow}/>
                </div>
            </Link>
        </div>
        <div className="footer__line"></div>
        <div className="footer__rights">2023 ©LSMB - All rights reserved. Developed by <a href='https://ATFLAB.ru' target={"_blank"}>ATF lab</a>.</div>
    </div>
</div>
  )
}

export default Footer