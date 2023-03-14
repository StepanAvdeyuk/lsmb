import React from 'react'

import Slider from "react-slick";

import arrow from '../assets/arrow.svg';
import arrow_s from '../assets/arrow-s.svg';
import logo from '../assets/logo.svg';
import TeamModal from './TeamModal';

const data = [{
  name: "Название команды 1",
  descr: "Уникальный спортивно-развлекательный проект объединивший в себе профессиональных баскетболистов, звезд шоу-бизнесса"
},{
  name: "Название команды 2",
  descr: "Уникальный спортивно-развлекательный проект объединивший в себе профессиональных баскетболистов, звезд шоу-бизнесса"
},{
  name: "Название команды 3",
  descr: "Уникальный спортивно-развлекательный проект объединивший в себе профессиональных баскетболистов, звезд шоу-бизнесса"
},{
  name: "Название команды 4",
  descr: "Уникальный спортивно-развлекательный проект объединивший в себе профессиональных баскетболистов, звезд шоу-бизнесса"
},{
  name: "Название команды 5",
  descr: "Уникальный спортивно-развлекательный проект объединивший в себе профессиональных баскетболистов, звезд шоу-бизнесса"
},{
  name: "Название команды 6",
  descr: "Уникальный спортивно-развлекательный проект объединивший в себе профессиональных баскетболистов, звезд шоу-бизнесса"
},{
  name: "Название команды 7",
  descr: "Уникальный спортивно-развлекательный проект объединивший в себе профессиональных баскетболистов, звезд шоу-бизнесса"
},{
  name: "Название команды 8",
  descr: "Уникальный спортивно-развлекательный проект объединивший в себе профессиональных баскетболистов, звезд шоу-бизнесса"
},];

const Teams = () => {

  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [activeModal, setActiveModal] = React.useState(0);
  

  function SimpleSlider() {
    var settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 250,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <div><img src={arrow}/></div>,
      prevArrow: <div><img src={arrow}/></div>,
      responsive: [ 
        { breakpoint: 1600, settings: { slidesToShow: 5 } }, 
        { breakpoint: 1400, settings: { slidesToShow: 4 } },
        { breakpoint: 1100, settings: { slidesToShow: 3 } }, 
        { breakpoint: 850, settings: { slidesToShow: 1, nextArrow: <div><img src={arrow_s}/></div>, prevArrow: <div><img src={arrow_s}/></div>,} }, 
      ]
    };
    return (
      <Slider {...settings}>
        {data && data.map((item, i) => {
          return <div>
            <div className="teams__item" onClick={() => {setIsOpenModal(true); setActiveModal(i);}}>
              <img src={logo} alt="logo" />
              <p>{item.name}</p>
            </div>
          </div>
        })}
      </Slider>
    )};


  return (
    <>
    <h2 className='teams__title'>НАШИ КОМАНДЫ</h2>
    <div className="teams__descr">Уникальный спортивно-развлекательный проект объединивший в себе профессиональных баскетболистов, звезд шоу-бизнесса</div>
    <div className="teams__slider">
      <SimpleSlider/>
    </div>
    {isOpenModal && <TeamModal setIsOpenModal={setIsOpenModal} name={data[activeModal].name} descr={data[activeModal].descr}/>}
    </>
  )
}

export default Teams