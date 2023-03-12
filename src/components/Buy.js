import React from 'react'

import check from '../assets/check.svg';

const Buy = ({setIsOpenModal, blockScroll}) => {
  return (  
    <div className="container">
        <div className="buy__wrapper" id="buy">
            <h2>ПРИОБРЕСТИ БИЛЕТ</h2>
            <div className="buy__descr">Уникальный спортивно-развлекательный проект объединивший в себе профессиональных баскетболистов, звезд шоу-бизнесса</div>
            <div className="buy__bg">
                <div className="buy__bg-top">
                    <h3>КУПИТЬ БИЛЕТ</h3>
                    <p>Уникальный спортивно-развлекательный проект объединивший в себе профессиональных</p>
                </div>
                <div className="buy__bg-ul">
                    <div className="buy__bg-li">
                        <img src={check} alt="" />
                        <div className="buy__bg-text">Уникальный спортивно-развлекательный проект объединивший в себе</div>
                    </div>
                    <div className="buy__bg-li">
                        <img src={check} alt="" />
                        <div className="buy__bg-text">Уникальный спортивно-развлекательный проект объединивший в себе</div>
                    </div>
                    <div className="buy__bg-li">
                        <img src={check} alt="" />
                        <div className="buy__bg-text">Уникальный спортивно-развлекательный проект объединивший в себе</div>
                    </div>
                </div>
                <div className="buy__btn"  onClick={() => {setIsOpenModal(true); blockScroll();}}>КУПИТЬ БИЛЕТ</div>
                <div className="buy__price">$159</div>
            </div>
        </div>
    </div>
  )
}

export default Buy;