import React from 'react'

function Button({size, ...other}) {
  return (
    <button className={`default-style btn primary`} >
        <span className={``}>{other.children}</span>
        <span></span>
    </button>
  )
}

export default Button