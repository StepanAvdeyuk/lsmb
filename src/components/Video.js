import React from 'react'

import video from "../assets/background.mp4"

const Video = () => {
  return (
    <div className="video__wrapper">
      <video src={video} autoPlay muted playsinline loop/>
    </div>
  )
}

export default Video