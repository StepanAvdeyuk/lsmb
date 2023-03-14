import React from 'react'

const DraftModal = ({setIsOpenModal, setIsOpenDraftModal, allowScroll}) => {
  return (
    <div className="team-modal__wrapper">
        <div className="team-modal__content ais">
            <div className="modal__close" onClick={() => {setIsOpenDraftModal(false); allowScroll();}}>✕</div>
            <div className="team-modal__draft-title">
                Draft Combine
            </div>
            <p className="team-modal__draft-text">Draft Combine - это возможность проявить себя в мини-лагере для потенциальных игроков Лиги, поучаствовав в различных соревнованиях, всевозможных тестах и товарищеских матчах </p>
            <p className="team-modal__draft-text">Во время отбора за всеми участниками Драфта будут наблюдать представители команд. Они оценят возможности, технику и потенциал баскетболиста. От результативности игрока может зависеть его карьера и будущее в Лига Ставок MEDIA BASKET  </p>
            <p className="team-modal__draft-text">Мы приглашаем всех желающих баскетболистов воспользоваться крутой возможностью Драфта и проявить себя в медийном пространстве! </p>
            <p className="team-modal__draft-text">Не упусти свой шанс, ведь, возможно, именно ты станешь чемпионом 1 сезона 🏆</p>
            <button className="team-modal__draft-btn" onClick={() => {setIsOpenDraftModal(false); setIsOpenModal(true);}}>ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
    </div>
  )
}

export default DraftModal