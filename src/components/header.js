import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
    return ( 
        <header className="header">
            <img src={logo} alt="" className="header__img"/>
            <p className="header__author">Generator created by <a href="#" className="header__author-link">Bartłomiej Nowak</a></p>
            <h3 className="header__text">Create a great meme with this generator</h3>
        </header>
     );
}
 
export default Header;
