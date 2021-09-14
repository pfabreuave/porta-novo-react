import React from 'react'
import './App.css';
import logo from './images/devel.png'

function Navega() {
  return (
    <div className="header">
        <div className="header__menu">

            <a href="/" className="header__menu__logo"><img src={logo} alt="logo"/><b className='ct'></b></a>
            
            <div className="header__nav">
                <nav>
                    <a href="/contacto">Contacto</a>
                    <a href="/#proyectos">Proyecto</a>
                    <a href="https://github.com/pfabreuave/">Github</a>
                </nav>
            </div>
        </div>
    </div>
)
}

export default Navega;   


