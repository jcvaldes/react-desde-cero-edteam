import React from 'react'

import Logo from '../Atoms/Logo'
import MainMenu from '../Atoms/MainMenu'

const Header = () => (
  <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <Logo />
      <MainMenu />
    </div>
  </header>
)


export default Header
