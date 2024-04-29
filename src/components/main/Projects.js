import React from 'react';
import projectsData from '../../../create-react-app/src/data/project.json';

function Project() {
    return (
       
        <div className="card-container" id='section3'> 
        <h3 className='section_third'>Projets</h3>
            {projectsData.map(projet => (
                <div className="card" key={projet.nom}>
                    <img src={projet.image} alt={projet.nom} className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title">{projet.nom}</h2>
                        <p className="card-description">{projet.description}</p>
                        <p className="card-technologies"><strong>Technologies utilisées :</strong> {projet.technologies}</p>
                        <p className="card-hard"><strong>Difficultés :</strong> {projet.hard}</p>
                        <a href={projet.lien} className="card-link">Voir sur GitHub</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;