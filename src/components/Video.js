import React from 'react'

import { isSafari } from "react-device-detect";

import video from "../assets/background.mp4"
import videoSafari from "../assets/background.gif"


const Video = () => {

  return (
    <div className="video__wrapper">
      {isSafari && <img src={videoSafari}/>}
      {!isSafari && <video src={video} autoPlay muted loop/>}
    </div>
  )
}

export default Video