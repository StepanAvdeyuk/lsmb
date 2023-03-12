import React from 'react';

import year from '../assets/year.svg';
import LSMBbig from '../assets/LSMBbig.svg';

const Sidebar = () => {
  return (
    <div className="sidebar__wrapper">
      <img className="sidebar__year" src={year} alt="" />
      <img className="sidebar__lsmb" src={LSMBbig} alt="" />
    </div>
  )
}

export default Sidebar