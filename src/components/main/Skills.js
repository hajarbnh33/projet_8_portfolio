import React from 'react';
import skillsData from '../../../create-react-app/src/data/skills.json'; 

function Skills (){
    return(
        <section className='section_second'id='section2'>
            <h3>Skills</h3>
            <article className='skills_container'>
                <div className='skills_list'>
                    <h4>Front-end</h4>
                    <ul>
                        {skillsData.frontEnd.map(skill => (
                            <li key={skill.name}>
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='skills_list'>
                    <h4>Back-end</h4>
                    <ul>
                        {skillsData.backEnd.map(skill => (
                            <li key={skill.name}>
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='skills_list'>
                    <h4>Design</h4>
                    <ul>
                        {skillsData.design.map(skill => (
                            <li key={skill.name}>
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='skills_list'>
                    <h4>Outils</h4>
                    <ul>
                        {skillsData.tools.map(skill => (
                            <li key={skill.name}>
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default Skills;