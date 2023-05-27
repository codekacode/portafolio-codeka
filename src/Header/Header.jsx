import React from 'react'
import Info from '../Info/Info'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <a class="logo" href="/">
        <span class="slideUp">
          <span>Codeka</span> 
        </span>
        <span class="slideUp">
          <span>Code</span> 
        </span>
        <span class="slideUp">
          <span>Co.</span> 
        </span>
      </a>
      <Info />
    </header>
  )
}

export default Header