import React from 'react'

import youtube from '../assets/youtube.svg';
import telegram from '../assets/telegram.svg';
import vk from '../assets/vk.svg';

const AboutModal = ({setIsOpenAboutModal, allowScroll}) => {
  return (
    <div className="team-modal__wrapper">
        <div className="team-modal__content ais">
            <div className="modal__close" onClick={() => {setIsOpenAboutModal(false); allowScroll();}}>✕</div>
            <div className="team-modal__draft-subtitle">
                Первый медиа-турнир по баскетболу ЛИГА СТАВОК МЕДИА БАСКЕТ
            </div>
            <div className="team-modal__draft-subtitle">
                1 - 30 Апреля 2023, Arbat Hall, г. Москва
            </div>
            <p className="team-modal__draft-text">Лига Ставок MEDIA BASKET - первая медийная баскетбольная лига в России. </p>
            <p className="team-modal__draft-text">Этой весной мы соберем топовых игроков, музыкантов, блогеров и селебрети, чтобы столкнуть их лицом к лицу на игровой площадке и выяснить – кто лучший.</p>
            <p className="team-modal__draft-text">Ни один любитель баскетбола не останется равнодушным. </p>
            <p className="team-modal__draft-text">Подписывайтесь на наши <a href='https://youtube.com/@ligastavok.mediabasket' target={"_blank"}>социальные сети</a> и увидимся на паркете</p>
            <div className="team-modal__draft-social">
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
        </div>
    </div>
  )
}

export default AboutModal