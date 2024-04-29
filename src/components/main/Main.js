import React from 'react';
import Title from './Title';
import Logo from './Logo'
import Skills from './Skills'
import Project from './Projects';
import Contact from './Contactontact';
import '../../styles/Main.scss'

function Main (){

    return(
        <main >
            <section className='main_top'>
                <Title/>
                <Logo />
            </section>
        <Skills/>
        <Project />
        <Contact/>
        </main>
    )
}

export default Main