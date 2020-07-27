import React from 'react';
import './Menu.css';

import logoMain from '../assets/images/LogoMain.png';

function Menu(){
    return (
        <nav className="menu">
			<a href="/">
				<img className="logo" src={logoMain} alt="Logo Alura Flix"/>
			</a>
        </nav>
    );
}

export default Menu;