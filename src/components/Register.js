import React from 'react'

import bg from '../assets/regbg.svg';

const Register = ({setIsOpenModal, blockScroll}) => {
  return (
    <div className="container">
        <div className="register__wrapper" id="register">
            <h2>
            ЗАРЕГИСТРИРУЙТЕСЬ <br/>НА СЕЗОН ПРЯМО СЕЙЧАС
            </h2>
            <button className="register__btn" onClick={() => {setIsOpenModal(true); blockScroll();}}>ОСТАВИТЬ ЗАЯВКУ</button>
            <img src={bg} className='register__bg'/>
        </div>
    </div>
  )
}

export default Register