import React from 'react'
import './header.css'

import mojoblogo from '../../assets/mojob_logo_on_white.png'

function Header() {
  return (
    <div className='header'>
      <div className='header__image'>
        <img src={mojoblogo} alt="Mojob Logo" />
      </div>
    </div>
  )
}

export default Header