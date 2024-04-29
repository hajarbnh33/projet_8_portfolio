import React from 'react';
import Tags from './Tags';


function Title (){
    return(
        <div className='section_first' id='section1'>
            <div className='container_social'>
                <h2>Salut ! je suis Hajar, développeuse Web.</h2>
                <div className='tags_container'>
                    <Tags/>
                </div>
                <div className='about_me'>
                    <h4>A propos de moi...</h4>
                    <p>
                    Je suis passionnée par le développement front-end depuis un an, j'aime créer et partager.
                    De plus, je contribue, en tant que developpeuse web, au un projet d'une association, bénévolement.
                    Ma formation m'a permise d'avoir une base solide sur l'environnement du code.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Title