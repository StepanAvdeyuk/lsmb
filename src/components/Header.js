import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import useScrollBlock from '../hooks/useScrollBlock';

import logo from '../assets/logo.svg'

const Header = () => {

  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);
  const navigate = useNavigate();

  const [blockScroll, allowScroll] = useScrollBlock();

  return (
    <>
    <div className="header__container">
        <div className="container">
            <div className="header__wrapper" id="header">
                <div className="header__left">
                    <img className='logo' src={logo} alt="logo" />
                    <nav>
                        <ul>
                            <Link to="register" smooth={true} duration={400} offset={-200} onClick={() => navigate("/")}><li>Регистрация</li></Link>
                            <Link to="buy" smooth={true} duration={600} offset={-130} onClick={() => navigate("/")}><li>Купить билеты</li></Link>
                            <Link to="footer" smooth={true} duration={700} offset={-80} onClick={() => navigate("/")}><li>Контакты</li></Link>
                        </ul>
                    </nav>
                </div>
                <div className="header__burger" onClick={() => {setIsOpenSidebar(true); blockScroll()}}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
    <div className={isOpenSidebar ? "header__sidebar active" : "header__sidebar"} >
            <div className="header__sidebar-close" onClick={() => {setIsOpenSidebar(false); allowScroll();}}>✕</div>
            <ul>
                <Link to="register" smooth={true} duration={400} offset={-200} onClick={() => {setIsOpenSidebar(false); allowScroll(); navigate('/')}}><li>Регистрация</li></Link>
                <Link to="buy" smooth={true} duration={600} offset={-130} onClick={() => {setIsOpenSidebar(false); allowScroll(); navigate('/')}}><li>Купить билеты</li></Link>
                <Link to="footer" smooth={true} duration={700} offset={-80} onClick={() => {setIsOpenSidebar(false); allowScroll(); navigate('/')}}><li>Контакты</li></Link>
            </ul>
    </div>
    </>
  )
}

export default Header