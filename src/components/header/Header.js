import React from 'react';
import Navigation from './Navigation'
import '../../styles/Header.scss'
import Logoweb from '../../assets/logo_webh.png'

const Header =  () => {
    return (
        <header>
            <img src={Logoweb} alt='Logo WeBh' id='logo_web' />
            <Navigation/>
        </header>
    
        )
}

export default Header