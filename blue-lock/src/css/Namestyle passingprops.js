import React from 'react'
import './css.css'
function Namestyle1(props) {
  let property=props.primary?"primary" :' '
  return (
    <div>
          <h1 className='resolve'> Error</h1>

    <h1 className={property}>One Piece is Real</h1>
    </div>
  )
}

export default Namestyle1