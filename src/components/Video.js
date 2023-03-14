import React from 'react'

import video from "../assets/background.mp4"
import videoSafari from "../assets/background.gif"

const Video = () => {

  const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

  return (
    <div className="video__wrapper">
      {isSafari && <img src={videoSafari}/>}
      {!isSafari && <video src={video} autoPlay muted loop/>}
    </div>
  )
}

export default Video