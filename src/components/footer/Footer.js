import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright} from '@fortawesome/free-solid-svg-icons';
import '../../styles/Footer.scss'

function Footer (){
    return(
        <footer className='footer_container'>
            <hr />
            <p>By Hajar BENSRHAYAR</p>
            <p>
            <FontAwesomeIcon icon={faCopyright} />
            2024 - Hajar BENSRHAYAR
            </p>

        </footer>
    )
}

export default Footer