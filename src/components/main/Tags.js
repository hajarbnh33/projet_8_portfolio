import  React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons'; 

function Tags (){
    // Fonction pour gérer le téléchargement du CV
   const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf'; // Chemin relatif vers le fichier dans le dossier public
        link.download = 'cv.pdf'; // Nom du fichier à télécharger
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return(
        <div className='tags'>
            <ul className='tags_list'>
                <li> 
                    <FontAwesomeIcon icon={faGithub} />
                    <a href='https://github.com/hajarbnh33'target='_blank' rel="noreferrer">
                    GitHub
                    </a>
                </li>
                <li> 
                    <FontAwesomeIcon icon={faLinkedin} />
                    <a href='https://www.linkedin.com/in/hajar-bensrhayar/'target='_blank' rel="noreferrer"> 
                    Linkedin
                    </a>
                </li>
                <li> 
                    <FontAwesomeIcon icon={faFile} />
                    <button onClick={handleDownload} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}>
                        CV
                    </button>
                </li>
                <li> 
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href='mailto:hb-79@hotmail.fr' target='_blank' rel="noreferrer">
                    Email
                    </a>
                </li>
            </ul>

        </div>

    )
}

export default Tags