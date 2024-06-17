import React from 'react'

function ArrowRightIcon({size = 32, width, height, stroke, ...props}) {
  return (
    <svg width={size || width} height={size || height} viewBox={`0 0 ${size} ${size}` || '0 0 24 24'} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.5 5L15.5 12L8.5 19" stroke={ stroke || "#353F38"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default ArrowRightIcon