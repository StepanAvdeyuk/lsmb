import React from 'react'

import smile from '../assets/smile-1.svg';
import lsmb from '../assets/LSMB.svg'

import bg from '../assets/thanksbg.jpg';

import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Thanks = () => {
  return (
    <>
    <Header/>
    <div className="container">
        <div className="promo__wrapper">
            <h1><span>Спасибо<img src={lsmb} alt="lsmb" /></span><br/>За Заявку</h1>
            <div className="promo__descr">
                <div className="promo__descr-pic">
                    <img src={smile} alt="smile" />
                </div>
                <div className="promo__descr-text">
                Уникальный спортивно-развлекательный проект объединивший<br/>
                в себе профессиональных баскетболистов, звезд шоу-бизнесса и просто<br/> 
                баскетбольных энтузиастов. Этой весной пройдет первый сезон 
                </div>
                <div className="promo__descr-text mob">
                Уникальный спортивно-развлекательный проект объединивший
                в себе профессиональных баскетболистов, звезд шоу-бизнесса и просто
                баскетбольных энтузиастов. Этой весной пройдет первый сезон 
                </div>
            </div>
            <Link to='/'><button className="promo__btn thanks w100">
                ВЕРНУТЬСЯ НА ГЛАВНУЮ
            </button></Link>
        </div>
    </div>
    <div className="thanks__bg">
        <img src={bg} alt="background" />
    </div>
    </>
  )
}

export default Thanks