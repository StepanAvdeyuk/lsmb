import React from 'react'

import logo from '../assets/logo.svg';

import youtube from '../assets/youtube.svg';
import telegram from '../assets/telegram.svg';
import vk from '../assets/vk.svg';

const TeamModal = ({setIsOpenModal, name, descr}) => {
  return (
    <div className="team-modal__wrapper">
        <div className="team-modal__content">
            <div className="modal__close" onClick={() => setIsOpenModal(false)}>✕</div>
            <div className="team-modal__item">
              <img src={logo} alt="logo" />
              <p>{name}</p>
            </div>
            <div className="team-modal__descr">{descr}</div>
            <div className="team-modal__social">
                <a href="#"><img src={youtube} alt="" /></a>
                <a href="#"><img src={telegram} alt="" /></a>
                <a href="#"><img src={vk} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default TeamModal