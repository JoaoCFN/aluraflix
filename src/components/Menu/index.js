import React from 'react';
import './Menu.css';

import logoMain from '../../assets/images/LogoMain.png';
import Button from '../Button';
// import ButtonLink from '../components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
			<a href="/">
                <img 
                    className="Logo" 
                    src={logoMain} 
                    alt="Logo Alura Flix"
                />
			</a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;