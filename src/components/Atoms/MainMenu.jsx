import React from 'react'
import { NavLink } from 'react-router-dom'

const MainMenu = () => {
  return (
    <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
      <nav className="main-menu" id="main-menu">
        <ul>
            <li><NavLink exact to="/" activeClassName="activo"> Inicio </NavLink></li>
            <li><NavLink to="/courses" activeClassName="activo"> Cursos </NavLink></li>
            <li><NavLink to="/form" activeClassName="activo"> Formulario </NavLink></li>
            <li><NavLink to="/history/algo?q=frontend#1" activeClassName="activo"> Historial </NavLink></li>
            <li><NavLink to="/users" activeClassName="activo"> Usuarios </NavLink></li>
            <li><NavLink to="/upload-files" activeClassName="activo"> Archivos </NavLink></li>

        </ul>
      </nav>
      <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
    </div>
  )
}

export default MainMenu
