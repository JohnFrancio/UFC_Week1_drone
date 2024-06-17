import React from 'react'

function StraightArrow({size = 32, width, height, stroke, ...props}) {
  return (
    <svg width={ width || size} height={ height || size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={ stroke || "#000000" } stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
  )
}

export default StraightArrow