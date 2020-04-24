import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
    return ( 
        <header className="header">
            <img src={logo} alt="" className="header__img"/>
            <p className="header__author">Generator created by <a href="https://github.com/BartoNatanael" className="header__author-link">Bartłomiej Nowak</a></p>
            <h2 className="header__text">Create a great meme with this generator!</h2>
        </header>
     );
}
 
export default Header;
