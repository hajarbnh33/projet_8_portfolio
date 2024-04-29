import  React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons'; 

function Tags (){
    return(
        <div className='tags'>
            <ul className='tags_list'>
                <li> 
                    <FontAwesomeIcon icon={faGithub} />
                    <a href='https://github.com/hajarbnh33'target='_blank'>
                    GitHub
                    </a>
                </li>
                <li> 
                    <FontAwesomeIcon icon={faLinkedin} />
                    <a href='https://www.linkedin.com/in/hajar-bensrhayar/'target='_blank'> 
                    Linkedin
                    </a>
                </li>
                <li> 
                    <FontAwesomeIcon icon={faFile} />
                    <a href='https://www.linkedin.com/in/hajar-bensrhayar/overlay/1714168140852/single-media-viewer/?profileId=ACoAADwxgzEBBYWTO6KW1UCWHxyz35YDJjT2dRo'target='_blank'>
                    CV
                    </a>
                </li>
                <li> 
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href='mailto:hb-79@hotmail.fr' target='_blank'>
                    Email
                    </a>
                </li>
            </ul>

        </div>

    )
}

export default Tags