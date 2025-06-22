import React from 'react'
import './button.scss'

const Button = ({msg, handleFunction}) => {
  return (
      <button className='button' onClick={handleFunction}>{msg}</button>
  )
}

export default Button