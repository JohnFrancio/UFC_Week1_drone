import React from 'react'

function PlayIcon({ size = 24, width, height,fill, ...props }) {
  return (
    <svg width={size || width} height={size || height} viewBox="0 0 24 24" {...props}>
    <path d="M17.6041 9.41422C19.5761 10.5742 19.5761 13.4259 17.6041 14.5858L9.52106 19.3406C7.52116 20.517 5 19.075 5 16.7548V7.24527C5 4.92503 7.52116 3.48306 9.52106 4.65947L17.6041 9.41422Z" fill={fill||'black'}/>
    </svg>
  )
}

export default PlayIcon